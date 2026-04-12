<template>
  <div>
    <h2 class="mt-10 font-bold">Some things I've made</h2>

    <ul id="projects">
      <li v-for="project in projects" :key="project.name" class="mt-3 mb-7">
        <h3 class="font-bold">{{ project.name }}</h3>
        <p class="mt-0" v-html="project.description"></p>
        <a
          :href="project.link"
          class="text-gray-200 mt-0 italic"
          target="_blank"
          >{{ project.link.replace(/^https?\:\/\//i, "") }}</a
        >
        <!-- <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block align-top"
        >
          <path
            d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
            fill="#eee"
          ></path>
        </svg> -->
      </li>
    </ul>

    <p class="mt-5">
      For more, see my <a href="https://github.com/khalby786">GitHub</a> and
      <a href="https://glitch.com/@khalby786">Glitch</a>.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Chroma Key",
          description:
            "Plugin for Figma design to replace colors in images or make it transparent!",
          link: "https://github.com/khalby786/chromakey",
        },
        {
          name: "Jsoning",
          description:
            "What started as an experiment became a full-fledged Node package (peaking 60k downloads a month) that lets you store data quickly and safely in JSON.",
          link: "https://jsoning.js.org",
        },
        {
          name: "REHeader",
          description:
            "Generate beautiful and simple header images for your GitHub profile.",
          link: "https://reheader.glitch.me",
        },
        {
          name: "Anonymous Thanksgiving",
          description:
            "Made for a <a href='//glitch.com/jams' target='_blank'>Glitch Jam</a>, give your thanks anonymously to anyone in the world.",
          link: "https://anonymous-thanksgiving.glitch.me",
        },
        {
          name: "(not the actual) xkcd API",
          description:
            "CORS proxy for the xkcd API because the actual xkcd API doesn't allow cross-origin requests. Read more about how I made this <a href='https://blog.khaleelgibran.com/posts/go-serverless-vercel/'>here</a>.",
          link: "https://getxkcd.vercel.app",
        },
        {
          name: "SlackCMS",
          description: "Use Slack to run your next blog or website.",
          link: "https://github.com/khalby786/slack-cms",
        },
      ],
    };
  },
};
</script>

<style></style>
