<template>
  <button><slot>Click me!</slot></button>
</template>

<style lang="sass" scoped>
button
  background-color: var(--color-second)
  padding: 10px 25px
  border-radius: 1rem
  font-family: sans-serif
  transition: 1s background-color ease
  &:hover
    cursor: pointer
    background-color: var(--color-button-hover)
    transition: 0.35s background-color ease
</style>
