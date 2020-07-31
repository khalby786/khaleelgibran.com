<template>
  <div class="project">
    <img :src="projectImgURL">
    <h4 class="project-name">
      {{projectName}}  
    </h4>
    <p>
      {{projectDesc}}  
    </p>
    <slot></slot>
  </div>
</template>

<script>
  
  export default {
    name: 'Project',
    props: {
      projectName: String,
      projectDesc: String,
      projectImgURL: String
    }
  }
  
</script>

<style>
  
  
  img {
    width: 100%;
    border-radius: 5px;
  }
  
  .project {
    flex: 1;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 0px;
    border-radius: 5px;
    border: 1px solid var(--border);
    padding-top: 20px;
    padding-left: 40px;
    padding-bottom: 40px;
    padding-right: 40px;
    height: 300px;
    margin-top: 10px;
    min-width: 300px;
  }
  
</style>