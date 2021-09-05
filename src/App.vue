<template>
  <div id="app">
    
    <nav-bar></nav-bar>
    
    <div class="contentArea">
      <fun-bar></fun-bar>
      <Content></Content>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/public/NavBar.vue'
import FunBar from 'components/public/FunBar.vue'
import Content from 'components/public/Content.vue'


export default {
  name: 'App',
  components: {
    FunBar,
    NavBar,
    Content
  }
}
</script>


<style lang="less">
  @import 'assets/css/normal.css';
  @import 'assets/css/reset.css';

</style>
