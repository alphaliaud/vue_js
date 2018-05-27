<template>
  <div>
    <Header></Header>
    <div class="container add-style ">
      <div class="row">
        <div class="col-sm-12 text-center card-style-input">
          <h4>Ajout d'un nouveau Film</h4>
          <form @submit.prevent="onaddMovie">
            <input class="form-style inline" v-model="title" id="title" placeholder="Title">

            <input class="form-style" v-model="year" id="date" placeholder="Date">

            <input class="form-style" v-model="gender" id="genre" placeholder="Gender">

            <input class="form-style" v-model="language" id="langue" placeholder="Language">

            <input class="form-style" v-model="directName" id="realisateur" placeholder="Director">

            <input class="form-style" v-model="directDate" id="dateN" placeholder="Director Date">

            <input class="form-style" v-model="directNat" id="Natio" placeholder="Nation">

            <input class="form-style" v-model="poster" id="poster" placeholder="Poster: URL">

            <button class="btn btn-outline-success mt-3" type="submit"><i class="fas fa-check-circle fa-2x"></i></button>
          </form>
        </div>
        <div class="col-sm-5">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from './Header.vue'

  export default{
    data () {
      return {
        title: '',
        year: '',
        language: '',
        gender: '',
        directName: '',
        directDate: '',
        directNat: '',
        poster: ''
      }
    },
    components: {
        Header
    },
    methods: {
      onaddMovie () {
        const movieData = {
          title: this.title,
          year: this.year,
          language: this.language,
          gender: this.gender,
          directName: this.directName,
          directDate: this.directDate,
          directNat: this.directNat,
          poster: this.poster
        }
        this.$store.dispatch('addMovie', movieData)
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  .add-style{

  }

  input::placeholder{
    color:white;
  }

  form label, form input{
    color:white;
  }

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

  .flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-center{
    text-align: center;
  }

  .card-style-input{
    padding: 30px 30px;
    border-radius:20px;
    border: 1px dashed #90d4ca;

  }

  h4{
    color:white;
    text-transform: uppercase;
    padding: 20px 0;
    margin-bottom: 20px;
    background-color: #90d4ca;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

</style>
