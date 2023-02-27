<template>
  <p class="text-xl mt-12">
    {{ epoch }}, I made stickers and hoodies for <a href="https://epoch.hackclub.com" target="_blank">Epoch</a>, a <a href="https://github.com/hackclub/epoch" target="_blank">42-hour hackathon</a> at Delhi NCR, India, over New Year's, which was really cool! And now I make even more stickers and other cool stuff at <a href="https://www.codeday.org/" target="_blank">CodeDay</a>!
  </p>
  <img class="mt-5 mb-12 shadow-lg" src="/epoch-stickers.jpg" />
</template>

<script>
import moment from 'moment';

export default {
  computed: {
    epoch() {
      return moment([2023, 1, 1]).fromNow().charAt(0).toUpperCase() + moment([2023, 1, 1]).fromNow().substring(1)
    }
  }
}
</script>

<style>

</style>