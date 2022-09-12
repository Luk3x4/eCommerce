<template>
  <div class="item">
    <div class="inner-content">
        <div class="inner">
            <div class="img-div">
                <img :src="img" alt="">
            </div>
            <div class="info">
                <h1>{{ title }}</h1>
                <h4>{{ price }} GEL</h4>
                <router-link :to="{name: 'ProductDetails', params: { id: id } }">
                    <button> See Details </button>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "shopItem",
    data(){
        return{

        }
    },
    props: {
        img: String,
        title: String,
        price: Number,
        id: Number
    }
}
</script>

<style lang="scss" scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
}

// @media (max-width: 900px){
//     .item{
//         width: 100px;
//         height: 200px;
//         .inner-content{
//             img{
//                 width: 40px;
//             }
//         }
//     }
// }

.item{
    width: 280px;
    height: 320px;
    box-shadow: 0 0 2px black;
    border-radius: 3px;
    margin: 5px 5px 0 0;
    display: flex;
    justify-content: center;
    .inner-content{
        width: 90%;
        .img-div{
            border-radius: 3px;
            box-shadow: 0 0 1px black;
            img{
                display: block;
                margin: 10px auto;
                width: 120px;
                height: 140px;
            }
        }
        h1{
            font-size: 25px;
        }
        h4{
            margin-top: 10px;
        }
        button{
            background: #0A2B35;
            width: 100%;
            color: white;
            border-radius: 3px;
            height: 40px;
            margin-top: 20px;
            cursor: pointer;
            font-size: 20px;
            transition: .5s;
            border: 0;
            &:hover{
                background: #1a3d47;
            }
        }
    }
}
</style>