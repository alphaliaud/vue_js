<template>
  <div>
    <Header></Header>
    <div class="container text-center">
      <h4>Film</h4>
      <div>
        <input class="form-style" v-model="movie.title" id="titre">
        <input class="form-style" v-model="movie.year" id="annee">
        <input class="form-style" v-model="movie.gender" id="genre">
        <input class="form-style" v-model="movie.language" id="langue">
        <input class="form-style" v-model="movie.poster" id="poster">
      </div>
      <h4>Director</h4>
      <div>
          <input class="form-style" v-model="movie.directName" id="realNom">
          <input class="form-style" v-model="movie.directDate" id="dateN">
          <input class="form-style" v-model="movie.directNat" id="natio">
      </div>
      <router-link :to="{ name:'Movies'}" class="text-center"><button class="btn btn-outline-success" v-on:click="editMovie"><i class="fas fa-check-circle fa-2x"></i></button></router-link>
    </div>
  </div>
</template>
<script>
  import Header from './Header.vue'

  export default {
    data: function () {
      return {
        movie: this.$route.params.movie
      }
    },
    components: {
        Header
    },
    methods: {

      editMovie: function () {
        var movieM = this.movie
        this.$store.commit('editMovie', { movie: movieM })
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .form-style{
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    background-color: transparent;
    margin: 10px 0;
  }

  input::placeholder{
    color:#90d4ca;
  }

  h4{
    color:white;
    margin: 20px 0;
    background-color: #90d4ca;
    padding: 10px 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .text-center{
    text-align: center;
  }

</style>
