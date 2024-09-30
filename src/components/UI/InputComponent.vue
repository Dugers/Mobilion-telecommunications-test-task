<script setup lang="ts">
const text = defineModel<string>('text')
defineEmits(['keydown'])
</script>

<template>
  <textarea v-model="text" @keydown="$emit('keydown', $event)"></textarea>
</template>

<style scoped lang="sass">
textarea
    background-color: var(--color-second)
    border-radius: 1rem
    padding: 10px 15px
    font-size: 0.75rem
    line-height: 1rem
</style>
