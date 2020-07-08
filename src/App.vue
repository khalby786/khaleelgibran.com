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
  
  html {
    font-family: -apple-system, BlinkMacSystemFont, segoe ui, Helvetica, Arial,
      sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;
    position: relative;
    box-sizing: border-box;
    margin: 5vw;
  }

  header {
    height: auto;
    background-color: white;
    top: -3vw;
    left: 0px;
    width: 100%;
    position: absolute;
    box-shadow: 0 2px 0 0 #f5f5f5;
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
    border-bottom: 1px solid blue;
  }

  #left {
    float: left;
    display: inline-block;
  }

  a {
    color: black;
    border-bottom: 1px solid blue;
    text-decoration: none;
  }

</style>
