<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
import type { UserId } from '@/entities/users'

const { receiverId } = defineProps<{
  senderId: UserId
  receiverId: UserId
}>()

const usersStore = useUsersStore()

const receiver = usersStore.get(receiverId)
</script>

<template>
  <div class="chat-header">
    <div class="chat-header__item">{{ receiver.name }}</div>
  </div>
</template>

<style scoped lang="sass">
.chat-header
    display: flex
    border-bottom: 3px solid var(--color-second)
    justify-content: space-between
    padding: 10px 15px

    &__item
        margin-right: 20px
        &:last-child
            margin-right: 0
</style>
