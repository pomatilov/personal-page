<template>
  <header class="header">
    <div class="header__content">
      <SocialLinks />

      <LocaleSelector />
    </div>
  </header>
</template>

<script>
import LocaleSelector from '@/components/LocaleSelector.vue';
import SocialLinks from '@/components/SocialLinks.vue';

export default {
  components: {
    LocaleSelector,
    SocialLinks,
  },
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 3;

  display: flex;
  flex-direction: row;
  justify-content: center;

  max-width: $bp-desktop--small;

  margin: 0 auto;

  .header__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 100%;
    padding: 1.5em 1.5em 1em;

    background: $c-dark;
    background: linear-gradient($c-dark 30%, rgba(0, 0, 0, 0));

    @include laptop-and-bigger {
      padding: 3em 3em 1em;
    }
  }
}
</style>
