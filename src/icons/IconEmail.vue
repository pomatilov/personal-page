<!-- eslint-disable max-len -->
<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM18 8.4C18 7.73725 17.4793 7.2 16.8375 7.2H6.7625C6.12046 7.2 5.6 7.73725 5.6 8.4C5.6 8.7775 5.77227 9.1325 6.065 9.36L11.335 13.44C11.6111 13.6525 11.9889 13.6525 12.265 13.44L17.535 9.36C17.828 9.1325 18 8.7775 18 8.4ZM12.73 14.08C12.1778 14.5075 11.4222 14.5075 10.87 14.08L5.6 10V15.2C5.6 16.0825 6.29387 16.8 7.15 16.8H16.45C17.3049 16.8 18 16.0825 18 15.2V10L12.73 14.08Z"
      fill="white"
      fill-rule="evenodd"
      clip-rule="evenodd"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 24,
    },
  },
};
</script>

<style scoped lang="scss">
svg path {
  transition: fill 0.3s ease-out;
}

svg:hover path {
  fill: $c-primary;
}
</style>
