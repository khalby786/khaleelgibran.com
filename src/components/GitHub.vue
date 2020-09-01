<template>
  <div id="repos">
    <h2 v-animate="'slide-up'">
       <i class="fab fa-github"></i> My GitHub Activity
    </h2>
    <h3 v-animate="'slide-up'">
      Last Commit  
    </h3>
    <div id="git-commit" v-animate="'slide-up'">
      <a id="commit" :href="commitUrl" style="color:black;">{{commitText}}</a><br><br>
      <span id="repoinfo" v-html="repoInfo" style="color:black;"></span>  
    </div>
    <h3 v-animate="'slide-up'">
      Recent GitHub Repositories  
    </h3>
    <div class="repo" v-for="(repo, index) in json" v-animate="'slide-up'">
      <h3>
        <a :href="repo.url" style="color:black;">{{repo.name}}</a>
      </h3>
      <p>
        {{repo.description}}  
      </p>
      <p>
        <i class="far fa-star"></i><span style="vertical-align:middle;">&nbsp;{{repo.stargazers}}</span><i class="fas fa-code-branch" style="margin-left:20px;"></i><span style="vertical-align:middle;">&nbsp;{{repo.forks}}</span><span style="margin-left:20px;" class="language" :style="json[index].primaryLanguage ? 'background-color:' + json[index].primaryLanguage.color : 'background-color: grey'"></span><span style="vertical-align:middle;" class="languageName">&nbsp; {{json[index].primaryLanguage ? json[index].primaryLanguage.name : 'No primary language'}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  
  import Vue from 'vue';
  import VueAnimate from 'vue-animate-scroll';
  
  Vue.use(VueAnimate);
  
  import PuSkeleton from 'vue-loading-skeleton';

  Vue.use(PuSkeleton);

  export default {
    name: 'GitHub',
    data: function() {
      return {
        json: [],
        commitUrl: "",
        commitText: "",
        repoInfo: "",
        languageStyle: "",
      }
    },
    mounted: async function() {
      
      let req = await fetch('https://khalby786-latest-repos.now.sh');
      let res = await req.json();
      
      this.json = res;
      
      // find latest commit
      const response = await fetch(
        `https://api.github.com/users/khalby786/events/public`
      );
      const json = await response.json();

      let latestCommit;

      const latestPushEvent = json.find(event => {
        if (event.type !== "PushEvent") {
          return false;
        }

        // Ensure the commit is authored by me and I'm not just a "committer"
        latestCommit = event.payload.commits
          .reverse()
          .find(commit => commit.author.email === "khalby786@gmail.com");
        return Boolean(latestCommit);
      });

      if (!latestCommit) {
        console.log("No commit!")
        return;
      }

      const {repo, created_at: createdAt} = latestPushEvent;
      const repoUrl = `https://github.com/${repo.name}`;

      this.commitUrl = `${repoUrl}/commit/${latestCommit.sha}`;
      const commitMessageLines = latestCommit.message.trim().split('\n');
      this.commitText = commitMessageLines[0].trim();

      this.repoInfo = createdAt + " in " + "<a style='color:black;' href='" + repoUrl + "'>" + repo.name.replace(new RegExp(`^khalby786/`), '') + "</a>" ;
      
    },
    methods: {
      isInViewport: function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      },
      animate: function() {
        
      }
    },
    created () {
      window.addEventListener('scroll', this.animate);
    },
    destroyed () {
      window.removeEventListener('scroll', this.animate);
    },
  }

</script>

<style>
  
  #repos {
    margin-top: 100px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 50px;
    max-width: 580px;
    margin: auto;
  }
  
  .repo {
    background-color: pink;
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
  
  #git-commit {
    background-color: cyan;
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
    color: black;
  }
  
  #repoinfo {
    font-size: 12px;
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
  
  .language {
    height: 10px;
    width: 10px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }
  
  .languageName {
    vertical-align: middle;
  }

</style>