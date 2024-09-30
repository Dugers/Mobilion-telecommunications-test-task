import { Counter } from '@/entities/identificators'
import { User } from '@/entities/users'
import type { UserId } from '@/entities/users'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUsersStore = defineStore('users', () => {
  const counter = new Counter()

  const container: {
    [key: UserId]: User
  } = reactive({})

  function get(id: UserId): User {
    checkUserExist(id)
    return container[id]
  }

  function add(user: User) {
    const id: UserId = counter.count
    container[id] = user
    return id
  }

  function checkUserExist(id: UserId) {
    if (!(id in container)) {
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
