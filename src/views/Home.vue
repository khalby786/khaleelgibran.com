<template>
  <div id="home">
    <vue-particles color="#dedede" :particlesNumber="80"></vue-particles>
    <img src="https://cdn.khaleelgibran.com/img/donut.png" alt="Khaleel Gibran's blue donut" id="donut">
    <MainPage name="Khaleel Gibran" tagline="14 year-old web developer + donut lover" about="I create open-source projects with Node.js and some Vue." twitter="https://twitter.com/khalby786" github="https://github.com/khalby786" />
  </div>
</template>

<script>
  
  import Vue from 'vue';
  import VueParticles from 'vue-particles';
  Vue.use(VueParticles);

  import MainPage from '@/components/MainPage.vue';

  export default {
    name: 'Home',
    components: {
      MainPage
    },
    mounted: function() {
      console.log(localStorage.getItem("popup"));
      if ((localStorage.getItem("popup") !== "viewed") || (!localStorage.getItem("popup"))) {
        this.$swal("Hey there 👋", "This personal website is still under development, so parts of this website might not work as expected. Kindly bear with me!", "info");
        localStorage.setItem("popup", 'viewed');
      }
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
    z-index: 9;
  }
  
  #particles-js {
    z-index: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
  }
  
</style>