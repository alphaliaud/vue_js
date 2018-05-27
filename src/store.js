import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    loadeMovies: [
      {
        id: 0,
        title: 'Solo',
        year: 2018,
        language: 'Anglais',
        directName: 'Ron Howard',
        directDate: 1954,
        directNat: 'USA',
        gender: ' Action',
        poster: 'https://www.starwars-universe.com/images/actualites/solo/affiche_br4.jpg',
        notes: []
      },

      {
        id: 1,
        title: 'Infinity War',
        year: 2018,
        language: 'Anglais',
        directName: 'Anthony Russo',
        directDate: 1970,
        directNat: 'USA',
        gender: 'Action',
        poster: 'http://www.joblo.com/posters/images/full/avengers-imax-main-large.jpg',
        notes: []

      },
      {
        id: 2,
        title: 'Fight Club',
        year: 1999,
        language: 'Anglais',
        directName: 'David Fincher',
        directDate: 1962,
        directNat: 'USA',
        gender: 'Drama',
        poster: 'http://www.squarepig.in/wp-content/uploads/2017/10/fightcl-11.jpg',
        notes: []

      }
    ]
  },
  getters: {
    // Getter tous les films
    getMovies (state) {
      return state.loadeMovies
    },
    // Getter film avec id
    getMovieById (state) {
      return (movieId) => {
        return state.loadeMovies.find((movie) => {
          return movie.id === movieId
        })
      }
    },
    // Getter film avec name
    getMovieBySearch: state => text => {
      var movies = []
      for (var i = 0; i < state.loadeMovies.length; i++) {
        if (state.loadeMovies[i].title.includes(text)) {
          movies.push(state.loadeMovies[i])
        }
      }
      return movies
    },
    // Getter film et moyenne
    getNoteByMovieId: (state) => (id) => {
      var movie = state.loadeMovies.find(movies => movies.id === id)
      if (movie.notes.length === 0) {
        return null
      } else {
        var sum = 0
        for (var i = 0; i < movie.notes.length; i++) {
          sum += parseInt(movie.notes[i], 10)
        }
        return sum / movie.notes.length
      }
    }
  },
  mutations: {
    editMovie (state, movie) {
      var film = state.loadeMovies.find(loadeMovies => loadeMovies.id === movie.id)
      film.title = movie.title
      film.year = movie.year
      film.language = movie.language
      film.directName = movie.directName
      film.directNat = movie.directNat
      film.directDate = movie.directDate
      film.gender = movie.gender
      film.poster = movie.poster
    },
    addMovie (state, payload) {
      state.loadeMovies.push(payload)
    },
    addNote (state, payload) {
      const movie = payload.movie
      movie.notes.push(payload.note)
    },
    delMovie (state, payload) {
      var removeIndex = state.loadeMovies.map(function (item) {
        return item.id
      }).indexOf(payload)
      state.loadeMovies.splice(removeIndex, 1)
    }
  },
  actions: {
    addMovie ({commit}, payload) {
      const movie = {
        id: this.state.loadeMovies[this.state.loadeMovies.length - 1].id + 1,
        title: payload.title,
        year: payload.year,
        language: payload.language,
        gender: payload.gender,
        directName: payload.directName,
        directDate: payload.directDate,
        directNat: payload.directNat,
        poster: payload.poster,
        notes: []
      }
      commit('addMovie', movie)
    },
    addNote ({commit}, payload) {
      const movieToNote = this.state.loadeMovies.find(movies => movies.id === payload.id)
      commit('addNote', {movie: movieToNote, note: payload.note})
    }
    ,
    delMovie ({ commit }, payload) {
      commit('delMovie', payload.id)
    }
  }
})


