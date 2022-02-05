<template class="background">
    <div class="beverages">
      <v-row class="mobile-inversed-row">
        <v-col cols="12" md="4">
          <v-row class="content">
            <div>
              <v-col cols="12" class="mb-5">
                <hr class="mb-5" />
                <p class="intro">
                  Engage with your guests
                  <br />like never before and upsell...
                </p>
                <hr />
              </v-col>
              <v-col cols="12">
                <h2 class="title mb-5">
                  Food and
                  <br />Beverages
                </h2>
              </v-col>
              <v-col cols="12">
                <p class="outro">
                  In-room dining has never
                  <br />looked so good !
                </p>
                <a href class>Contact us !</a>
              </v-col>
            </div>
          </v-row>
        </v-col>

        <v-col cols="12" md="8" class="illustration" id="test">
          <v-row>
            <v-col class="mobile-illustration" cols="12">
              <div class="mobile-pad">
                <img src="../assets/BeveragesComponent/mobile.png" alt />
              </div>
            </v-col>
            <v-col class="pads" cols="10">
              <div class="animated-elements" ref="wrapper">
                <img class="kiwi1" src="../assets/BeveragesComponent/kiwi1.png" alt />
                <img class="kiwi2" src="../assets/BeveragesComponent/kiwi2.png" alt />
                <img class="strawberry" src="../assets/BeveragesComponent/fraise1.png" alt />
                <img class="all-fruts" src="../assets/BeveragesComponent/fruts.png" alt />
                <img class="halo" src="../assets/BeveragesComponent/flare.png" alt />
              </div>
              <div class="face-pad"></div>
              <div class="parallax-one">
                <div class="parallax-three"></div>
              </div>
              <div class="right-pad" id="right-pad">
                <img src="../assets/pad-right.png" alt="face-pad" />
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
</template>

<script>
import { gsap, TweenMax, ScrollTrigger } from "gsap/all";
import Parallax from "vue-parallaxy";

export default {
  data() {
    return {
      request: null
    };
  },
  components: {
    Parallax
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#right-pad", {
      scrollTrigger: {
        trigger: ".home-view",
        start: "bottom bottom",
        scrub: true
      },
      y: -250
    });

    let wrap = document.querySelector(".beverages");
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let mouse = {
      x: 0,
      y: 0
    };
    wrap.addEventListener("mousemove", event => {
      mouse.x = event.pageX;
      mouse.y = event.pageY;
      cancelAnimationFrame(this.request);
      this.request = requestAnimationFrame(update);
    });

    function update() {
      let dx = mouse.x - cx;
      let dy = mouse.y - cy;
      let tiltx = dy / cy;
      let tilty = -(dx / cx);

      function animate(element, arg, x, y, rotation) {
        TweenMax.to(element, arg, {
          x: x,
          y: y,
          rotate: rotation
        });
      }

      //animate(".all-fruts", 1, -tilty * 4, -tiltx * 3, 0.01);
      //animate(".kiwi1", 1, -tilty * 5, -tiltx * 3, -tilty * 20);
      //animate(".kiwi2", 1, -tiltx * 5, tilty * 3, tiltx * 5);
      //animate(".strawberry", 1, -tilty * 20, -tiltx * 3, -tiltx * 5);
      //animate(".parallax-three", 1, 0, -tiltx * 4, 0);
      //animate(".parallax-one", 1, 0, -tilty * 4, 0);
      //animate(".halo", 1, 0, 0, -tiltx * 10);
    }
    window.addEventListener("resize", e => {
      window.innerWidth / 2;
      window.innerHeight / 2;
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../app.scss";
.background {
  background-color: #fff;
  height: 100vh;
}

.beverages {
  background-color: $white;
  width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    hr {
      border-top: 1.5px solid #000;
      width: 50px;
    }
    .intro {
      font-size: 14px;
      font-family: $text, sans-serif;
      text-transform: uppercase;
      font-weight: bold;
    }
    .title {
      font-family: $titles, serif !important;
      font-size: 2.2rem !important;
      line-height: 50px;
    }
    .outro {
      font-family: $text, serif;
      font-size: 17px;
    }
  }
  .mobile-illustration {
    display: none;
  }
  .illustration {
    background: url("../assets/BeveragesComponent/bg-order.png") no-repeat top
      left;
    background-size: contain;
    background-position-y: 65px;
    margin: 20px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
  .pads {
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-left: 30px;
    max-height: 90vh;
    .animated-elements {
      .all-fruts {
        top: 0;
        z-index: 120;
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .kiwi1 {
        position: absolute;
        z-index: 121;
        width: 130px;
        top: 20px;
        left: 80px;
      }
      .kiwi2 {
        position: absolute;
        z-index: 121;
        width: 130px;
        bottom: -30px;
        left: 180px;
      }
      .strawberry {
        position: absolute;
        z-index: 201;
        right: 100px;
        bottom: 100px;
        width: 100px;
      }
      .halo {
        position: absolute;
        z-index: 101;
        width: 350px;
        top: 0;
        left: 100px;
      }
    }
    .face-pad {
      background: url("../assets/face-pad.png") no-repeat top center;
      background-size: contain;
      position: absolute;
      z-index: 100;
      width: 100%;
      height: 100%;
    }
    .parallax-one {
      background: url("../assets/BeveragesComponent/parallax-one.png") no-repeat
        top center;
      background-size: contain;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
      top: 0;
      width: 100%;
      height: 95%;
      .parallax-three {
        background: url("../assets/BeveragesComponent/parallax-three.png")
          no-repeat bottom center;
        //position: absolute;
        background-size: contain;
        width: 100%;
        height: 100%;
      }
    }
    .right-pad {
      position: relative;
      z-index: 200;
      display: flex;
      width: 85vh;
      justify-content: flex-end;
      img {
        height: 90vh;
        margin-top: 500px;
      }
    }
  }
}

@media (max-width: 720px) {
  .mobile-inversed-row {
    display: flex;
    flex-direction: column-reverse;
  }
  .illustration {
    background: none;
    .mobile-illustration {
      display: flex;
      .mobile-pad {
        width: 100%;
        display: flex;
        justify-content: center;
        img {
          width: 90%;
        }
      }
    }

    .pads {
      display: none;
    }
  }
}
</style>