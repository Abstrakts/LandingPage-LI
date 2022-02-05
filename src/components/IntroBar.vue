<template>
  <v-container class="introduction-bar">
    <v-row class="test">
      <v-col cols="12" class="text text-center">
        <p>
          Elevate your guest Experience with Strunning
          Holographic Interactions and Voice Commands
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  mounted() {}
};
</script>

<style lang='scss' scoped>
@import "@/app.scss";
.introduction-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .text {
    font-size: 30px;
    font-family: $titles;
  }
}

@media (max-width: 920px) {
  .introduction-bar {
    width: 90%;
    .text {
      font-weight: bold;
      font-size: 26px;
    }
  }
}
</style>