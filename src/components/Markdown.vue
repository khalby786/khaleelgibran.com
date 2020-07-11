<template>
  <div id="about-markdown" v-html="html">
  </div>
</template>

<script>
  
  export default {
    name: 'Markdown',
    props: {
      content: String
    },
    data: function() {
      return {
        html: 'Hi there',
        markdown: this.content,
      }
    },
    mounted: function() {
      var md = require('markdown-it')();
      
      console.log(this.markdown)
      this.html = md.render(this.markdown)
    },
  }
  
</script>

<style scoped>

  #about-markdown {
    margin-top: 100px;
  }
  
</style>