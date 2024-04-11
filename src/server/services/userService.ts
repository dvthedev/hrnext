import { UserInsert, userTable } from '../db/schema'

import { NonNullableField } from '@/@types/util'
import { UserJSON } from '@clerk/nextjs/server'
import db from '../db/drizzle'
import { eq } from 'drizzle-orm'

export const findUsersById = async (userId: string) => {
  console.log('findUsersById', userId)
  return await db.select().from(userTable).where(eq(userTable.userId, userId))
}

export const createUser = async ({
  external_id: externalId,
  username,
  id: userId,
  email_addresses,
  first_name: firstName,
  last_name: lastName,
  gender,
  image_url: imageUrl,
  primary_email_address_id: primaryEmailAddressId,
}: NonNullableField<UserJSON, 'id'>) => {
  console.log('createUser', userId)
  const primaryEmail = email_addresses.find(
    (email) => email.id === primaryEmailAddressId
  )?.email_address

  const newUser: UserInsert = {
    externalId,
    userId,
    username,
    email: primaryEmail,
    firstName,
    lastName,
    gender,
    status: 'active',
    imageUrl,
  }
  console.log(newUser)

  await db.insert(userTable).values(newUser)
}

export const updateUser = async ({
  username,
  id: userId,
  email_addresses,
  first_name: firstName,
  last_name: lastName,
  gender,
  image_url: imageUrl,
  primary_email_address_id: primaryEmailAddressId,
}: NonNullableField<UserJSON, 'id'>) => {
  console.log('updateUser', userId)
  const primaryEmail = email_addresses.find(
    (email) => email.id === primaryEmailAddressId
  )?.email_address

  const updateUser: Partial<UserInsert> = {
    username,
    email: primaryEmail,
    firstName,
    lastName,
    gender,
    imageUrl,
  }
  await db.update(userTable).set(updateUser).where(eq(userTable.userId, userId))
}

export const deleteUser = async (userId: string) => {
  console.log('deleteUser', userId)
  await db
    .update(userTable)
    .set({ status: 'removed' })
    .where(eq(userTable.userId, userId))
  // await db.delete(userTable).where(eq(userTable.externalId, externalId))
}
