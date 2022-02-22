<template>
  <div id="projects">
    <h3>useful and useless *stuff* I've made</h3>

    <ul class="projects">
      <li v-for="project in projects" v-bind:key="project.name" class="project">
        <h4>
          {{ project.name }}
        </h4>

        <span class="wip" v-if="project.wip" title="work-in-progress">WIP</span>

        <p>{{ project.description }}</p>

        <div class="links">
          <a v-if="project.url" :href="project.url" target="_blank">Website</a>
          <a v-if="project.github" :href="project.github" target="_blank"
            >GitHub</a
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      projects: [
        {
          name: "jsoning",
          description:
            "Store data in JSON files without the fear of corruption. You probably should use an actual database instead.",
          url: "https://jsoning.js.org/",
          github: "https://github.com/khalby786/jsoning",
        },
        {
          name: "MarkMe!",
          description:
            "A simple markdown editor with a built-in preview. It's not perfect, but it's pretty good.",
          url: "https://markme-dev.netlify.app",
          github: "https://github.com/khalby786/MarkMe",
          wip: true,
        },
        {
          name: "REHeader",
          description:
            "Genuinely bad code and horrible CSS designs, but somewhat popular when it comes to doing its job - creating header images for your GitHub profile README.",
          url: "https://reheader.glitch.me",
          github: "https://github.com/khalby786/REHeader",
        },
        {
          name: "shrt",
          description:
            "A really nice URL shortener and bad practices at its finest built with Vue and Deta.",
          url: "https://shrt-khalby786.vercel.app",
          github: "https://github.com/khalby786/shrt",
        },
        {
          name: "mockframe",
          description:
            "A JavaScript plugin that styles the <iframe> elements present in your webpage like a browser mockup, with additional styling!",
          github: "https://github.com/khalby786/mockframe",
          url: "https://mockframe.glitch.me",
        },
        {
          name: "brockly",
          description:
            "Related to mockframe in some ways that I do not wish to explain, this tool can convert screenshots to browser mockups lets goooooooooo!",
          url: "https://brockly.glitch.me/",
        },
        {
          name: "don8t",
          description:
            "Stylesheet that provides basic and beautiful styles for a simple webpage. And it makes your webpages look noice.",
          url: "https://don8t.glitch.me",
          github: "https://github.com/khalby786/don8t",
        },
        {
          name: "vue-utterances",
          description:
            "My 'hello-world' when it comes to publishing Vue components on npm, it packages utteranc.es into a Vue component for easier use.",
          url: "https://vue-utterances.js.org",
          github: "https://github.com/khalby786/vue-utterances",
        },
        {
          name: "mood-o-(meme)ter",
          description:
            "Extremely pog website that detects your mood using Google's Dialogflow API and represents it in the form of memes. Won the 'Best Individual Project' for TinkerHub's kickoff Saturday Hack Night!",
          url: "https://moodomemeter.vercel.app/",
        },
      ],
    };
  },
};
</script>

<style scoped>
#projects {
  margin-top: 50px;
  margin-bottom: 50px;
}

ul,
li {
  list-style: none !important;
}

ul,
li::before {
  content: none !important;
}

li {
  margin-top: 10px;
  margin-bottom: 10px;
}

h4 {
  margin-bottom: 0px;
}

a {
  cursor: pointer;
  text-decoration: none;
  font-family: var(--mono);
  color: var(--gray);
  margin: 0px;
  margin-right: 10px;
}

a:hover {
  background-color: inherit;
  color: inherit;
}

a::before {
  content: "[";
}

a::after {
  content: "]";
}

.projects p {
  margin-top: 5px;
  margin-bottom: 5px;
}

.wip {
  background-color: yellow;
  color: var(--foreground);
  font-weight: bold;
  padding: 0.2em;
  margin-left: 20px;
}

.project {
  padding-bottom: 0px;
  border: 1px solid var(--gray);
  margin-top: 20px;
  margin-bottom: 20px;
}

h4 {
  margin: 0px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

p {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.links {
  border-top: 1px solid var(--gray);
  padding: 10px;
  margin-top: 20px;
}
</style>
