<template>
  <div id="about">
    <Markdown :content="about" />
  </div>
</template>

<script>
  
  import Markdown from "@/components/Markdown.vue";
  
  var description = `

    Hi. My name is Khaleel Gibran.

    I'm a web developer from India and I love donuts and Blender. 

    I create websites and projects, with HTML, CSS, Javascript (yaay!), Node.js and sometimes Vue. I'm very much obsessed with the combination of Node.js and Express, which I have used in almost all my projects. While I have used MongoDB, I use database adapters almost all the time to quickly create databases and get coding. 

    I randomly post random tweets and fleets on [Twitter](https://twitter.com/khalby786), and sometimes useful tweets. [GitHub](https://github.com/khalby786) is where all my code is. The [Glitch Support Forum](https://support.glitch.com) is where I hang out very much often. Discord (khalby786#1531) is much better than all the other chat applications out there. 

    In my free time, I like to eat, watch movies, draw webcomics like [The Picatoon](https://thepicatoon.wordpress.com), play football and PES.
 
  `;

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
    font-weight: 100;
    line-height: 24px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 50px;
    max-width: 580px;
    margin: auto;
  }
  
</style>