<template>
  <div class="main">
    <input type="text" name="" id="" placeholder="Search..." v-model="query">
    <div class="container">
        <div v-if="filterData.length == 0" class="alert">
          <h1> Item Not Found </h1>
        </div>
      <TransitionGroup>
        <shopItem v-for="(item, index) in filterData" :img="item.img" :title="item.title" :id="item.id" :key="index" :price="item.price"/>
      </TransitionGroup>
      <Transition>
      </Transition>
    </div>
  </div>
</template>

<script>
import shopItem from './shopItem.vue'
import prData from '../assets/products.json'

export default {
  name: 'productsPage',
  components: {
    shopItem,
  },
  data(){
    return{
      productsData: prData,
      query: "",
    }
  },

  computed: {
    filterData() {
      return this.productsData.filter(item => item.title.toLowerCase().includes(this.query))
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
*{
  box-sizing: border-box;
}
.main{
  box-sizing: border-box;
  animation: fade-in 1.2s;
  // margin-top: 40px;
  // border: 1px solid red;
  width: 845px;
  @keyframes fade-in{
    0%{margin-left: -130px; opacity: .1};
    100%{margin-left: 0; opacity: 1};
  }
  input[type="text"]{
    width: 100.5%;
    height: 30px;
    outline: none;
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 20px;
    border-radius: 3px;
    border: 0;
    box-shadow: 0 0 2px black;
  }
  .container{
    display: flex;
    width: 890px;
    box-sizing: border-box;
    height: 650px;
    // justify-content: space-around;
    flex-wrap: wrap;
    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.3s ease;
    }

    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
    .alert{
      width: 100%;
      display: flex;
      justify-content: center;
      h1{
        color: red;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        transform: translateY(30px);
        transition: .5s;
      }
    }
  }
}
  @media screen and(max-width: 900px){
    .main{
      width: 300px;
      transform: translate(20px, -55px);
      input{
        width: 93% !important;
        display: block;
        margin: auto;
        box-sizing: border-box;
        transform: translateX(-2px)
      }
      .container{
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        width: 300px;
      }
    }
  }
</style>