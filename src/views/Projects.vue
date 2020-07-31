<template>
  <div>
    <h2>
      My Projects
    </h2>
    <br>
    <br>
    <div id="projects">
      <Project projectName="Jsoning" projectDesc="✨ A simple key-value JSON-based persistent lightweight database. ✨" projectImgURL="https://res.cloudinary.com/practicaldev/image/fetch/s--Y166a1oU--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--eSW42SdG--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://dev-to-uploads.s3.amazonaws.com/i/zo7qjw0m0qwevgrgnqce.png" />
      <Project projectName="REHeader" projectDesc="Generate beautiful header images for your GitHub profile READMEs." projectImgURL="https://camo.githubusercontent.com/d88cef2dcde1e73714747c0f78286fd4dd6f0993/68747470733a2f2f63646e2e676c697463682e636f6d2f30613466363732652d376435632d343235342d386635612d38343763323932346264663625324653637265656e25323053686f74253230323032302d30372d31372532306174253230352e31392e3138253230504d2e706e673f763d31353934393931393934353038" />
      <Project projectName="GlitchyPastePen" projectDesc="Create simple front-end project with an online code editor and instant hosting." projectImgURL="https://cdn.glitch.com/622554c6-3118-4838-8819-e003b9525f5d%2FScreen%20Shot%202020-07-12%20at%204.27.55%20PM.png?v=1594557148047" />
      <Project projectName="MarkMe!" projectDesc="Simple, online, markdown to HTML viewer and editor." projectImgURL="https://camo.githubusercontent.com/34d23afa27929e893e54c44a27f520f72b7af12b/68747470733a2f2f63646e2e676c697463682e636f6d2f65306233393464622d383061652d343738332d613438372d3536636563666137363135612532466d61726b6d652d6c696768742e706e673f763d31353839303937363235393937" />
      <Project projectName="Personal Website" projectDesc="There's a high possibility that this repo is going to be my next website. Don't complain if you're disappointed. And it's open-source, even in development."  /><br>
      <Project projectName="Handsomizer" projectDesc="A small tool to format and beautify your code, that is really work in progress." />
       
    </div>      
  </div>
</template>

<script>
  
  import Project from '@/components/Project.vue';

  export default {
    name: 'Projects',
    components: {
      Project
    }
  }
    
</script>

<style scoped>
  
  h2 {
    margin-top: 40px;
    margin-left: calc(5vw + 10px);
    margin-bottom: 0px;
  }

  #projects {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-left: 5vw;
    margin-right: 5vw;
  }
  
</style>