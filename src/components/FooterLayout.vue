<template>
  <footer class="footer" :class="{fixed}">
    <div class="footer__content">
      <div class="copyright">
        {{ $t('copyright') }}
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    fixed: Boolean,
  },
};
</script>

<style scoped lang="scss">
.footer {
  max-width: $bp-desktop--small;

  padding: 1.5em;
  margin: 0 auto;

  @include laptop-and-bigger {
    padding: 3em;
  }

  &.fixed {
    position: absolute;
    bottom: 0;
  }

  .footer__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    .copyright {
      font-family: $ff-anonymous;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.1;
      color: $c-grey;
    }
  }
}
</style>
