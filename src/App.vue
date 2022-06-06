<template>
  <header class="header">Vue Auth Template</header>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  box-sizing: border-box;

  display: flex;
  align-items: center;

  width: 100vw;
  height: 100%;
  height: 5rem;

  padding: $padding-default;

  background: black;

  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  color: white;
}

</style>
