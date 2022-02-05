<template>
  <v-container class="contact">
    <v-row class="contact-img">
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12" class="first-col"></v-col>
          <v-col cols="12">
            <p class="title">Contact Us</p>
            <p class="text mb-6">
              Our team will be happy to discuss your projects, how our
              <br />technology will delight your guests and strengthen their
              <br />emotional connection to your brand.
            </p>
            <p class="text">
              Use this form or contact us directly
              <br />
              <b>business@leiainc.com</b>
            </p>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="6" class="contact-form-block">
        <v-form class="contact-form">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field color="black" label="FULL NAME" required></v-text-field>

                <v-text-field color="black" label="COMPANY NAME" required></v-text-field>

                <v-text-field color="black" label="JOB TITLE" required></v-text-field>
                <v-text-field color="black" label="PHONE NUMBER" required></v-text-field>
                <v-text-field color="black" label="EMAIL" required></v-text-field>
                <v-select color="black" label="COUNTRY"></v-select>
                <v-textarea
                  color="black"
                  label="YOUR MESSAGE"
                  loader-height="50px"
                  rows="2"
                  :no-resize="true"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-checkbox
                  class
                  label="I WANT UPDATE'S & NEWS FROM LEIA INC. AND SUBSCRIBE TO OUR NEWSLETTER"
                ></v-checkbox>
                <div class="button my-2">
                  <v-btn>SEND →</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
      <v-col cols="12">
        <!-- <p class="foot">
          LEIA INC. 2020 | 3440 SAND HILL ROAD, STE 100 | MENLO PARK, CA 94025 -
          <a href>PRIVACY POLICY</a>
          <a href>TERMS OF SERVICE</a>
          <a href>SECURITY</a>
          <a href>
            <img class="ml-3" src="../assets/icon-linkedin.svg" alt />
          </a>
        </p> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../app.scss";

.contact {
  background-color: #fff;
  min-height: 100vh;
  .contact-img {
    background: url("../assets/ContactComponent/bg-contact.png") no-repeat top
      center;
    background-size: contain;
    background-position-x: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 55vh;
  }
  .first-col {
    height: 55vh;
  }
  .title {
    font-family: $titles, sans-serif !important;
    font-size: 2rem !important;
  }
  .text {
    font-family: $text, serif;
    //margin-top: 100px;
  }
  .contact-form-block {
    background-color: #eee;
    height: 85vh;
    padding: 0 8% 0 8%;
    .contact-form {
      font-family: $text, serif !important;
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
      .v-text-field {
        height: 40px;
      }
      .v-btn {
        background-color: #000 !important;
        color: #fff;
      }
    }
  }
}
.foot {
  position: absolute;
  bottom: 0;
  right: 5%;
  font-size: 10px;
  display: flex;
  justify-content: center;
  a {
    color: #000;
    margin-left: 5px;
  }
}
</style>