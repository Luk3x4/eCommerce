import { createWebHistory, createRouter } from "vue-router";
import Products from './components/productsPage.vue';
import Cart from './components/shoppingCart.vue'
import prDetail from './components/productDetails.vue'

const routes = [
    {
        name: "Home",
        component: Products,
        path: '/'
    },

    {
        name: "Cart",
        component: Cart,
        path: '/cart'
    },

    {
        name: "ProductDetails",
        path: '/:id',
        component: prDetail
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router