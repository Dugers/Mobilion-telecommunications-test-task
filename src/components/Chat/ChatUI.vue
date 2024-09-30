<script setup lang="ts">
import ButtonComponent from '@/components/UI/ButtonComponent.vue'
import InputComponent from '@/components/UI/InputComponent.vue'
import { useMessagesStore } from '@/stores/messages'
import { Message } from '@/entities/messages'
import type { UserId } from '@/entities/users'
import { ref } from 'vue'

const { senderId, receiverId } = defineProps<{
  senderId: UserId
  receiverId: UserId
}>()

const messagesStore = useMessagesStore()
let inputText = ref('')

function addMessage() {
  const message = new Message(senderId, receiverId, inputText.value)
  messagesStore.add(message)
  inputText.value = ''
}

function handleInputKeyDown(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    return addMessage()
  }
}
</script>

<template>
  <div class="chat-ui">
    <InputComponent
      v-model:text="inputText"
      @keydown="handleInputKeyDown"
      class="chat-ui__item chat-ui-input"
    />
    <ButtonComponent class="chat-ui__item chat-ui-button" @click="addMessage()"
      >Send</ButtonComponent
    >
  </div>
</template>

<style scoped lang="sass">
.chat-ui
  margin-top: auto
  display: flex
  justify-content: space-between
  padding: 15px
  border-top: 3px solid var(--color-second)

  &-input
    width: 100%
    margin-right: 20px
</style>
