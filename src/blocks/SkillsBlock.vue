<template>
  <section id="skills">
    <TypedText
      class="heading"
      :text="$t('views.skills')"
      blink-hex-color="#70ff00"
      autostart
      shadowed
      @end="onTypeEnd"
    />

    <div class="block" :class="{ visible: blocksVisible }">
      <div class="block__list">
        <p class="block__list_option">{{ $t('skills.systems') }}</p>
        <p class="block__list_option">{{ $t('skills.optimization') }}</p>
        <p class="block__list_option">{{ $t('skills.libraries') }}</p>
        <p class="block__list_option">{{ $t('skills.docker') }}</p>
        <p class="block__list_option">{{ $t('skills.prototype') }}</p>
        <p class="block__list_option">{{ $t('skills.review') }}</p>
        <p class="block__list_option">{{ $t('skills.releases') }}</p>
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

    .block__list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      min-width: 100%;
      // padding: .75em 0;

      .block__list_option {
        position: relative;
        display: block;
        width: 100%;
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
