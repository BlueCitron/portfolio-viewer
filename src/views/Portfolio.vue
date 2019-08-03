<template >
  <v-container fluid>
    <v-layout flex-wrap>

      <v-card
          class="ma-3"
          width="360"
          height="300"
          v-for="item in items"
          @click="overlay = true; detail = item;"
        >
          <v-img
            class="white--text"
            height="200px"
            :src="item.img"
          ></v-img>

          <v-card-text>{{ item.title }}</v-card-text>
          <v-card-text><small>{{ item.term }}</small></v-card-text>
        </v-card>

        <v-overlay v-if="detail" :value="overlay" >
          <v-card
            class="ma-3"
            width="960"
            height="840"
            @click="overlay =false"
          >
            <v-img
              class="white--text"
              height="480px"
              :src="detail.img"
            >
            <v-card-title>{{ detail.title }}</v-card-title>
            </v-img>

            <v-card-text>
              <v-layout v-if="detail.term" class="my-1">
                <v-flex md2>기간</v-flex>
                <v-flex md10>{{ detail.term }}</v-flex>
              </v-layout>

              <v-layout v-if="detail.tech" class="my-1">
                <v-flex md2>사용기술</v-flex>
                <v-flex md10>{{ detail.tech }}</v-flex>
              </v-layout>

              <v-layout v-if="detail.desc" class="my-1">
                <v-flex md2>설명</v-flex>
                <v-flex md10>{{ detail.desc }}</v-flex>
              </v-layout>

              <v-layout v-if="detail.repo" class="my-1">
                <v-flex md2>Repository</v-flex>
                <v-flex md10>
                  <a :href="detail.repo">{{ detail.repo }}</a>
                </v-flex>
              </v-layout>

              <v-layout v-if="detail.url" class="my-1">
                <v-flex md2>서비스 URL</v-flex>
                <v-flex md10><a :href="detail.url">{{ detail.url }}</a></v-flex>
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
    items: [
      {
          title: 'SKTelecom Tango-OC 개발 및 운영',
          img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          term: '2019.08.02 - 2019.08.31',
          tech: 'Java / SpringWebMVC / HTML5CSS3 / Javascript / MySQL',
          desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
          repo: 'https://github.com/BlueCitron/portfolio-viewer.git',
          url: 'http://125.178.219.22:9300',
      },
      {
          title: 'SKTelecom Tango-OR 개발',
          img: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          term: '2019.03.02 - 2019.05.31',
          tech: 'Java / SpringWebMVC / HTML5CSS3 / Javascript / Oracle 11g',
          desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
          repo: 'https://github.com/BlueCitron/portfolio-viewer.git',
          url: 'http://125.178.219.22:9300',
      }
    ],
    detail: null,
    // {
    //    https://cdn.vuetifyjs.com/images/cards/house.jpg
    //     title: 'SKTelecom Tango-OC 개발 및 운영',
    //     img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    //     term: '2019.08.02 - 2019.08.31',
    //     tech: 'Java / Spring / HTML5CSS3 / Javascript / MySQL',
    //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //     repo: 'https://github.com/BlueCitron/portfolio-viewer.git',
    //     url: 'http://125.178.219.22:9300',
    // }
  }),
}
</script>
<style>
.v-card {
  cursor: pointer;
}
</style>
