<template>
  <footer>
    <center><div class="line"></div></center>
    <p class="made-with">
      Made with ❤️ & Vue by Khaleel Gibran  
    </p>
    <span>This website is open-sourced under the MIT License</span>
    <p class="social">
      <a href="https://github.com/khalby786"><i class="fab fa-github"></i></a><a href="https://twitter.com/khalby786"><i class="fab fa-twitter"></i></a><a href="mailto:khalby786@gmail.com"><i class="fas fa-envelope"></i></a>
    </p>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  
  footer {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 30px;
  }
  
  .line {
    width: 200px;
    border-top: 1px solid white;
  }
  
  .made-with {
    color: var(--border);
    font-family: "IBM Plex Mono", monospace;
  }
  
  p {
    margin-bottom: 3px;
  }
  
  .social {
    font-size: 35px;
    margin-top: 10px;
  }
  
  i {
    margin-left: 10px;
    margin-right: 10px;
  }
  
  a {
    border: none;
  }
  
</style>