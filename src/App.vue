<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background-color: $c-dark;
}

a,
a:visited {
  color: $c-light;
  font-family: $ff-anonymous;
}

#app {
  width: inherit;
  min-height: inherit;
  position: relative;
  // padding: 3em;
}
</style>
