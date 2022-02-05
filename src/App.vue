<template>
  <v-app class="app">
    <v-main>
      <Index />
    </v-main>
  </v-app>
</template>

<script>
import Index from "./views/Index";

export default {
  name: "App",

  components: {
    Index
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
html {
  //overflow: hidden;
}
@media (min-width: 920px) {

}
</style>