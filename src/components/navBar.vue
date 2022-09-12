<template>
  <div :class="isExpanded?'sidebar expanded': 'sidebar'">
    <div class="inner">
        <img src="../assets/logo.png" width="35" height="35">
        <span class="material-symbols-outlined" id="expander" @click="expandSideBar">arrow_right_alt</span>
        <div class="links">
            <router-link to="/" @click="shrinkSidebar">
                <div class="item">
                    <span class="material-symbols-outlined">shopping_bag</span>
                    <span class="link-text" v-show="isExpanded"> Products </span>
                </div>
            </router-link>
            <router-link :to="{ name: 'Cart' }" @click="shrinkSidebar">
                <div class="notification">{{ amount }}</div>
                <div class="item">
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <span class="link-text" v-show="isExpanded"> Cart </span>
                </div>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "navBar",
    data() { 
        return{
            isExpanded: false,
        }
    },
    methods: {
        expandSideBar() {
            this.isExpanded = !this.isExpanded
        },
        shrinkSidebar() {
            this.isExpanded = false;
        }
    },
    computed: {
        amount() {
            return JSON.parse(localStorage.getItem('data')).length
        }
    }
}
</script>

<style lang="scss" scoped>
$expanderSize: 40px;
$expandedSideBarSize: 190px;
@mixin addMargin{
    margin-left: 7px;
}
.sidebar{
    background: rgb(10, 43, 53);
    width: 50px;
    height: 100vh;
    display: flex;
    transition: .5s;
    position: fixed;
    z-index: 9;
    .inner{
        width: 35px;
        a{
            text-decoration: none;

        }
        .router-link-exact-active .item{
            border-left: 3px solid green;
            width: 45px;
        }
        .notification{
            border-radius: 50%;
            background: red;
            color: white;
            font-size: 17px;
            width: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 20px;
            transform: translateY(20px);
            font-family: Arial, Helvetica, sans-serif
        }
        .item{
            display: flex;
            align-items: center;
            width: 46px;
            height: 40px;
            margin-top: 10px;
            transition: .5s;
            &:hover{
                background: #1a3d47;
            }
            .link-text{
                font-size: 20px;
                font-family: Arial, Helvetica, sans-serif;
                margin-left: 15px;
            }
            span{
                margin-bottom: 10px;
            }
        }
        span{
            color: white;
            font-size: 30px;
            cursor: pointer;
            @include addMargin;
            transition: .5s;
        }
        img{
            margin-top: 10px;
            @include addMargin;
        }
        .links{
            margin-top: 60px;
            span{
                margin-top: 10px;
            }
        }
    }
    &.expanded{
        width: $expandedSideBarSize;
        #expander{
            transform: translate(135px, -40px)
             rotateZ(180deg);
        }
        .item{
            width: 189px;
            height: 40px;
        }
        .router-link-exact-active .item{
            width: 186px;
        }
    }
}

@media screen and(max-width: 900px){
    .sidebar{
        position: fixed;
    }
}
</style>