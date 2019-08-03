<template>
<v-app app>
  <template v-if="true">
    <header class="mt-5">
      <h1 class="font-weight-light">웹 개발자 BlueCitron</h1>
    </header>

    <Navigation></Navigation>

    <v-content>
      <!-- Provides the application the proper gutter -->
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-content>

    <Footer></Footer>
  </template>

  <template v-else>
    <v-layout fill-height align-center justify-center>
      <v-progress-circular
      :size="300"
      color="primary"
      indeterminate
      ></v-progress-circular>
      <span style="position: relative; left: -180px;">Loading..</span>
    </v-layout>
  </template>

</v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer,
  },
  async created () {
    console.log('App Created.')
    // 여기서 데이터 로딩 후 Loading unset
    const { data } = await this.$http.get('https://api.hnpwa.com/v0/news/1.json')
    console.log(data)
  }
}
</script>

<style>
a { text-decoration: none;}
#app {
  background: #ffffff;
  width: 1200px;
  margin: 0 auto;
}
</style>
