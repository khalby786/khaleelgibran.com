<!-- <p style="font-family: var(--mono);">Hi, I'm</p> -->
<h1>Khaleel Gibran</h1>

<section id="description">
  <p>
    I love <b>donuts</b> and <b>robots</b>, and I make weird and often
    <i>useless</i>
    web-related stuff on the internet. I like messing with technology, making
    <a
      href="https://github.com/khalby786"
      target="_blank"
      rel="noopener noreferrer">websites</a
    >
    and playing around with
    <a
      href="https://github.com/khalby786"
      target="_blank"
      rel="noopener noreferrer">code</a
    >.
  </p>

  <br />
  <nav>
    You can skip ahead to <a href="#projects">browsing the stuff I've made</a>,
    <a href="#socials">get in touch with me</a>,
    <a href="https://blog.khaleelgibran.com" target="_blank">read my blog</a>
    or
    <a href="https://scrapbook.hackclub.com/khalby786" target="_blank"
      >visit my scrapbook!</a
    >
  </nav>

  <br />
  <br />

  <hr />

  <br />
  <br />

  <ul class="fax">
    <li>
      Although I'm more of a front-end guy with Vue, I love using Node; been
      getting gud at TypeScript and learning Rust. I'm all for trying out new
      stuff and learning new things. For example, this website is made with a
      combination of Svelte and Vue - made possible by <a
        href="https://astro.build/"
        target="_blank"
        rel="noopener noreferrer">Astro</a
      >.
    </li>
    <li>
      I like donuts. Like a lot lot, as some of you who've known me can probably
      tell. I extremely love donuts.
    </li>
    <li>
      I <i>try</i> to create
      <a
        href="https://art.khaleelgiban.com"
        target="_blank"
        rel="noopener noreferrer">3D art</a
      >
      when I'm not doing other <i>stuff</i>.
    </li>
    <li>
      I've <strike>recently</strike> started writing stuff online on a blog -
      you can check it out
      <a
        href="https://blog.khaleelgibran.com"
        target="_blank"
        rel="noopener noreferrer">here</a
      >.
    </li>
    <li>
      My preferred way of "chilling" is Spotify. The phrase needs to be "Spotify
      and chill"! &lt;3
    </li>
    <li>
      i use <a
        href="https://archcraft.io/"
        target="_blank"
        rel="noopener noreferrer">Archcraft</a
      >, btw.
      <br /><br />
      <img src="/assets/archcraft.png" alt="archcraft" />
    </li>
  </ul>
</section>

<style>
  p {
    color: gray;
    margin-bottom: 0px;
    font-family: var(--sans-serif);
  }

  b {
    background: rgb(0, 192, 255);
    background: linear-gradient(
      86deg,
      rgba(0, 192, 255, 1) 0%,
      rgba(159, 0, 255, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  b::selection {
    -webkit-text-fill-color: #fff;
    color: #fff;
    background: var(--selection);
  }

  h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    opacity: 1;
    transition: 200ms;
    font-size: 2em;
    padding: 0px;
    font-family: "Hack", "Fira Code", "Fira Mono", "IBM Plex Mono", "Menlo",
      "Consolas", monospace;
    background: -webkit-linear-gradient(
      180deg,
      rgba(253, 0, 255, 1) 0%,
      rgba(151, 0, 255, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1::selection {
    -webkit-text-fill-color: #fff;
    color: #fff;
    background: var(--selection);
  }

  #description > p {
    color: var(--foreground);
    line-height: 1.5;
  }

  #description {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 600px) {
    #description > p {
      font-size: 18px;
    }

    h1 {
      font-size: 1.5em;
    }
  }

  li:before {
    content: none;
    padding-right: 10px;
    color: var(--gray);
    font-family: "Hack", "Fira Code", "Fira Mono", "IBM Plex Mono", "Menlo",
      "Consolas", monospace;
  }

  hr {
    border: none;
    margin: none;
    box-shadow: none;
    border-top: 1px solid var(--foreground);
  }

  nav a {
    color: var(--gray);
    font-family: "Hack", "Fira Code", "Fira Mono", "IBM Plex Mono", "Menlo",
      "Consolas", monospace;
    text-transform: uppercase;
  }
</style>
