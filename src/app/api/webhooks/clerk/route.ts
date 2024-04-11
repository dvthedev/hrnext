import { SessionInsert, sessionTable } from '@/db/schema'
import { SessionJSON, WebhookEvent } from '@clerk/nextjs/server'

import { Webhook } from 'svix'
import db from '@/db/drizzle'
import { headers } from 'next/headers'

// TODO: remove this
export const GET = async () => {
  return Response.json({ message: 'Hello, World!!!' })
}

export const POST = async (req: Request) => {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error(
      'Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local'
    )
  }

  // Get the headers
  const headerPayload = headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occured', {
      status: 400,
    })
  }

  // Get the ID and type
  const { id } = evt.data
  const eventType = evt.type

  switch (eventType) {
    case 'session.created' ||
      'session.ended' ||
      'session.removed' ||
      'session.revoked':
      await handleSessionEvent(eventType, evt.data)
      break
  }

  console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
  console.log('Webhook body:', body)

  return new Response('', { status: 200 })
}

const handleSessionEvent = async (
  eventType:
    | 'session.created'
    | 'session.ended'
    | 'session.removed'
    | 'session.revoked',
  data: SessionJSON
) => {
  const {
    client_id,
    user_id,
    status,
    created_at,
    updated_at,
    expire_at,
    abandon_at,
    last_active_at,
  } = data

  const newSession: SessionInsert = {
    clientId: client_id,
    userId: user_id,
    status: status as 'active' | 'ended' | 'removed' | 'revoked',
    lastActiveAt: new Date(last_active_at),
    expireAt: new Date(expire_at),
    abandonAt: new Date(abandon_at),
    createdAt: new Date(created_at),
    updatedAt: new Date(updated_at),
    eventType,
  }
  await db.insert(sessionTable).values(newSession)

  console.log('Session created:', data)
}
