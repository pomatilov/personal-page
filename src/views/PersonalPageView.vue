<template>
  <HeaderLayout />

  <GreetingsBlock
    v-show="showGreetings"
    @animation-end="onGreetingsAnimationEnd"
    @go="event => onGoClick(event)"
  />

  <StackBlock v-show="showStack" ref="stack" />

  <SkillsBlock v-show="showSkills" ref="skills" />

  <FooterLayout v-show="showStack || showSkills" />

  <FloatingScroll v-show="floatingScrollHidden === false" />
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue';
import FloatingScroll from '@/components/FloatingScroll.vue';
import FooterLayout from '@/components/FooterLayout.vue';

import GreetingsBlock from '@/blocks/GreetingsBlock.vue';
import SkillsBlock from '@/blocks/SkillsBlock.vue';
import StackBlock from '@/blocks/StackBlock.vue';

import { PageTitleMixin } from '@/mixins/pageTitleMixin';
import { scrollToElement } from '@/utils/scrollToElement';

const VIEW_HOME = 'home';
const VIEW_STACK = 'stack';
const VIEW_SKILLS = 'skills';

export default {
  components: {
    HeaderLayout,
    FloatingScroll,
    FooterLayout,

    GreetingsBlock,
    SkillsBlock,
    StackBlock,
  },

  mixins: [PageTitleMixin],

  data: () => ({
    floatingScrollHidden: true,
    visibleViews: [VIEW_HOME],
  }),

  computed: {
    showGreetings() {
      return this.visibleViews.includes(VIEW_HOME);
    },

    showStack() {
      return this.visibleViews.includes(VIEW_STACK);
    },

    showSkills() {
      return this.visibleViews.includes(VIEW_SKILLS);
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    onGoClick({ to }) {
      let element = null;

      if (to) {
        const ref = this.$refs[to] ?? {};

        element = ref.$el ?? null;

        this.addVisibleView(to);
      }

      if (element === null) {
        return;
      }

      setTimeout(() => {
        scrollToElement(element, { behavior: 'smooth' });
      }, 100);
    },

    onGreetingsAnimationEnd() {
      this.floatingScrollHidden = false;

      this.addVisibleView(VIEW_STACK);
      this.addVisibleView(VIEW_SKILLS);
    },

    addVisibleView(viewName) {
      if (this.visibleViews.includes(viewName) === false) {
        this.visibleViews.push(viewName);
      }
    },

    handleScroll() {
      const bodyHeight = document.body.clientHeight;
      const positionY = window.scrollY + window.innerHeight;

      this.floatingScrollHidden = bodyHeight === positionY;
    },
  },
};
</script>
