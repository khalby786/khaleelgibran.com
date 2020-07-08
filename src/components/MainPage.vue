<template>
  <div>
    <h1>
      {{name}}
    </h1>

    <p id="tagline">
      {{tagline}}
    </p>

    <p id="about">
      {{about}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    name: String,
    about: String,
    tagline: String,
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
    color: #4a4a4a;
    text-align: center;
    font-size: 1.5rem;
    margin-top: 0px;
  }

  #about {
    font-size: 1em;
    text-align: center;
  }
  
</style>
