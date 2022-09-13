<template>
  <div class="cont">
    <navBar />
    <div class="to-center">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import navBar from './components/navBar.vue'

export default{
  components: {
    navBar
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  color: #252525;
}
.cont{
  display: flex;
}

body{
  overflow-x: hidden !important;
  .to-center{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 70px;
  }
}
</style>