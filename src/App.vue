<script setup lang="ts">
import ChatComponent from '@/components/ChatComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
import { useUsersStore } from '@/stores/users'
import { User } from '@/entities/users'
import { computed, onErrorCaptured, ref } from 'vue'

const firstUser = new User('First user')
const secondUser = new User('Second user')

const usersStore = useUsersStore()

const firstUserId = usersStore.add(firstUser)
const secondUserId = usersStore.add(secondUser)

const errorText = ref('')

const errorOpacityValue = computed(() => {
  return errorText.value ? 1 : 0
})

onErrorCaptured((err: Error) => {
  errorText.value = err.message
  setTimeout(() => {
    errorText.value = ''
  }, 3000)
  return false
})

function closeNotification() {
  errorText.value = ''
}
</script>

<template>
  <NotificationComponent @close="closeNotification" :style="{ opacity: errorOpacityValue }">{{
    errorText
  }}</NotificationComponent>
  <main class="main">
    <ChatComponent class="main__item chat" :sender-id="secondUserId" :receiver-id="firstUserId" />
    <ChatComponent class="main__item chat" :sender-id="firstUserId" :receiver-id="secondUserId" />
  </main>
</template>

<style scoped lang="sass">
.main
    display: flex
    justify-content: center
    flex-wrap: wrap
    height: 100vh

    &__item
      flex: 1
      margin: 20px 15px
      max-width: calc(50%  -  30px)
      min-width: 300px
      max-height: calc(100vh  -  40px)



@media (max-width: 660px)
  .main
    height: 200vh

    &__item
      max-width: 100%
</style>
