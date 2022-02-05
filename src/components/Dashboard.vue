<template>
  <div class="woohoo">
    <v-row class="first-row">
      <v-col cols="12" md="6" class="desktop"></v-col>
      <v-col cols="12" md="6" class="desktop-content">
        <div>
          <p class="title content mb-5 mt-10">
            Full Integration with popular
            <br />Room Management Software
          </p>
          <v-row>
            <v-col cols="12" class="content">
              <img class="societies" src="../assets/WoohooComponent/logos/logo-amadeus.svg" alt />
              <img class="societies" src="../assets/WoohooComponent/logos/logo-guesttek.svg" alt />
              <img class="societies" src="../assets/WoohooComponent/logos/logo-hotsos.png" alt />
              <img class="societies" src="../assets/WoohooComponent/logos/logo-philips.png" alt />
              <img class="societies" src="../assets/WoohooComponent/logos/logo-infrasys.png" alt />
            </v-col>
            <v-col cols="12" class="content">
              <img class="societies" src="../assets/WoohooComponent/logos/logo-fcs.png" alt />
              <img class="societies" src="../assets/WoohooComponent/logos/logo-honeywell.svg" alt />
              <img class="societies" src="../assets/WoohooComponent/logos/logo-oracle.png" alt />
              <img class="societies" src="../assets/WoohooComponent/logos/logo-interel.png" alt />
              <img class="societies" src="../assets/WoohooComponent/logos/logo-mubert.png" alt />
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row class="second-row">
      <v-col cols="12" md="6" class="dashboard-content">
        <v-row>
          <v-col cols="12" class="content">
            <div>
              <p class="title mb-10">
                Dashboard +
                <br />Detailed Analytics
              </p>
              <ul class="desktop-list mb-10">
                <li>&rarr; Customizable interface</li>
                <li>&rarr; Know your guests throught powerful Analystics and Reports</li>
                <li>&rarr; Personnalized Experience, real-time Updates and Offers</li>
              </ul>
              <a href>Contact us</a>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" class="dashboard"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../app.scss";

.woohoo {
  background-color: #fff;
  min-height: 100vh;
  .first-row {
    margin: 0;
    .desktop {
      background: url("../assets/WoohooComponent/first.jpeg") no-repeat top center;
      background-size: cover;
      height: 50vh;
    }
    .desktop-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        font-family: $titles, serif !important;
        font-size: 1.7rem !important;
        text-align: center;
      }
      .societies {
        width: 65px;
      }
    }
  }
}
.second-row {
  margin: 0;
  .dashboard {
    background: url("../assets/WoohooComponent/second.jpeg") no-repeat top center;
    background-size: cover;
    height: 50vh;
  }
  .dashboard-content {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f3f3;
    height: 50vh;
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      font-family: $titles, serif !important;
      font-size: 2rem !important;
    }
    .desktop-list {
      font-family: $text, sans-serif;
      font-size: 0.8rem;
      line-height: 25px;
      margin-left: -20px;
      list-style: none;
    }
  }
}
</style>