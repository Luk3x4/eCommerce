<template>
  <div class="cart">
    <div v-if="checkCart" class="empty">
      <h1 > Cart Is Empty </h1>
      <router-link :to="{ name: 'Home' }"> Products Page </router-link>
    </div>
    <div class="cont-one">
      <TransitionGroup>
        <div class="cart-item" v-for="(item, index) in prArray" :key="index">
          <button @click="deleteItem(index)"> X </button>
          <div class="inner-cont">
            <div class="img-div">
              <img :src="item.img" alt="">
            </div>
            <div class="inner">
              <h1> {{ item.title }} </h1>
              <h3> {{ item.price }} GEL </h3>
              <h3> Amount: {{ item.amount }} </h3>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div> <!-- End of cont-one -->
    <div class="cont-two" v-if="!checkCart">
      <h1> Total Price: {{ displayTotalPrice }} GEL </h1>
      <h2> Product Amount: {{ prArray.length }} </h2>
    </div>
  </div><!-- End of Main Div/Wrapper -->
</template>

<script>
export default {
  data() {
    return{
      prArray: JSON.parse(localStorage.getItem('data')) || []
    }
  },
  computed: {
    displayTotalPrice() {
      let total = 0;
      if(localStorage.getItem('data')){
        this.prArray.forEach(item =>{
          total += item.price
        })
      }
      return total
    },

    checkCart(){
      return this.prArray.length === 0
    }
  },

  methods: {
    deleteItem(index) {
      this.prArray.splice(index, 1);
      localStorage.setItem('data', JSON.stringify(this.prArray))
    }
  },
}
</script>

<style lang="scss" scoped>
*{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
}

    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.3s ease;
    }

    .v-enter-from,
    .v-leave-to {
      display: none;
      opacity: 0;
    }

.cart{
  width: 90%;
  height: 100vh;
  padding: 15px;
  display: flex;
  animation: fade-in 1.2s;
  // padding: 40px;
  @keyframes fade-in{
    0%{transform: translateX(-130px); opacity: 0};
    100%{transfrom: translateX(0); opacity: 1};
  }
  .cont-one{
    padding: 30px;
  }
  .empty{
    margin: auto;
    text-align: center;
    a{
      color: rgb(10, 43, 53);
      // text-decoration: none;
    }
  }
  .cont-two{
    padding: 45px;
    margin-left: 40px;
  }
  &-item{
    margin-top: 10px;
    box-shadow: 0 0 2px black;
    width: 110%;
    border-radius: 3px;
    transition: .5s;
    button{
      border-radius: 50%;
      border: 0;
      outline: 1px solid red;
      font-size: 17px;
      width: 30px;
      height: 30px;
      color: red;
      background: #fff;
      transform: translate(-10px, -10px);
      transition: .5s;
      cursor: pointer;
      &:hover{
        background: red;
        color: #fff;
      }
    }
    .inner-cont{
      display: flex;
      padding: 5px;
      .inner{
        margin: 10px 0 0 10px;
        h1{
          font-size: 25px;
        }
      }
    }
    img{
      width: 120px;
      height: 140px;
    }
  }
}

@media screen and(max-width: 900px){
  *{
    padding: 0 !important;
    margin: 0 !important;
  }
  .cart{
    flex-direction: column;
    padding: 0;
    .empty{
      transform: translateX(25px);
    }
    .cont-two{
      order: -1;
      width: 100%;
      transform: translateX(100px);
      h1{
        font-size: 25px;
      }
    }
    .cont-one{
      // padding: 0px 40px;
      display: flex;
      flex-direction: column;
      transform: translate(70px, 20px);
      .cart-item{
        width: 84%;
        margin-top: 5px !important;
        transform: translateX(-9px)
      }
    }
  }
}
</style>