<template >
  <v-container fluid>
    <v-layout flex-wrap>

      <v-card
          class="ma-3"
          width="360"
          height="300"
          v-for="item in portfolios"
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
    detail: null,
  }),
  computed: {
    portfolios () {
      return this.$store.state.portfolios
    }
  }
}
</script>
<style>
.v-card { cursor: pointer; }
</style>
