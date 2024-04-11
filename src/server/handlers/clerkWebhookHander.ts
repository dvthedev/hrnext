import {
  DeletedObjectJSON,
  SessionJSON,
  UserJSON,
  WebhookEvent,
} from '@clerk/nextjs/server'
import {
  createUser,
  deleteUser,
  findUsersById,
  updateUser,
} from '../services/userService'

import { NonNullableField } from '@/@types/util'
import { createSesstion } from '../services/sessionService'
import { isEmpty } from 'lodash'

export const handleWebhookEvents = async (event: WebhookEvent) => {
  console.log('Event:', event)
  switch (event.type) {
    case 'user.created':
    case 'user.updated':
    case 'user.deleted':
      await handleUserEvents(event.type, event.data)
      break
    case 'session.created':
    case 'session.ended':
    case 'session.removed':
    case 'session.revoked':
      await handleSessionEvents(event.type, event.data)
      break
  }
}

const handleUserEvents = async (
  eventType: 'user.created' | 'user.updated' | 'user.deleted',
  data: UserJSON | DeletedObjectJSON
) => {
  console.log('handleUserEvents', eventType)
  const { id: userId } = data

  if (userId) {
    switch (eventType) {
      case 'user.created':
        await createUser(data as NonNullableField<UserJSON, 'id'>)
        break
      case 'user.updated':
        const usersFound = await findUsersById(userId)
        console.log('usersFound', usersFound)
        if (isEmpty(usersFound)) {
          await createUser(data as NonNullableField<UserJSON, 'id'>)
        } else {
          await updateUser(data as NonNullableField<UserJSON, 'id'>)
        }
        break
      case 'user.deleted':
        await deleteUser(userId)
        break
    }
  } else {
    console.error(`${eventType}: No external ID found`)
  }
}

const handleSessionEvents = async (
  eventType:
    | 'session.created'
    | 'session.ended'
    | 'session.removed'
    | 'session.revoked',
  data: SessionJSON
) => {
  console.log('Session created:', data.id)
  await createSesstion(data, eventType)
}
