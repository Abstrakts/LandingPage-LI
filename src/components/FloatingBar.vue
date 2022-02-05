<template>
  <div class="floating-bar">
    <div class="sidebar" v-if="sideBar">
      <div class="sidebar-backdrop"></div>
      <transition name="slide">
        <div class="sidebar-panel"></div>
      </transition>
    </div>
    <v-row>
      <v-col cols="12" class="text-center top-bar">
        <img
          @click="showMenu"
          class="burger-icon"
          src="../assets/burger-button.svg"
          alt="burger icon"
        />
        <img class="lumepad-logo" src="../assets/lumepad-logo.svg" alt="lumepad logo" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { gsap, TweenMax, ScrollTrigger } from "gsap/all";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      sideBar: false
    };
  },
  computed: {
    ...mapGetters(["getSidebar"])
  },
  methods: {
    ...mapActions(["setSidebar"]),
    showMenu() {
      this.sideBar = this.setSidebar(true)
    }
  },
  mounted() {
    this.sideBar = this.getSidebar
    gsap.registerPlugin(ScrollTrigger);
    TweenMax.to(".lumepad-logo", 2, {
      scrollTrigger: {
        trigger: ".introduction",
        start: "top top",
        scrub: true
      },
      right: 50
    });
    gsap.to(".floating-bar", {
      scrollTrigger: {
        trigger: ".lumepad-logo",
        start: "top top",
        scrub: true
      },
      top: 0,
      duration: 0.5,
      backgroundColor: "transparent",
      width: "100%",
      position: "fixed",
      zIndex: 50
    });
  }
};
</script>

<style lang="scss" scoped>
@keyframes Rotate {
  100% {
    transform: rotate(50deg);
  }
}

.floating-bar {
  background: transparent;
  padding: 10px 0 0 20px;
  height: 80px;
  width: 100%;
  .top-bar {
    display: flex;
    justify-content: center;
    .lumepad-logo {
      position: absolute;
      margin-top: 10px;
      height: 30px;
      right: 45vw;
    }
  }
  .burger-icon {
    height: 50px;
    position: absolute;
    left: 50px;
  }
}

.row {
  margin: 0;
}

@media (max-width: 920px) {
  .floating-bar {
    display: none;
  }
}
</style>