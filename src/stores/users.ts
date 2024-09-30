import { defineStore } from 'pinia'
import { User, UsersContainer } from '@/entities/users'
import type { UserId } from '@/entities/users'

export const useUsersStore = defineStore('users', () => {
  const container = new UsersContainer()

  function get(id: UserId) {
    return container.get(id)
  }

  function add(user: User) {
    return container.add(user)
  }

  function checkUserExist(id: UserId) {
    if (!get(id)) {
      throw new Error(`User with id ${id} doesn't exists`)
    }
  }
  function checkUsersExist(ids: UserId[]) {
    for (const id of ids) {
      checkUserExist(id)
    }
  }

  return { get, add, checkUserExist, checkUsersExist }
})
