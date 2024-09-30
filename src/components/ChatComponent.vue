<script setup lang="ts">
import ChatHeader from './Chat/ChatHeader.vue'
import ChatUI from './Chat/ChatUI.vue'
import ChatMessages from './Chat/ChatMessages.vue'
import type { UserId } from '@/entities/users'

const { senderId, receiverId } = defineProps<{
  senderId: UserId
  receiverId: UserId
}>()
</script>

<template>
  <div class="chat">
    <ChatHeader :senderId :receiverId class="chat__item" />
    <ChatMessages :senderId :receiverId class="chat__item" />
    <ChatUI :senderId :receiverId class="chat__item" />
  </div>
</template>

<style scoped lang="sass">
.chat
  display: flex
  flex-direction: column
  border: 3px solid var(--color-second)
  border-radius: 1.25rem
</style>
