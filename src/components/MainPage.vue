<template>
  <div>
    <h1 id="myname">
      {{name}}
    </h1>

    <p id="tagline">
      {{tagline}}
    </p>

    <p id="about-homepage">
      {{about}}
    </p>
    
    <p style="text-align:center;font-size:40px;">
      <a :href="github" class="quickLinks"><i class="fab fa-github"></i></a>
      <a :href="twitter" class="quickLinks"><i class="fab fa-twitter"></i></a>
      <a href="/blog" class="quickLinks"><i class="fas fa-pencil-alt" style="font-size:30px;"></i></a>
    </p>
    
    <GitHub />
    
    <Testimonials />
    
  </div>
</template>

<script>

  import GitHub from "./GitHub.vue";
  import Testimonials from "./Testimonials.vue";
  
  export default {
    name: 'MainPage',
    components: {
      GitHub,
      Testimonials
    },
    props: {
      name: String,
      about: String,
      tagline: String,
      twitter: String,
      github: String,
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  h1 {
    font-weight: 600;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 0px;
  }

  #tagline {
    color: var(--border);
    text-align: center;
    font-size: 1.5rem;
    margin-top: 0px;
  }

  #about-homepage {
    font-size: 1em;
    text-align: center;
  }
  
  .quickLinks {
    border: 1px solid var(--secondary);
    border-radius: 9px;
    padding-left: 3vw;
    padding-right: 3vw;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-right: 10px;
    margin-left: 10px;
    color: white;
    cursor: pointer;
  }
  
</style>
