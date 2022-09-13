<template>
  <div class="prDetail">
    <div class="inner-details">
        <h2 v-html="navigator" @click="goBack"></h2>
        <div class="img">
            <img :src="prData.img" alt="">
        </div>
        <h1> {{ prData.title }}</h1>
        <h3> {{ prData.price }} GEL</h3>
        <h3> Total: {{ prData.price * counter}} GEL</h3>
        <div class="amount-control">
            <button @click="decrement"> - </button>
            <h1> {{ counter }}</h1>
            <button @click="increment"> + </button>
        </div>
        <button @click="addToCart">Add To Cart</button>
    </div>
  </div>
</template>

<script>
import productsData from '../assets/products.json'

export default {
    name: 'ProductDetails',
    data(){
        return{
            prData: productsData[this.$route.params.id - 1],
            counter: 0,
            navigator: '&lt Back',
            priceAmount: 0,
            prArray: [], 
        }
    },
    computed: {
    },

    methods: {
        decrement() {
            if(this.counter === 0){
                return
            }
            return this.counter--
        },
        
        increment() {
            return this.counter++
        },
        goBack() {
            this.$router.go(-1);
        },
        addToCart() {
            if(this.counter === 0) return;
            if(localStorage.getItem('data')){
                this.prArray = JSON.parse(localStorage.getItem('data'))
                this.prArray.push({title: this.prData.title, img: this.prData.img, id:this.prData.id, amount: this.counter, price: this.counter * this.prData.price});
                localStorage.setItem('data', JSON.stringify(this.prArray));
            }else{
                this.prArray = [{title: this.prData.title, img: this.prData.img, id:this.prData.id, amount: this.counter, price: this.counter * this.prData.price}]
                localStorage.setItem('data', JSON.stringify(this.prArray));
            }
            window.location.reload()
        }
    },
}
</script>

<style lang="scss" scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
}

.prDetail{
    // box-shadow: 0 0 2px black;
    margin-left: -70px !important;
    width: 90%;
    display: flex;
    justify-content: center;
    border: 0;
    border-radius: 5px;
    height: 95%;
    h2{
        margin-top: -10px;
        // transform: translateY(-20px);
        transition: .5s;

        &:hover{
            cursor: pointer;
            color: #303030;
        }
    }
    .inner-details{
        width: 85%;
        margin-top: 70px;
        h3{
            margin-top: 5px;
        }
        h1{
            margin-top: 5px;
        }
        .amount-control{
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                width: 30px;
                height: 30px;
                margin: 10px;
            }
        }
        .img{
            box-shadow: 0 0 2px black;
            border: 0;
            border-radius: 5px;
            width: 100%;
            height: 390px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 270px;
                height: 340px;
                // display: block;
                // margin: auto
            }
        }
        button{
            width: 100%;
            border: 0;
            outline: none;
            border-radius: 5px;
            background: #0A2B35;
            height: 40px;
            transition: .5s;
            color: white;
            font-size: 20px;
            cursor: pointer;
            &:hover{
                background: #1a3d47;
            }
        }
    }
}

@media screen and(max-width: 900px){
    .prDetail{
        .inner-details{
            transform: translateX(20px);
        }
    }
}
</style>