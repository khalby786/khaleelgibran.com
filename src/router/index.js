import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Blog from '../views/AllPosts.vue';
import NotFound from '../views/NotFound.vue';
import BlogEntries from '../statics/blogs.json';

Vue.use(VueRouter)

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => import('../views/Blog.vue'),
    children
  }
})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  ...blogRoutes,
  {
    path: '*',
    name: '404 Not Found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
