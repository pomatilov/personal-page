<template>
  <section id="stack">
    <TypedText
      class="heading"
      :text="$t('views.stack')"
      blink-hex-color="#70ff00"
      autostart
      shadowed
      @end="onTypeEnd"
    />

    <div class="block" :class="{ visible: blocksVisible }">
      <h2 class="block__heading">{{ $t('stack.backend') }}</h2>

      <div class="block__list">
        <p class="block__list_option">PHP 5.5+</p>
        <p class="block__list_option">Symfony 5.4+</p>
        <p class="block__list_option">API Platform</p>
        <p class="block__list_option">Swagger</p>
        <p class="block__list_option">REST</p>
        <p class="block__list_option">PHPUnit</p>
        <p class="block__list_option">Codeigniter</p>
      </div>
    </div>

    <div class="block" :class="{ visible: blocksVisible }">
      <h2 class="block__heading">{{ $t('stack.frontend') }}</h2>

      <div class="block__list">
        <p class="block__list_option">Vue</p>
        <p class="block__list_option">Vuex</p>
        <p class="block__list_option">JS</p>
        <p class="block__list_option">HTML & CSS</p>
        <p class="block__list_option">JSX</p>
        <p class="block__list_option">Sass</p>
        <p class="block__list_option">Storybook</p>
        <p class="block__list_option">Jest</p>
        <p class="block__list_option">Bootstrap</p>
        <p class="block__list_option">jQuery</p>
      </div>
    </div>

    <div class="block" :class="{ visible: blocksVisible }">
      <h2 class="block__heading">{{ $t('stack.database') }}</h2>

      <div class="block__list">
        <p class="block__list_option">MySQL</p>
        <p class="block__list_option">Oracle</p>
        <p class="block__list_option">PL/SQL</p>
        <p class="block__list_option">Redis</p>
      </div>
    </div>

    <div class="block" :class="{ visible: blocksVisible }">
      <h2 class="block__heading">{{ $t('stack.other') }}</h2>

      <div class="block__list">
        <p class="block__list_option">Git</p>
        <p class="block__list_option">Gitlab</p>
        <p class="block__list_option">Docker</p>
        <p class="block__list_option">Webpack</p>
      </div>
    </div>
  </section>
</template>

<script>
import TypedText from '@/components/TypedText.vue';

export default {
  components: {
    TypedText,
  },

  data: () => ({
    blocksVisible: false,
  }),

  methods: {
    onTypeEnd() {
      this.blocksVisible = true;
    },
  },
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  max-width: $bp-desktop--small;
  min-height: inherit;

  margin: 0 auto;
  padding: 6em 1.5em;

  @include laptop-and-bigger {
    padding: 9em 3em;
  }

  .heading {
    font-family: $ff-anonymous;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.1;
    text-align: left;
    margin-bottom: 0.75em;

    color: $c-primary;
    text-shadow: $v-shadow $c-primary;

    @include mobile-and-bigger {
      font-size: 32px;
    }

    @include laptop-and-bigger {
      font-size: 48px;
    }
  }

  .block {
    width: 100%;
    margin-bottom: 1.5em;

    font-family: $ff-anonymous;
    color: $c-light;

    opacity: 0;
    transition: 0.3s ease;

    &.visible {
      opacity: 1;
    }

    .block__heading {
      font-size: 28px;
      line-height: 1.5;
      font-weight: 600;
      text-align: left;
      margin-bottom: 1em;
    }

    .block__list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      min-width: 100%;
      // padding: .75em 0;

      .block__list_option {
        position: relative;
        display: block;
        padding: 0.25em 1.25em;
        margin: 0 0.75em 0.75em 0;

        border: 1px solid $c-grey;
        background-color: $c-dark;

        font-size: 20px;
        line-height: 1.1;

        &:hover {
          border-color: $c-primary;
          color: $c-primary;

          box-shadow: $v-shadow $c-primary;
          text-shadow: $v-shadow $c-primary;
        }
      }
    }
  }
}
</style>
