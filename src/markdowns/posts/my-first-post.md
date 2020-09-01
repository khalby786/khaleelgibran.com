I have a lot of blogs. Yep, and the thing is I like all of 'em. And each one uses a framework like Gatsby or a templating engine like Nunjucks. But it is cool to have your blog within your website. Now, my website is built using Express and Express alone. I don't use any templating engines, it's just Express routes with HTML files. Having a blog within your website (all-in-one-pack) is so awesome. In this post, I'll be showing you how to create your own Markdown blog using EJS and Express!

```bash
mkdir blog
touch index.ejs
touch blog.ejs
```

Then, in your main Node.js script file (mine is `server.js`, most people have their main script at `index.js`), we need to configure the markdown parser, EJS and the `blog` directory. For that, we'll need to install a few packages.

```bash
npm i express ejs markdown-it gray-matter body-parser
```
* `express`, the Node.js framework we're gonna be using
* `ejs`, Embedded JavaScript, gonna make the blog post part easier
* `markdown-it` is the markdown parser that I'm gonna be using.
* `gray-matter` is a package that is gonna help me read the `.md` files better for extra stuff (thanks to Kumar Abhirup for introducing me to this!)

Once we've done that, we need to `require` all our dependencies in `server.js` (or `index.js` or whatever). We'll also be using the `path` module, but we don't need to install it because it is an in-built module.

```js
// body parser
const express = require('express');
const app = express();

// if you have a public dir with static scripts and styles
app.use(express.static('public'));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// path for the ejs folder
const path = require("path");

app.set("views", path.join(__dirname, "blog"));
app.set("view engine", "ejs");

// gray-matter to read the .md files better
const matter = require('gray-matter');
```

Then, we need to define our GET routes for the blog posts.

```js
app.get("/blog/:article", (req, res) => {
  
  // read the markdown file
  const file = matter.read(__dirname + '/blog/' + req.params.article + '.md');
  
  // use markdown-it to convert content to HTML
  var md = require("markdown-it")();
  let content = file.content;
  var result = md.render(content);
  
  res.render("index", {
    post: result,
    title: file.data.title,
    description: file.data.description,
    image: file.data.image
  });
});
```

What is happening here is that whenever a user visits `/blog/article`, the `fs` module looks in the `blog` directory for a `.md` file named `article`. (The URL of the blog post is taken from the file name minus the `.md` part). And the blog post markdown file should be located in the `blog` directory we made at first.

Now, for this to work properly, every blog post markdown file should be in the following format:

```md
---
title: Title Here
description: A nice description of this post
image: A nice image representing the blog post, mainly meant for the <meta> tags
---

Blog post content here
...
```

The format is the reason why I used the `gray-matter` package. And `markdown-it` converts the Markdown stuff to HTML.

Also, we need a GET route to show all our blog posts (`blog.ejs`).

```js
app.get("/blog", (req, res) => {
  const posts = fs.readdirSync(__dirname + '/blog').filter(file => file.endsWith('.md'));
  res.render("blog", {
    posts: posts
  });
});
```

And finally, for our EJS files.
`index.ejs`

```html
<html>
  <body>
    <div id="blog">
      <h1><%= title %></h1>
      <p><%= description %></p>
      <%- post %>
    </div>
  </body>
</html>
```
*NOTE: An EJS variable named `image` (`<%= image %>`) is also available which is the image url mentioned in the blog post markdown file header.*

`blog.ejs`

```html
<html>
  <body>
    <div id="blog">
      <% for (post of posts) { %>
        <a href="/blog/<%= post.slice(0, -3) %>">
          <div class="post">
            <%= post.toUpperCase() %>  
          </div>
        </a>
      <% } %>
    </div>
  </body>
</html>
```

And that's it!

Of course, this is just a basic template for you to use, you can always add more HTML and style using CSS to customize according to your needs!

For a demo, you can see my blog at https://khaleelgibran.com/blog.
Code hosted on Glitch:

{% glitch khaleelgibran code %}

Any questions, tweet me on Twitter or send me an email at khalby786@gmail.com.

Or just ask me in the comments below.
