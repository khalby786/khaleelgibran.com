<template>
  <div class="home">
    <img src="https://cdn.khaleelgibran.com/img/donut.png" alt="Khaleel Gibran's blue donut" id="donut">
    <MainPage name="Khaleel Gibran" tagline="13 year-old web developer + donut lover" about="I create open-source projects with Node.js and some Vue." twitter="https://twitter.com/khalby786" github="https://github.com/khalby786" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue';

export default {
  name: 'Home',
  components: {
    MainPage
  }
}
</script>

<style scoped>

  #donut {
    margin-top: 100px;
    height: 160px;
    border-radius: 80px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 160px;
  }
  
</style>