import { defineStore } from 'pinia'
import { Message } from '@/entities/messages'
import type { UserId } from '@/entities/users'
import { useUsersStore } from './users'
import { reactive } from 'vue'

export const useMessagesStore = defineStore('messages', () => {
  const container = reactive(
    {} as {
      [key: UserId]: {
        [key: UserId]: Message[]
      }
    }
  )
  const users = useUsersStore()

  function get(firstMemberId: UserId, secondMemberId: UserId): Message[] {
    users.checkUsersExist([firstMemberId, secondMemberId])

    if (firstMemberId < secondMemberId) {
      ;[firstMemberId, secondMemberId] = [secondMemberId, firstMemberId]
    }

    initIfEmpty(firstMemberId, secondMemberId)
    return container[firstMemberId][secondMemberId]
  }

  function add(message: Message) {
    users.checkUsersExist([message.sender, message.receiver])

    const firstMemberId = message.receiver > message.sender ? message.receiver : message.sender
    const secondMemberId = message.receiver < message.sender ? message.receiver : message.sender

    initIfEmpty(firstMemberId, secondMemberId)
    container[firstMemberId][secondMemberId].push(message)
  }

  function initIfEmpty(firstMemberId: UserId, secondMemberId: UserId) {
    if (!container[firstMemberId]) {
      container[firstMemberId] = {}
    }
    if (!container[firstMemberId][secondMemberId]) {
      container[firstMemberId][secondMemberId] = []
    }
  }

  return { add, get }
})
