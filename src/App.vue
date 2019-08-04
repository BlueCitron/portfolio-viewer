<template>
<v-app app>
  <template v-if="isLoaded">
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
  data: () => ({
    isLoaded: false,
  }),
  async created () {
    console.log('App Created.')
    // 여기서 데이터 로딩 후 Loading unset
    console.log('RESUME_API : ', process.env.VUE_APP_RESUME_API)
    console.log('PORTFOLIO_API : ', process.env.VUE_APP_PORTFOLIO_API)

    Promise.all([
      this.$http.get(process.env.VUE_APP_RESUME_API),
      this.$http.get(process.env.VUE_APP_PORTFOLIO_API),
    ]).then(values => {
      const resume = values[0].data
      const portfolio = values[1].data
      this.$store.commit('SET_RESUME', resume)
      this.$store.commit('SET_PORTFOLIO', portfolio)
      this.isLoaded = true
    })

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
