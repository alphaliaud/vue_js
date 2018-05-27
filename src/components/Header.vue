<template>
  <header class="vh-15">
    <nav class="flex">
      <img src="../assets/moovie.svg">
      <ul class="w-full">
        <li class="add-moovie float-r"><router-link :to="{ name: 'MovieAdd' }">+ Add Moovie</router-link></li>
        <li class="btn-moovie float-r"><router-link :to="{ name: 'Movies' }">Moovies</router-link></li>
        <li class="btn-moovie float-r"><router-link :to="{ name: 'MovieSearch' }">Search</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>

  export default{

  }

</script>

<style scoped>
  .vh-15{
    height: 15vh;
  }

  .flex{
    display: flex;
  }

  .flex img{
    height: 70px;
    width: auto;
  }

  .w-full{
    width: 100%;
  }

  nav {
    padding: 20px 20px;
  }

  nav ul{
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  nav ul li:nth-child(1){
    order: 2;
  }

  nav ul li:nth-child(2){
    order: 1;
  }

  .btn-moovie{
    margin: 0px 50px;

  }

  .btn-moovie a{
    text-decoration: none;
    color: white;
  }

  .add-moovie{
    background-color: transparent;
    padding: 5px 10px;
    border: 1px solid #90d4ca;
    border-radius: 20px;
    transition: 0.5s all;
  }

  .add-moovie a{
    text-decoration: none;
    color: white;
  }

  .add-moovie:hover{
    background-color: #90d4ca;

  }

  .float-r{
    float: right;
  }

</style>
