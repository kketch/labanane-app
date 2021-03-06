import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home'
import playlist from '@/pages/playlist'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '',
      component: home
    },
    {
      name: 'playlist',
      path: '/playlist/:playlistId/:trackId?',
      props: true,
      component: playlist
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ]
})
