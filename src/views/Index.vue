<template>
  <div class="index">
    <div class="sections-menu">
      <span
        class="menu-point"
        :class="{active: activePanel == index}"
        @click="scrollToPanel(index)"
        v-for="(offset, index) in offsets"
        :key="index"
      ></span>
    </div>
    <div class="leia-floating-logo">
      <img class="leia-icon" src="../assets/SYMBOL-LEIA-INC.svg" alt />
      <img class="leia-logo-black" src="../assets/LOGO-LEIA-INC-BLACK.svg" alt />
    </div>
    

    <HomeView class="panel" id="homeView" />

    <Beverages class="panel" id="beverages" />

    <Events class="panel" id="events" />

    <Luxury class="panel" id="luxury" />

    <Games class="panel" id="games" />

    <Dashboard class="panel" id="dashboard" />

    <Awards class="panel" id="awards" />

    <Contact class="panel" id="contact" />
  </div>
</template>

<script>
import HomeView from "@/components/HomeView";
import Beverages from "@/components/Beverages";
import Events from "@/components/Events";
import Luxury from "@/components/Luxury";
import Games from "@/components/Games";
import Dashboard from "@/components/Dashboard";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

import { gsap, TweenMax, ScrollTrigger } from "gsap/all";
import ScrollIntoView from "scroll-into-view";

export default {
  name: "Index",
  data() {
    return {
      inMove: false,
      activePanel: 0,
      offsets: [],
      touchStartY: 0
    };
  },
  components: {
    HomeView,
    Beverages,
    Events,
    Luxury,
    Games,
    Dashboard,
    Awards,
    Contact
  },

  methods: {
    calculatePanelsOffsets() {
      let panels = document.querySelectorAll(".panel");
      let length = panels.length;

      for (let i = 0; i < length; i++) {
        let panelsOffset = panels[i].offsetTop;
        this.offsets.push(panelsOffset);
      }
    },
    handleMouseWheel(e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM(e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }

      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activePanel--;

      if (this.activePanel < 0) this.activePanel = this.offsets.length - 1;

      this.scrollToPanel(this.activePanel, true);
    },
    moveUp() {
      this.inMove = true;
      this.activePanel++;

      if (this.activePanel > this.offsets.length - 1) this.activePanel = 0;

      this.scrollToPanel(this.activePanel, true);
    },
    scrollToPanel(id, force = false) {
      if (this.inMove && !force) return false;

      this.activePanel = id;
      this.inMove = true;
      
      document.querySelectorAll('.panel')[id].scrollIntoView({
        behavior: 'smooth'
      })

      setTimeout(() => {
        this.inMove = false;
      }, 0);
    },
    touchStart(e) {
      e.preventDefault();

      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      console.log(panel);
      console.log(i);
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true
      });
    });

    let icon = document.querySelector(".leia-icon");
    let leiaIcon = document.querySelector(".leia-logo-black");

    icon.addEventListener("mouseover", () => {
      gsap.to(icon, {
        rotate: -90
      });
      gsap.to(leiaIcon, {
        opacity: 1,
        x: 20
      });
    });
    icon.addEventListener("mouseout", () => {
      gsap.to(icon, {
        rotate: 0
      });
      gsap.to(leiaIcon, {
        opacity: 0,
        x: -20
      });
    });
    if (window.innerWidth > 920) {
      this.calculatePanelsOffsets();

      window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
      window.addEventListener("mousewheel", this.handleMouseWheel, {
        passive: false
      }); // Other browsers
      window.addEventListener("touchstart", this.touchStart, {
        passive: false
      }); // mobile devices

      window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices
    }
  },
  destroyed() {
    if (window.innerWidth > 920) {
      window.removeEventListener("mousewheel", this.handleMouseWheel, {
        passive: false
      }); // Other browsers
      window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox

      window.removeEventListener("touchstart", this.touchStart); // mobile devices
      window.removeEventListener("touchmove", this.touchMove); // mobile devices
    }
  }
};
</script>

<style lang="scss">
#homeView {
  position: relative;
}
.leia-floating-logo {
  z-index: 1000;
  position: fixed;
  bottom: 10px;
  left: 10px;
  .leia-icon {
    width: 30px;
    height: 30px;
  }
  .leia-logo-black {
    width: 80px;
    margin-left: -10px;
    opacity: 0;
  }
}

.row {
  margin: 0;
}

.sections-menu {
  position: fixed;
  z-index: 102;
  left: 1rem;
  top: 65%;
  transform: translateY(-50%);
  .menu-point {
    width: 10px;
    height: 10px;
    border-radius: 60%;
    background-color: #000;
    display: block;
    left: 0;
    margin: 1rem 0;
    opacity: 0.6;
    transition: 0.4s ease all;
    cursor: pointer;
  }
  .menu-point.active {
    border: 1px solid transparent;
    position: relative;
  }
  .active:before {
    content: "";
    border: solid 2px #000;
    position: absolute;
    border-radius: 60%;
    top: -6px;
    left: -6px;
    width: 20px;
    height: 20px;
    opacity: 0.6;
  }
}

.sidebar {
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s;
  }

  .sidebar-backdrop {
    z-index: 900;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  .sidebar-panel {
    z-index: 1000;
    overflow-y: auto;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    padding: 3rem 20px 2rem 20px;
    width: 350px;
  }
}

@media (max-width: 920px) {
  .leia-floating-logo {
    display: none;
  }
}
</style>