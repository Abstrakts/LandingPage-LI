<template class=".background">
  <div class="events">
    <v-row>
      <v-col cols="12" md="8" class="illustration">
        <v-row>
          <v-col class="mobile-illustration" cols="12">
            <div class="mobile-pad">
              <img src="../assets/EventsComponent/mobile.png" alt />
            </div>
          </v-col>
          <v-col class="pads" cols="12">
            <div class="face-pad"></div>
            <div class="animated-elements">
              <img class="halo" src="../assets/EventsComponent/flare.png" alt />
              <img class="dancer" src="../assets/EventsComponent/dancer.png" alt />
            </div>
            <div class="parallax-one">
              <div class="parallax-three"></div>
            </div>
            <div class="left-pad" id="event-left-pad">
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
                Tickets to shows,
                <br />Events and Local
                <br />Attractions
              </h2>
            </v-col>
            <v-col cols="12">
              <p class="outro">
                So lifelike you want
                <br />to be there...
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
    
    gsap.to("#event-left-pad", {
      scrollTrigger: {
        trigger: ".beverages",
        start: "bottom bottom",
        scrub: true
      },
      x: -150
    });

    let wrap = document.querySelector(".events");
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

      animate(".dancer", 1, -tilty * 4, -tiltx * 3, 0.01, 420);
      animate(".halo", 1, 0, -0, -tiltx * 10);
      animate('.parallax-one', 1, 0, -tiltx * 2, 0)

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

.mobile-illustration-image {
  display: none;
}

.background {
  background-color: #fff;
  height: 100vh;
}

.events {
  //background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  min-height: 100vh;
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
    .animated-elements {
      .dancer {
        position: absolute;
        width: 400px;
        height: 100%;
        top: 0;
        right: 100px;
        z-index: 200;
      }
      .halo {
        position: absolute;
        width: 200px;
        z-index: 200;
        left: 255px;
        bottom: 35px;
        transform: rotate(-90deg);
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
      background: url("../assets/EventsComponent/parallax-tickets-bottom.png")
        no-repeat top center;
      background-size: contain;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
      width: 100%;
      height: 95%;
    }
    .left-pad {
      z-index: 1;
      display: flex;
      width: 85vh;
      margin-left: 250px;
      justify-content: flex-start;
      img {
        height: 85vh;
      }
    }
  }
}
@media (max-width: 720px) {
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