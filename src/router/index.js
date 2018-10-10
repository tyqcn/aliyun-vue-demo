import Vue from 'vue'
import Router from 'vue-router'
import Nav1 from '@/components/Nav1'
import Nav2 from '@/components/Nav2'
import Nav3 from '@/components/Nav3'

Vue.use(Router)

const routes = [
    {
      path: '*',
      component: Nav1,
      meta: {
        rootPage: "nav1"
      }
    },
    {
      path: '/',
      component: Nav1,
      meta: {
        rootPage: "nav1"
      }
    },
    {
      path: '/nav1',
      component: Nav1,
      meta: {
        rootPage: "nav1"
      }
    },
    {
      path: '/nav2',
      component: Nav2,
      meta: {
        rootPage: "nav2"
      }
    },
    {
      path: '/nav3',
      component: Nav3,
      meta: {
        rootPage: "nav3"
      }
    }
  ]

const router = new Router({
  mode:"history",
  routes: routes
});

import store from "../store/index"

router.beforeEach((to, from, next) => {
  let meta = to.meta;
  if(meta.rootPage){
    store.commit('router/setRootPage', meta.rootPage);
  }

  next();
});

export default router
