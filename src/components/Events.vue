<template>
  <!-- <p class="text-xl mt-12">
    {{ epoch }}, I made stickers and hoodies for <a href="https://epoch.hackclub.com" target="_blank">Epoch</a>, a <a href="https://github.com/hackclub/epoch" target="_blank">42-hour hackathon</a> at Delhi NCR, India, over New Year's, which was really cool! And now I make even more stickers and other cool stuff at <a href="https://www.codeday.org/" target="_blank">CodeDay</a>!
  </p>
  <img class="mt-5 mb-12 shadow-lg" src="/epoch-stickers.jpg" /> -->
  <ul id="posts-list" class="mt-10 mb-10">
    <li class="mt-2" v-for="post in posts" :key="post.id"><a :href="post.link" class="max-w-md inline-block">{{ post.title }}</a> <span class="float-right text-slate-300">{{ parse(post.published) }}</span></li>
  </ul>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      posts: null,
    };
  },
  async mounted() {
    let posts = await fetch(
      "https://feedtojson.vercel.app/https%3A%2F%2Fblog.khaleelgibran.com%2Ffeed.xml"
    );
    posts = await posts.json();
    console.log(posts)
    this.posts = posts.items;
  },
  methods: {
    parse: (timestamp) => {
      return moment(new Date(timestamp)).format("DD-MM-YYYY");
    }
  }
};
</script>

<style></style>
