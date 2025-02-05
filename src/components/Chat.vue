<template>
  <div id="chat">
    <div class="max-w-xs" v-for="item in mastodon" :key="item">
      <p>
        <span class="username font-bold">khaleel said</span>
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      mastodon: []
    }
  },
  mounted() {
    // fetch from mastodon API for @thepixelatedonut on the social.dino.icu instance
    fetch("https://social.dino.icu/users/thepixelatedonut/outbox?page=true")
      .then(response => response.json())
      .then(data => {
        data.orderedItems.forEach(orderedItem => {
          this.mastodon.push(orderedItem.object.content);
        })
      });
  }
};
</script>

<style scoped>
#chat {
  z-index: -1;
  position: absolute;
  top: 30px;
  left: 60%;
  right: 0;
  bottom: 0;
  font-family: monospace;
  opacity: 0.5;
}
</style>
