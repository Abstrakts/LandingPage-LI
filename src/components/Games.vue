<template>
  <div class="games">
    <v-row class="mobile-inversed-row">
      <v-col cols="12" md="8" class="illustration">
        <v-row>
          <v-col class="mobile-illustration" cols="12">
            <div class="mobile-pad">
              <img src="../assets/GamesComponent/mobile.png" alt />
            </div>
          </v-col>
          <v-col class="pads" cols="10">
            <div class="animated-elements">
              <img  class="blue-candy" src="../assets/GamesComponent/bonbon1.svg" alt="">
              <img  class="piece-candy" src="../assets/GamesComponent/bonbon2.svg" alt="">
              <img  class="star-candy" src="../assets/GamesComponent/bonbon3.svg" alt="">
              <img  class="frut-candy" src="../assets/GamesComponent/bonbon4.svg" alt="">
              <img  class="first-dice" src="../assets/GamesComponent/de1.png" alt="">
              <img  class="second-dice" src="../assets/GamesComponent/de2.png" alt="">

              <img  class="ballon" src="../assets/GamesComponent/ballon.svg" alt="">
              <img class="cloud" src="../assets/GamesComponent/nuage.png" alt="">
            </div>
            <div class="face-pad"></div>
            <div class="parallax-one">
              <div class="parallax-two"></div>
              <div class="parallax-three"></div>
            </div>
            <div class="left-pad" id="left-pad">
              <img src="../assets/pad-left.png" alt="face-pad" />
            </div>
          </v-col>
        </v-row>
      </v-col>
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
    </v-row>
  </div>
</template>

<script>
import { gsap, TweenMax, ScrollTrigger } from "gsap/all";

export default {
  data() {
    return {
      request: null
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to("#left-pad", {
      scrollTrigger: {
        trigger: ".luxury",
        start: "bottom bottom",
        scrub: true
      },
      x: -150
    });

    let wrap = document.querySelector(".games");
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

      function animate(element, arg, x, y, rotation, width) {
        TweenMax.to(element, arg, {
          x: x,
          y: y,
          rotate: rotation,
          width: width
        });
      }

      animate(".parallax-three", 1, 0, -tiltx * 2, 0);
      animate(".parallax-two", 1, 0, tilty * 10, 0);
      animate(".parallax-one", 1, 0, -tilty * 4, 0);
      animate('.cloud', 1, -tiltx * 2, 0, 0)
      animate('.ballon', 1, tiltx * 2, tilty * 4, 0, null)
      animate('.blue-candy', 1, -tilty * 5, -tiltx * 3, -tilty * 20)
      animate('.frut-candy', 1, 0, 0, -tilty * 20)
      animate('.star-candy', 1, -tiltx * 2, -tilty * 2, tilty * 20)
      animate('.piece-candy', 1, 0, 0, tilty * 50)
      animate('.first-dice', 1, 0, 0, tilty * 20)
      animate('.second-dice', 1, 0, 0, tilty * 20)

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

.games {
  background-color: $white;
  min-height: 100vh;
  background-color: #eee;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
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
    margin: 20px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .pads {
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-left: 30px;
    .animated-elements {
      .cloud {
        position: absolute;
        z-index: 99;
        width: 200px;
        top: 150px;
        right:180px;
      }
      .ballon {
        position: absolute;
        z-index: 201;
        width: 140px;
        top: 150px;
        right: 100px;
      }
      .blue-candy {
        position: absolute;
        z-index: 201;
        width: 120px;
        top: -20px;
        right: 50px;
      }
      .piece-candy {
        position: absolute;
        z-index: 99;
        width: 50px;
        top: 80px;
        right: 80px;
      }
      .star-candy {
        position: absolute;
        z-index: 201;
        width: 70px;
        bottom: 90px;
        right: 65px;
      }
      .frut-candy {
        position: absolute;
        z-index: 201;
        width: 140px;
        bottom: 10px;
        left: 200px;
      }
      .first-dice {
        position: absolute;
        z-index: 201;
        width: 90px;
        bottom: -25px;
        right: 130px;
      }
      .second-dice {
          position: absolute;
          z-index: 200;
          width: 60px;
          bottom: 0;
          right: 190px;
      }
      
    }
    .face-pad {
      background: url("../assets/face-pad.png") no-repeat top center;
      background-size: contain;
      position: absolute;
      z-index: 100;
      width: 100%;
      height: 100%;
      margin-left: 70px;
    }
    .parallax-one {
      background: url("../assets/GamesComponent/clouds.png") no-repeat top
        center;
      background-size: contain;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
      width: 100%;
      height: 98%;
      margin-left: 70px;
      z-index: 1;
      .parallax-two {
        background: url("../assets/GamesComponent/bottom.png") no-repeat bottom
          center;
        //position: absolute;
        background-size: contain;
        width: 100%;
        height: 98%;
      }
      .parallax-three {
        position: absolute;
        background: url("../assets/GamesComponent/trees.png") no-repeat bottom
          center;
        background-size: contain;
        width: 100%;
        height: 98%;
      }
    }
    .left-pad {
      display: flex;
      width: 85vh;
      justify-content: flex-start;
      margin-left: 350px;
      img {
        height: 85vh;
      }
    }
  }
}

@media (max-width: 720px) {
  .mobile-inversed-row {
    display: flex;
    flex-direction: column;
  }
  .illustration {
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