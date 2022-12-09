<template>
  <div class="typed">
    <span class="text">{{ animatedText }}</span>

    <span
      class="text cursor"
      :class="{
        shadowed,
        visible: noCursor === false,
        blink: timer === null,
      }"
      >&nbsp;</span
    >
  </div>
</template>

<script>
const ACTION_TYPE = 'type';
const ACTION_REMOVE = 'remove';

export default {
  props: {
    text: {
      type: String,
      default: '',
    },

    autostart: Boolean,
    shadowed: Boolean,

    noAnimatedText: {
      type: Boolean,
      default: false,
    },

    noCursor: Boolean,
    blinkHexColor: String,

    typeSpeedMilliseconds: {
      type: Number,
      default: 40,
    },
  },

  data: () => ({
    timer: null,
    animatedText: '',
    action: ACTION_TYPE,
  }),

  watch: {
    text: {
      deep: true,
      handler(newVal) {
        if (newVal && this.autostart) {
          this.action = ACTION_TYPE;

          if (this.animatedText) {
            this.action = ACTION_REMOVE;
          }

          this.start();
        }
      },
    },

    autostart: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.action = ACTION_TYPE;
          this.animatedText = '';

          this.start();
        }
      },
    },
  },

  methods: {
    start() {
      if (this.timer) {
        return;
      }

      if (this.noAnimatedText) {
        this.animatedText = this.text;
        this.$emit('end', false);

        return;
      }

      this.timer = setInterval(this.typeText, this.typeSpeedMilliseconds);
    },

    stop() {
      if (!this.timer) {
        return;
      }

      clearInterval(this.timer);

      this.timer = null;

      this.$emit('end', true);
    },

    typeText() {
      if (this.action === ACTION_TYPE && this.text) {
        if (this.text.length > this.animatedText.length) {
          this.animatedText = this.text.substring(0, this.animatedText.length + 1);
          return;
        }
      }

      if (this.action === ACTION_REMOVE) {
        this.action = ACTION_TYPE;
        this.animatedText = '';
        return;
      }

      this.stop();
    },
  },
};
</script>

<style scoped lang="scss">
.typed {
  .text {
    white-space: pre-wrap;

    &.cursor {
      &.visible {
        background-color: v-bind(blinkHexColor);

        &.shadowed {
          box-shadow: $v-shadow v-bind(blinkHexColor);
        }

        &.blink {
          animation: blink-animation 1s steps(5, start) infinite;
        }
      }
    }
  }
}
</style>
