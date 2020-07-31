<template>
  <div id="app">
    <header>
      <span id="left" style="font-size:30px;margin-left:15vw;cursor:pointer;">🍩</span>
      <span class="right" style="margin-right:15vw;">
        <router-link to="/" class="nav-button">Home</router-link>
        <router-link to="/about" class="nav-button">About</router-link>
        <router-link to="/projects" class="nav-button">Projects</router-link>
      </span>
    </header>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  
  import Footer from '@/components/Footer.vue'
  
  export default {
    components: {
      Footer
    }
  }
  
</script>

<style>
  
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
  @import url('https://rsms.me/inter/inter.css');
  
  html {
    font-family: -apple-system, BlinkMacSystemFont, segoe ui, "Inter", Helvetica, Arial,
      sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;
    position: relative;
    box-sizing: border-box;
    margin: 5vw;
    --primary: #100e17;
    --secondary: white;
    --border: #63E921;
    background-color: var(--primary);
    color: var(--secondary);
  }

  header {
    height: auto;
    background-color: var(--primary);
    color: var(--secondary);
    top: -3vw;
    left: 0px;
    width: 100%;
    position: absolute;
    /*   padding: 15px; */
    margin-bottom: 100px;
    box-sizing: border-box; /** add this **/
    -moz-box-sizing: border-box; /** add this **/
    -webkit-box-sizing: border-box; /** add this **/
    -ms-box-sizing: border-box; /** add this **/
    padding: 10px;
  }
  
  h2 {
    color: var(--border);
  }
  
  .right {
    float: right;
  }

  .nav-button {
    display: inline-block;
    cursor: pointer;
    transition: 150ms linear;
    margin-right: 20px;
    border: 1px solid var(--secondary);
    color: var(--secondary);
    border-radius: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 7px;
    padding-left: 7px;
    font-family: "IBM Plex Mono", monospace;
    transition: 150ms;
  }
  
  .nav-button:hover {
    background-color: var(--secondary);
    color: var(--primary);
    transition: 150ms;
  }

  #left {
    float: left;
    display: inline-block;
  }

  a {
    color: var(--secondary);
    border-bottom: 1px solid blue;
    text-decoration: none;
  }

</style>
