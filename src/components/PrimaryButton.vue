<template>
  <button
    type="button"
    class="button primary"
    @click="
      event => {
        $emit('click', event);
      }
    "
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  display: block;
  outline: none;
  padding: 0.75em 1.25em;
  transition: 0.3s ease;

  border: 1px solid $c-grey;
  background-color: transparent;
  color: $c-grey;

  font-size: 16px;
  line-height: 1.1;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
    box-shadow: $v-shadow $c-grey;
  }

  &.primary {
    border-color: $c-primary;
    color: $c-primary;

    &:hover {
      box-shadow: $v-shadow $c-primary;
      text-shadow: $v-shadow $c-primary;
    }
  }
}
</style>
