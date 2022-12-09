<template>
  <section id="home">
    <TypedText
      class="tagline"
      :text="greetings"
      :no-cursor="showHint"
      blink-hex-color="#70ff00"
      autostart
      shadowed
      @end="onGreetingsTypeEnd"
    />

    <TypedText
      v-if="showHint && hints"
      class="hint"
      :text="hints"
      blink-hex-color="#ffffff"
      autostart
      @end="onHintTypeEnd"
    />

    <div class="controls">
      <PrimaryButton
        class="button"
        :class="{ visible: showControls }"
        @click="
          () => {
            $emit('go', { to: 'stack' });
          }
        "
      >
        {{ $t('views.stack') }}
      </PrimaryButton>

      <PrimaryButton
        class="button"
        :class="{ visible: showControls }"
        @click="
          () => {
            $emit('go', { to: 'skills' });
          }
        "
      >
        {{ $t('views.skills') }}
      </PrimaryButton>
    </div>
  </section>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton.vue';
import TypedText from '@/components/TypedText.vue';

export default {
  components: {
    PrimaryButton,
    TypedText,
  },

  data: () => ({
    showHint: false,
    showControls: false,
  }),

  computed: {
    greetings() {
      return this.$t('home.greetings');
    },

    hints() {
      return this.$t('home.personal');
    },
  },

  methods: {
    onGreetingsTypeEnd() {
      this.showHint = true;
    },

    onHintTypeEnd() {
      this.showControls = true;

      this.$emit('animation-end');
    },
  },
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 0 1.5em;
  margin: 0 auto;

  max-width: $bp-desktop--small;
  min-height: inherit;

  @include laptop-and-bigger {
    padding: 0 3em;
  }

  .tagline {
    position: relative;
    display: block;

    font-family: $ff-anonymous;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.1;
    text-align: left;

    color: $c-primary;
    text-shadow: $v-shadow $c-primary;

    @include mobile-and-bigger {
      font-size: 32px;
    }

    @include laptop-and-bigger {
      font-size: 48px;
    }
  }

  .hint {
    position: relative;
    display: block;

    font-family: $ff-anonymous;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.5;
    text-align: left;
    margin-top: 1.5em;

    color: $c-light;
  }

  .controls {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2.5em;

    @include laptop-and-bigger {
      flex-direction: row;
      width: auto;
      margin-top: 3em;
    }

    .button {
      margin-bottom: 1.25em;
      opacity: 0;

      font-family: $ff-anonymous;
      font-weight: 600;

      @include laptop-and-bigger {
        margin-right: 1.25em;
        margin-bottom: 0;
      }

      &.visible {
        opacity: 1;
      }
    }
  }
}
</style>
