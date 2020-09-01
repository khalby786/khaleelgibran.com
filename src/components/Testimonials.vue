<template>
  <div id="testimonials">
    <h2 v-animate="'slide-up'">
      Testimonials
    </h2>
    <div class="testimonial" v-for="testimonial in testimonials" v-animate="'slide-up'">
      <p class="quote">
        {{testimonial.testimonial}}
      </p>
      <p class="author">
        {{testimonial.author}}
      </p>
    </div>
  </div>
</template>

<script>
  
  import Vue from 'vue';
  import VueAnimate from 'vue-animate-scroll';
  
  Vue.use(VueAnimate);

  export default {
    name: 'Testimonials',
    data: function() {
      return {
        testimonials: [
          {
            testimonial: "That's crazy. You're far beyond good. You're excellent. Keep it up. ",
            author: "Liyas Thomas"
          },
          {
            testimonial: "Excellent, Khaleel. I was checking out your website and your GitHub. Really good work.",
            author: "Kailash Nadh"
          },
          {
            testimonial: "Happy to hear about the good work you do around code. ",
            author: "Moosa Meher MP"
          }
        ]
      }
    }
  }
  
</script>

<style scoped>

  #testimonials {
    margin-top: 100px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 50px;
    max-width: 580px;
    margin: auto;
  }
  
  .testimonial {
    background-color: #ff6b6b;
    border-radius: 9px;
    border: 4px solid black;
    padding: 3vw;
    color: black;
    margin-top: 20px;
    font-family: Helvetica, Arial, sans-serif;
    box-shadow:
      0 0px 2.2px rgba(0, 0, 0, 0.031),
      0 0px 5.3px rgba(0, 0, 0, 0.044),
      0 0px 10px rgba(0, 0, 0, 0.055),
      0 0px 17.9px rgba(0, 0, 0, 0.066),
      0 0px 33.4px rgba(0, 0, 0, 0.079),
      0 0px 80px rgba(0, 0, 0, 0.11)
    ;
  }
  
  .author {
    font-family: "IBM Plex Mono", monospace;
    font-weight: bold;
  }
  
  .animate {
    transition-delay: .5s;
    transition-duration: .50s;
    transition-timing-function: ease-in;
  }

  .slide-up {
    transform: translateX(-100px);
    opacity: 0;
  }

  .slide-up.animate-active {
    transform: translateX(0px);
    opacity: 1;
  }
  
</style>