<template>
  <p class="text-lg mt-6 mb-6" v-if="!isPlaying"> 
    {{ spotifyText }}
  </p>
  <div class="spotify mt-6 mb-6 border border-slate-400/25 shadow-lg p-5 backdrop-blur-sm flex gap-5" v-if="isPlaying" @mouseout="pause" @mouseover="play">
    <img class="flex-initial rounded drop-shadow-lg w-16 h-16" v-if="isPlaying" :src="albumCover"/>
    <p class="text-lg flex-initial justify-self-start" v-if="isPlaying"> 
      I'm listening to <b>{{ name }}</b> by <b>{{ artists }}</b> on Spotify right now!

      <span class="text-sm block mt-3 text-slate-400">(hover to play)</span>
    </p>
    <audio ref="audio" loop>
      <source :src="previewUrl" type="audio/mp3">
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spotifyText: "",
      name: null,
      artists: null,
      albumCover: null,
      isPlaying: false,
      previewUrl: ""
    };
  },
  mounted: async function () {
    let data = await fetch("/api/spotify");
    data = await data.json();

    console.log(data)

    if (!data.is_playing) {
      return;
    }

    const song = await data.item;
    const name = song.name;

    this.name = name;
    this.artists = "";
    this.albumCover = song.album.images[1].url
    this.previewUrl = song.preview_url

    for (let i = 0; i < song.artists.length; i++) {
      if (i === song.artists.length - 2) {
        this.artists += song.artists[i].name + " and ";
      } else if (i === song.artists.length - 1) {
        this.artists += song.artists[i].name;
      } else {
        if (i !== 0 || (i == 0 && song.artists.length > 1)) {
          this.artists += song.artists[i].name + ", ";
        } else {
          this.artists += song.artists[0].name;
        }
      }
    }

    this.isPlaying = true;
    this.spotifyText = `I'm listening to ${name} by ${this.artists} on Spotify right now!`;

    this.$refs.audio.load()
  },
  methods: {
    play: function() {
      this.$refs.audio.load()
      this.$refs.audio.play()
    },
    pause: function() {
      this.$refs.audio.pause()
    }
  }
};
</script>

<style scoped>
.spotify {
  background: url("/noise.png");
  background-size: contain;
}
</style>
