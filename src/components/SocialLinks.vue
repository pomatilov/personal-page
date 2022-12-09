<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <div class="social-links">
    <a :href="$t('link.github')" class="social-links__item" target="_blank" title="Github">
      Github
      <IconGithub />
    </a>

    <a :href="$t('link.telegram')" class="social-links__item" target="_blank" title="Telegram">
      Telegram
      <IconTelegram />
    </a>

    <a :href="$t('link.email')" class="social-links__item" target="_blank" title="Email">
      Email
      <IconEmail />
    </a>
  </div>
</template>

<script>
import IconEmail from '@/icons/IconEmail.vue';
import IconGithub from '@/icons/IconGithub.vue';
import IconTelegram from '@/icons/IconTelegram.vue';

export default {
  components: {
    IconEmail,
    IconGithub,
    IconTelegram,
  },
};
</script>

<style scoped lang="scss">
.social-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75em 0;

  order: 1;

  @include mobile-and-bigger {
    width: 140px;
  }

  .social-links__item {
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    font-size: 0;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
