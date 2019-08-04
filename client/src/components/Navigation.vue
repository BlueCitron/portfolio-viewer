<template >
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
</template>
<script>
export default {

}
</script>
<style>

</style>
