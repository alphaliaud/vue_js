<template>
  <div>
    <Header></Header>
    <div class="container">
      <nav class="w-full text-center">
        <form @submit.prevent="searchM" style="display: flex;justify-content: space-around;">
          <input v-model="title" id="titre" class="form-style" type="search" placeholder="Titre" >
          <button class="btn-valid" type="submit"><i class="fas fa-check-circle fa-2x"></i></button>
        </form>
      </nav>

      <div class="w-full  bottom absolute" style="height: auto">
        <div class="film" v-for="movie in tab" v-bind:key="movie.id">
          <div class="card-main">
            <div class="relative card-img-dim">
              <img :src="movie.poster">
              <div class="card-btn-1 absolute flexcenter">
                <i class="far fa-edit fa-lg icon-style-1"></i>
              </div>
              <div class="card-btn-2 absolute flexcenter icon-style-2">
                <button class="btn-ben" v-on:click="deleteMovie({movie})"><i class="far fa-trash-alt fa-lg"></i></button>
              </div>
            </div>

            <p class="card-title">{{movie.title}}</p>
            <p class="card-author">{{movie.directName}}</p>
            <p class="card-author">{{movie.directDate}} - {{movie.directNat}}</p>
            <p class="card-tag">{{movie.year}}</p>
            <p class="card-tag">{{movie.gender}}</p>
            <p class="card-tag">{{movie.language}}</p>

          </div>
          <div class="">
            <router-link class="flex-center film-view"  :to="{ name:'Movie', params:{ id: movie.id }}"><i class="far fa-eye"></i></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
  import Header from './Header.vue'
  export default {
    data () {
      return {
        title: '',
        tab: []
      }
    },
    components:{
        Header
    },
    computed: {
      searchM () {
        var result = this.$store.getters.getMovieBySearch(this.title)
        if (result.length > 0) {
          this.tab = result
          return result
        } else {
          return null
        }
      }
    }
  }
</script>

<style>
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
    border-radius: 20px;
    background-color: transparent;
    margin: 10px 0;
  }

  input:focus {
    outline:  none;
  }

  input::placeholder{
    color: white;
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


  .film{
    list-style:none;
    margin-left:0;
    padding-left:0;
    display: inline-block;
    height: 500px;
    margin: 0 30px;
  }

  .card-main{
    height: auto;
    width: 200px;
    /*background-color: #2C2C3C;*/
    transition: 0.5s all;
  }

  .card-list{
    width: 99%;
    padding: 0;
  }

  .card-main:hover div img{
    transform: scale(1.05);
  }

  .card-btn-1:hover, .card-btn-2:hover{
    background-color: black;
    opacity: 0.5;
  }

  .card-btn-1:hover .icon-style-1{
    opacity: 1;
  }

  .card-btn-2:hover .icon-style-2{
    opacity: 1;
  }

  .card-main div img{
    height: 300px;
    width: 200px;
    border-radius: 10px;
    transition: 0.5s all;
  }

  .card-img-dim{
    height: 300px;
    width: 200px;
  }

  .card-btn-1, .card-btn-2{
    height: 315px;
    width: 105px;
    background-color: transparent;
    transition: all 0.5s;
    z-index: 1;
  }

  .card-btn-1{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    top:-8px;
    left: -5px;
  }

  .card-btn-2{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    top:-8px;
    right: -5px;
  }


  .card-title{
    color:white;
    font-weight: bold;
    font-size: 20px;
    margin:10px 5px 0px 0px;

  }

  .card-author{
    color:white;
    font-size: 18px;
    margin:5px 0;
  }

  .card-tag{
    color:white;
    font-size:12px;
    display: inline-block;
    background-color: #90d4ca;
    border-radius: 10px;
    padding: 3px 3px;
  }

  .inline-block{
    display: inline-block;
  }
  .relative{
    position: relative;
  }

  .absolute{
    position: absolute;
  }

  .flexcenter{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-style-1{
    color:white;
    opacity: 0;
    transition: 0.5s all;
    z-index: -1;
  }

  .icon-style-2{
    color:white;
    opacity: 0;
    transition: 0.5s all;
    z-index: 2;
  }

  .w-full{
    width: 100%;
  }

  .overflow-h{
    overflow: hidden;
  }

  .bottom{
    bottom:0;
  }

  .top{
    top:0;
  }

  .flex-center{
    display: flex;
    justify-content: center;
  }

  .film-view{
    color:white;
    text-decoration: none;
    font-size: 20px;
    transition: all 0.5s;
    margin: 10px 0;
  }

  .film-view:hover{
    color: #299b81;
    margin: 20px 0;
  }

  .btn-ben{
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .btn-ben i{
    color: white;
  }

  .btn-valid {
    border: none;
    background-color: transparent;
    color: #28a745;
    cursor: pointer;
    transition: 0.5s all;
  }

  .btn-valid i{
    transition: 0.5s all;
  }

  .btn-valid:hover i{
    color:#134F21;
  }

</style>
