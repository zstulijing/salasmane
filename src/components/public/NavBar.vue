<template>
  <div id="bar">
    <div class="logo">
      <img src="~assets/img/narbar/logo.png" alt="">
      <p>信易萃学</p>
    </div>
    <div class="personal">
      <img src="~assets/img/salesman/salesman.png" alt="">
      <p>业务人员</p>
    </div>
    <div class="icon">
      <img src="~assets/img/narbar/search.png" alt="">
      <img src="~assets/img/narbar/message.png" alt="">
      <img src="~assets/img/narbar/notice.png" alt="">
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="less" scoped>

  @navBarHeight: 40px;
  
  #bar {
    z-index: 10;
    position: fixed;
    background-color: #fff;
    width: 100%;
    height: @navBarHeight;
    top: 0px;
  }
  .logo {
    float: left;
    p {
      float: left;
      font-family: Microsoft YaHei;
      font-size: 20px;
      line-height: 40px;
      color: #3C3F41;
    }
    img {
      float: left;
      width: 20px;
      border: 1px solid #7070702f;
      margin: 9px 40px;
      border-radius: 5px;
    }
  }
  .icon {
    float: right;
    margin: 10px 0;
    img {
      height: 20px;
      margin-right: 20px;
    }
  }
  .personal {
    float: right;
    
    img {
      margin: 7px 0;
      float: left;
      width: 25px;
      border-radius: 5px;
    }
    p {
      margin: 10px 0;
      float: left;
      line-height: 20px;
      color: #575C5F;
      font-size: 16px;
      font-family: Microsoft YaHei;
    }
  }
</style>
