<template>
  <div id="app">
    <header>
      <span id="left" style="font-size:30px;margin-left:15vw;cursor:pointer;">🍩</span>
      <router-link to="/about" class="right" style="margin-right:15vw;">About</router-link>
      <router-link to="/" class="right">Home</router-link>
    </header>
    <router-view/>
  </div>
</template>

<style>
  
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
  
  html {
    font-family: -apple-system, BlinkMacSystemFont, segoe ui, Helvetica, Arial,
      sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;
    position: relative;
    box-sizing: border-box;
    margin: 5vw;
    --primary: #0F0F23;
    --secondary: white;
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

  .right {
    float: right;
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
  
  .right:hover {
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
