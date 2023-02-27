<template>
  <!-- https://overengineering.kognise.dev/rand -->
  <!-- https://overengineering.kognise.dev/ -->
  <div
    class="w-full h-24 border border-slate-400/25 shadow-lg p-5 flex flex-row gap-3.5 justify-center"
  >
    <a :href="yamlData.previous" target="_parent">&laquo; prev</a>
    <nav class="flex-1">  
      <p class="text-slate-200">khalby786 @ overengineeRING <span class="text-xs">(a webring)</span></p>
      <div>
        <a class="text-slate-400 mr-2" href="https://overengineering.kognise.dev/">list</a>
        <a class="text-slate-400" href="https://overengineering.kognise.dev/rand">rand</a>
      </div>
    </nav>
    <a :href="yamlData.next" target="_parent">next &raquo;</a>
  </div>
</template>

<script>
import YAML from "yaml";

export default {
  data: function () {
    return {
      yamlData: {
        previous: "https://wavecat.xyz/",
        next: "https://munvoseli.github.io/",
      },
    };
  },
  mounted() {
    fetch("https://cdn.jsdelivr.net/gh/kognise/overengineering/config.yaml")
      .then((res) => res.text())
      .then((data) => {
        const parsedYaml = YAML.parse(data);
        const myIndex = parsedYaml.sites.findIndex(
          (site) => site.name === "khalby786"
        );
        const previousSite = parsedYaml.sites[myIndex - 1].url;
        const nextSite = parsedYaml.sites[myIndex + 1].url;
        this.yamlData = {
          previous: previousSite,
          next: nextSite,
        };
      });
  },
};
</script>

<style scoped>
a {
  display: inline-block;
  padding: 1px;
}
a::before {
  content: "[";
}
a::after {
  content: "]";
}
p {
  margin: 0 0 10px 0;
}
</style>
