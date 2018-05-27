<template>
  <div class="">
    <Header></Header>
    <div class="row">
      <div class="col-sm-5">
        <img class="card-img-top vh-85" style="width: auto" :src="movie.poster" alt="Card image cap">
      </div>
      <div class="col-sm-7 ">
        <div class="title-flow flex-center">
          <h2>  {{ quote }}</h2>
          <h1>  {{ movie.title }}</h1>
          <router-link class="btn-edit" :to="{ name:'MovieEdit', params:{ movie: this.movie }}"><i class="far fa-edit fa-lg"></i></router-link>
          <button class="btn-ben" v-on:click="delMovie"><i class="far fa-trash-alt fa-lg"></i></button>
        </div>
        <div class="moovie-info ">
          <div class="moovie-state flex-center">
            <p>{{ movie.year }}</p>
            <p>{{ movie.directName }}</p>
          </div>

          <div class="card-tag flex-center">
            <p>{{ movie.gender }}</p>
            <p>{{ movie.language }}</p>
          </div>
        </div>
        <div class="row flex-center">
          <div v-if="quote" class="">
            <form @submit.prevent="addNote" class="flex-align">
              <select class="select-style" v-model="selected">
              <option disabled value="">Selectionnez une note</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
              <button class="btn-sub inline-b" type='submit'><i class="fas fa-check-circle fa-2x"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-new */

  import Header from './Header.vue'

  export default {
      components:{
        Header
      },
    computed: {
      movie () {
        //Recupération du film sur le store, grâce à l'id dans l'url
        return this.$store.getters.getMovieById(this.$route.params.id)
      },
      quote () {
        var quote = this.$store.getters.getNoteByMovieId(this.$route.params.id)
        if (quote == null) {
          return 'Ø'
        } else {
          return quote
        }
      },
    },
    methods: {
      delMovie: function () {
        this.$store.dispatch('delMovie', {id: this.$route.params.id})
        this.$router.push('/')
      },
      addNote: function () {
        const quote = this.selected
        this.$store.dispatch('addNote', {id: this.$route.params.id, note: quote})
      }
    }
  }
</script>
<style>

  .select-style{
    background-color: transparent;
  }

  .inline-b{
    display: inline-block;
  }

  .vh-85{
    height: 85vh;
  }
  .moovie-info{
    color:white;
  }

  .moovie-state{
    margin: 30px 0;
  }
  .moovie-state p{
    display: inline-block;
    margin: 0 10px;
  }


  .title-flow{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .title-flow button{
    justify-content: flex-end;
  }

  .title-flow h1{
    display: inline-block;
    color:white;
    text-transform: uppercase;
    margin: 0 10px;
  }
  .title-flow h2{
    display: inline-block;
    color:white;
    text-transform: uppercase;
    margin: 0 10px;
    background-color: #90d4ca;
    padding: 0px 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .title-flow:only-child{
    display: inline-block;
  }

  .textalign-center{
    text-align: center;
  }

  .btn-sub{
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition:0.5s all;

  }

  .btn-sub i{
    color: #28a745;
    transition:0.5s all;
  }

  .btn-sub:hover i{
    color: #134F21;
  }

  .btn-edit{
    color:#007bff;
    transition: 0.5s all;
  }

  .btn-edit:hover{
    transform: rotate(10deg);
  }

  .btn-ben{
    color:#dc3545;
    background-color: transparent;
    border: none;
    transition: 0.5s all;
    cursor: pointer;
  }

  .btn-ben:hover{
    transform: rotate(10deg);
  }

  .card-tag p{
    color:white;
    font-size:17px;
    display: inline-block;
    background-color: #90d4ca;
    border-radius: 10px;
    padding: 5px 15px;
  }

  .flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-align{
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }


</style>
