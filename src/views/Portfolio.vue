<template >
  <v-container fluid>
    <v-layout flex-wrap>

      <!-- <v-card
        loading="true"
        width="400"
        class="mx-2"
        v-for="item in [1, 2, 3, 4]"
      >
          <v-img
          v-if="media"
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        ></v-img>
        <v-card-title>I'm a title</v-card-title>
      </v-card> -->
      <v-card
          class="ma-3"
          width="360"
          height="300"
          v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
          @click="overlay = true"
        >
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>

          <v-card-text>SKT Tango-OC 개발 및 운영</v-card-text>
          <v-card-text><small>2019.08.02 - 2019.08.07</small></v-card-text>
        </v-card>

        <v-overlay :value="overlay" >
          <v-card
            class="ma-3"
            width="960"
            height="840"
            @click="overlay =false"
          >
            <v-img
              class="white--text"
              height="480px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            ></v-img>

            <v-card-text>
              <v-layout>
                <v-flex md2>기간</v-flex>
                <v-flex md10>2019.08.02 - 2019.08.31</v-flex>
              </v-layout>
            </v-card-text>
            <v-card-text>
              <v-layout>
                <v-flex md2>사용기술</v-flex>
                <v-flex md10>Java / Spring / HTML5CSS3 / Javascript / MySQL</v-flex>
              </v-layout>
            </v-card-text>
            <v-card-text>
              <v-layout>
                <v-flex md2>설명</v-flex>
                <v-flex md10>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-text>
              <v-layout>
                <v-flex md2>Repository</v-flex>
                <v-flex md10>https://github.com/BlueCitron/portfolio-viewer.git</v-flex>
              </v-layout>
            </v-card-text>
            <v-card-text>
              <v-layout>
                <v-flex md2>서비스 URL</v-flex>
                <v-flex md10><a href="http://125.178.219.22:9300">http://125.178.219.22:9300</a></v-flex>
              </v-layout>
            </v-card-text>

          </v-card>
        </v-overlay>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    overlay: false,
  }),
}
</script>
<style>
.v-card {
  cursor: pointer;
}
</style>
