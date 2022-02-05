<template class="background">
  <div class="luxury">
    <v-row class="mobile-resersed-row">
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
                Luxury
                <br />Shopping
              </h2>
            </v-col>
            <v-col cols="12">
              <p class="outro">
                A unique medium to show Luxury in
                <br />all its beauty and light!
              </p>
              <a href class>Contact us !</a>
            </v-col>
          </div>
        </v-row>
      </v-col>
      <v-col cols="12" md="8" class="illustration">
        <v-row>
          <v-col class="mobile-illustration" cols="12">
            <div class="mobile-pad">
              <img src="../assets/LuxuryComponent/mobile.png" alt />
            </div>
          </v-col>
          <v-col class="pads" cols="12">
            <div class="animated-elements">
              <div class="flares">
                <div class="flare-one"></div>
                <div class="flare-two"></div>
                <div class="flare-three"></div>
                <div class="flare-four"></div>
              </div>
              <img class="woman" src="../assets/LuxuryComponent/woman.png" alt />
            </div>
            <img class="pad-top" id="pad-top" src="../assets/pad-top.png" alt />
            <div class="face-pad"></div>
            <div class="parallax-one"></div>
          </v-col>
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
    
    gsap.to("#pad-top", {
      scrollTrigger: {
        trigger: ".events",
        start: "bottom bottom",
        scrub: true
      },
      x: -150
    });

    let wrap = document.querySelector(".luxury");
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

      animate(".woman", 1, -tilty * 4, -tiltx * 2, 0.01, null);
      animate(".parallax-one", 1, 0, -tilty * 4, 0);
      animate(".flare-one", 1, tiltx * 5, tilty * 20, 130);
      animate(".flare-two", 1, -tiltx * 5, -tilty * 20, 130);
      animate(".flare-three", 1, tiltx * -2, -tilty * 6, 130);
      animate(".flare-four", 1, 0, -tilty * 6, 130);



    }
    window.addEventListener("resize", e => {
      window.innerWidth / 2;
      window.innerHeight / 2;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../app.scss";
.mobile-illustration {
  display: none;
}
.background {
  background-color: '#fff';
}
.luxury {
  min-height: 100vh;
  width: 100%;
  max-height: 100vh;
  background: url("../assets/LuxuryComponent/bg-luxury.png") no-repeat top
    center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
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
  .illustration {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .pads {
      position: relative;
      display: flex;
      height: 80vh;
      margin-top: 50px;
      align-items: center;
      justify-content: center;
      .pad-top {
        position: absolute;
        left: 150px;
        width: 58%;
        transform: rotate(-90deg);
      }
      .face-pad {
        background: url("../assets/pad-h.png") no-repeat top right;
        background-size: contain;
        position: absolute;
        z-index: 100;
        width: 100%;
        height: 100%;
      }
      .woman {
        z-index: 99;
        right: -45px;
        top: 20px;
        height: 98%;
        position: absolute;
        object-fit: contain;
      }
      .flares {
        position: relative;
        width: 100%;
        height: 50vh;
        .flare-one {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.2);
          height: 100px;
          width: 100px;
          z-index: 98;
          border-radius: 60%
        }
        .flare-two {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.3);
          height: 200px;
          width: 200px;
          z-index: 97;
          border-radius: 60%;
          top: 50px;
          left: 25px;
        }
        .flare-three {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.3);
          height: 80px;
          width: 80px;
          z-index: 97;
          border-radius: 60%;
          top: -60px;
          left: -120px;
        }
        .flare-four {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.2);
          height: 120px;
          width: 120px;
          z-index: 97;
          border-radius: 60%;
          bottom: -30px;
          left: -45px;
        }
      }
      .parallax-one {
        background: url("../assets/LuxuryComponent/parallax-one.png") no-repeat
          bottom right;
        background-size: contain;
        //margin-top: -10px;
        background-position-y: 0px;
        position: absolute;
        right: 0;
        width: 95%;
        height: 90%;
      }
    }
  }
}

@media (max-width: 920px) {
  .mobile-resersed-row {
    display: flex;
    flex-direction: column-reverse;
  }
}

@media (max-width: 720px) {
  .luxury {
    .illustration {
      .pads {
        display: none;
      }
      .mobile-illustration {
        display: flex;
        width: 100%;
        .mobile-pad {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>