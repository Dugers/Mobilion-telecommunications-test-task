<script setup lang="ts">
import { useMessagesStore } from '@/stores/messages'
import type { UserId } from '@/entities/users'

const { senderId, receiverId } = defineProps<{
  senderId: UserId
  receiverId: UserId
}>()

const messagesStore = useMessagesStore()
</script>

<template>
  <div class="chat-messages">
    <div class="wrapper">
      <div
        class="message"
        :class="'message-' + (senderId == message.sender ? 'sender' : 'receiver')"
        v-for="(message, index) of messagesStore.get(senderId, receiverId)"
        :key="index"
      >
        {{ message.text }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.chat-messages
  padding: 10px 15px
  height: 100%
  overflow: auto
  max-width: 100%

.message
  overflow-wrap: break-word
  padding: 10px 15px
  width: fit-content
  max-width: 60%
  background-color: var(--color-second)
  border-radius: 0.65rem
  margin-top: 10px
  font-size: 0.75rem
  color: var(--color-text-medium)

  &-sender
    margin-left: auto
</style>
