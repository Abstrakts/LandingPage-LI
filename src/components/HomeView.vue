<template>
  <div class="home-view">
    <div class="head">
      <div class="introduction">
        <v-container>
          <v-row class="text-center">
            <v-col cols="12">
              <div class="home-title">Light up Life.</div>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="12">
              <div class="home-subtitle">
                <img src="../assets/LOGO-LEIA-INC.svg" alt="logo leia inc" />
              </div>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="12" class="text-container">
              <div class="home-description">
                Discover
                <b>Lightfield</b>, the next generation medium that lets you experience
                <b>3D imagery</b> with a natural
                sensation of depth and feel for textures, materials and lights.
                <b>No eye-wear needed</b>.
                It makes you feel and connect with digital content like never before.
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <FloatingBar />
    <IntroBar />
  </div>
</template>

<script>
import FloatingBar from "@/components/FloatingBar";
import IntroBar from "@/components/IntroBar";

export default {
  components: {
    FloatingBar,
    IntroBar
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../app.scss";

.home-view {
  background-color: $white;
  width: 100%;
  max-height: 100vh;
  .head {
    height: 70vh;
    width: 100%;
    background-image: url("../assets/header.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .introduction {
      bottom: 0;
      background-color: $oBlack;
      width: 400px;
      min-height: 200px;
      .home-title {
        color: $white;
        font-family: $titles, serif;
        font-size: 2.5rem;
      }
      .home-subtitle {
        img {
          height: 22px;
        }
      }
      .home-description {
        padding: 0 20px 0 20px;
        text-align: center;
        color: $white;
        font-family: $text, sans-serif;
        font-size: 14px;
        line-height: 25px;
      }
    }
  }
}
@media (max-width: 920px) {
  .home-view {
    .head {
      height: 100vh;
    }
  }
}

@media (max-width: 720px) {
  .home-view {
    .head {
      height: 80vh;
      .introduction {
        width: 100%;
      }
    }
  }
}
</style>