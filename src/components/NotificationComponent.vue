<script setup lang="ts">
defineEmits(['close'])
</script>

<template>
  <div ref="notificationBlock" class="notification">
    <slot>Some error</slot>
    <img @click="$emit('close')" class="cross-icon" src="@/assets/cross_icon.png" alt="cross" />
  </div>
</template>

<style scoped lang="sass">
.notification
    position: absolute
    margin-left: auto
    margin-right: auto
    top: 10px
    opacity: 0
    left: 0
    right: 0
    text-align: center
    width: fit-content
    background-color: #A52A2A
    max-width: 40%
    padding: 10px 25px
    overflow-wrap: break-word
    transition: opacity 0.5s ease
    display: flex
    align-items: center

.cross-icon
    width: 40px
    height: 40px
    &:hover
        cursor: pointer
</style>
