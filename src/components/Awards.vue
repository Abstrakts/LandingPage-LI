<template>
  <div class="awards">
    <v-row>
      <v-col cols="12" md="7"></v-col>
      <v-col cols="12" md="5" class="content">
        <v-container class="all">
          <div>
            <v-row>
              <v-col cols="12" class="bigs-awards">
                <img
                  class="bigs-awards-logo"
                  src="../assets/AwardsComponent/logo-german-awards.png"
                  alt
                />
                <img class="bigs-awards-logo" src="../assets/AwardsComponent/logo-CIO.png" alt />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="littles-awards">
                <img
                  class="littles-awards-logo"
                  src="../assets/AwardsComponent/logo-global.png"
                  alt
                />
                <img class="littles-awards-logo" src="../assets/AwardsComponent/logo-CES.png" alt />
                <img class="littles-awards-logo" src="../assets/AwardsComponent/logo-sis.png" alt />
                <img
                  class="littles-awards-logo"
                  src="../assets/AwardsComponent/logo-germaninno.png"
                  alt
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-row>
                  <img
                    class="mt-10 mb-10"
                    src="../assets/AwardsComponent/logo-MIT.png"
                    alt
                    width="100px"
                  />
                </v-row>
                <v-row>
                  <p class="text">
                    "There has been very little innovation in the basic
                    <br />physics for making 3-D images since early in the 20th
                    <br />century. This new display is transforming a technology
                    <br />that's been around for 100 years"
                  </p>
                </v-row>
                <v-row class="forbes mt-10">
                  <img src="../assets/AwardsComponent/logo-forbes.png" alt width="100px" />
                  <i>"Leia, The Display Of The Future"</i>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../app.scss";

.awards {
  background: url("../assets/AwardsComponent/bg-awards.png") no-repeat top
    center;
  background-size: cover;
  background-color: #fff;
  min-height: 100vh;
  .content {
    background-color: rgba(255, 255, 255, 0.8);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: top;
    .bigs-awards {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 120px;
        margin: 0 10px 0 10px;
      }
    }
    .littles-awards {
      display: flex;
      justify-content: center;
      align-items: center;
      .littles-awards-logo {
        height: 60px;
        margin: 0 10px 0 10px;
      }
    }
    .text {
      font-size: 0.9rem;
      font-family: $text, serif;
      font-weight: lighter;
      font-style: italic;
    }
    .forbes {
      font-size: 0.9rem;
      font-family: $text, serif;
      font-weight: lighter;
      font-style: italic;
    }
  }
}
.all {
  justify-content: center;
  align-items: center;
  display: flex;
}

.row {
  margin: 0;
}
</style>