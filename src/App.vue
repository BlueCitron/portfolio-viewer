<template>
<v-app app>
  <header class="mt-5">
    <h1 class="font-weight-light">웹 개발자 BlueCitron</h1>
  </header>

  <v-container class="my-3">
      <v-btn
      :to="{ name: 'Resume' }"
      text
      large
      color="primary"
      class="mr-2">이력서</v-btn>
      <v-btn
      :to="{ name: 'Portfolio' }"
      text
      large
      color="primary"
      class="mx-2">포트폴리오</v-btn>
  </v-container>

  <v-content>
    <!-- Provides the application the proper gutter -->
      <!-- If using vue-router -->
      <router-view></router-view>
  </v-content>
  <v-footer id="footer" app>
    푸터 ㅋㅋ
  </v-footer>
</v-app>
</template>
<script>

export default {

}
</script>
<style>
#app, #footer {
  background: #ffffff;
  width: 1200px;
  margin: 0 auto;
}

</style>
