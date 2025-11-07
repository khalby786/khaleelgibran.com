<template>
  <!-- To trick the aliveness checker: -->
  <!-- "https://overengineering.kognise.dev/embed/khalby786" -->
  <div
    class="w-full h-24 border border-slate-400/25 shadow-lg p-5 flex flex-row gap-3.5 justify-center"
  >
    <a :href="webringData.previous" target="_parent">&laquo; prev</a>
    <nav class="flex-1">  
      <p class="text-slate-200">khalby786 @ overengineeRING <span class="text-xs">(a webring)</span></p>
      <div>
        <a class="text-slate-400 mr-2" href="https://overengineering.kognise.dev/">list</a>
        <a class="text-slate-400" href="https://overengineering.kognise.dev/rand">rand</a>
      </div>
    </nav>
    <a :href="webringData.next" target="_parent">next &raquo;</a>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      webringData: {
        previous: "https://devrim.tech/",
        next: "https://kognise.dev/",
      },
    };
  },
  mounted() {
    fetch("https://overengineering.kognise.dev/members.json")
      .then((res) => res.json())
      .then((members) => {
        const filteredMembers = member
          .filter(
            ([ member, health ]) => member.name === "khalby786" || health === "Ok"
          )
          .map(([ member ]) => member);
        const myIndex = filteredMembers.findIndex(
          (member) => member.name === "khalby786"
        );
        const previousSite = filteredMembers[myIndex - 1].url;
        const nextSite = filteredMembers[myIndex + 1].url;
        this.webringData = {
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
