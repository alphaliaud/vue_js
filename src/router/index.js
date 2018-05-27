import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/Movies'
import Movie from '@/components/Movie'
import MovieEdit from '@/components/MovieEdit'
import MovieAdd from '@/components/MovieAdd'
import MovieSearch from '@/components/MovieSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/Movie/:id',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/Movie/:id/edit',
      name: 'MovieEdit',
      component: MovieEdit
    },
    {
      path: '/Add',
      name: 'MovieAdd',
      component: MovieAdd
    },
    {
      path: '/Search',
      name: 'MovieSearch',
      component: MovieSearch
    }
  ]
})
