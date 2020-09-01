<template>
  <div id="about">
    <PuSkeleton :duration="5"><Markdown :content="about" /></PuSkeleton>
    <center><link href="https://fonts.googleapis.com/css?family=Arial" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/khaleelgibran">🍩<span style="margin-left:5px;font-size:18px !important;">buy me a donut</span></a></center>
  </div>
</template>

<script>
  
  import Markdown from "@/components/Markdown.vue";
  
  var description = `

    Hi. My name is Khaleel Gibran.

    I'm a fourteen year-old web developer from India and I love donuts and Blender. 

    I create websites and projects, with HTML, CSS, Javascript (yaay!), Node.js and sometimes Vue. I'm very much obsessed with the combination of Node.js and Express, which I have used in almost all my projects. While I have used MongoDB, I use database adapters almost all the time to quickly create databases and get coding. 

    I randomly post random tweets and fleets on [Twitter](https://twitter.com/khalby786), and sometimes useful tweets. [GitHub](https://github.com/khalby786) is where all my code is. The [Glitch Support Forum](https://support.glitch.com) is where I hang out very much often. Discord (khalby786#1531) is much better than all the other chat applications out there. 

    In my free time, I like to eat, watch movies, draw webcomics like [The Picatoon](https://thepicatoon.wordpress.com), play football and PES.
 
  `;
  
  import Vue from 'vue';
  import PuSkeleton from 'vue-loading-skeleton';

  Vue.use(PuSkeleton);

  export default {
    name: 'About',
    data() {
      return {
        about: description
      }
    },
    components: {
      Markdown
    }
  }

</script>

<style>
  
  #about {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 200;
    line-height: 24px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 50px;
    max-width: 580px;
    margin: auto;
  }
  
  .bmc-button img{height: 34px !important;width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 15px 7px 10px !important;line-height: 35px !important;height:51px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#000000 !important;border-radius: 8px !important;border: 1px solid transparent !important;font-size: 18px !important;letter-spacing:0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Arial', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}
  
</style>