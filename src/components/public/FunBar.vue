<template>
  <div class="funbar">
    <div class="photo clear">
      <img src="~assets/img/salesman/salesman.png" alt="">
    </div>
    <div class="fun clear">
      <ul>
        <li><img src="~assets/img/funbar/message.png" alt=""></li>
        <li><img src="~assets/img/funbar/contacts.png" alt=""></li>
        <li><img src="~assets/img/funbar/document.png" alt=""></li>
        <li><img src="~assets/img/funbar/collection.png" alt=""></li>
        <li><img src="~assets/img/funbar/setting.png" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FunBar'
}
</script>

<style lang="less" scoped>

  @navBarHeight: 60px;
  @funBarWidth: 80px;

  .funbar {
    width: @funBarWidth;
    height: 100%;
    position: fixed;
    left: 0;
    top: @navBarHeight;
    z-index: 9;
    background-color: #3875C5;
  }

  .photo {
    padding: 0 15px;
    margin: 20px 0 ;
    img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      float: left;
    }
  }

  .fun {
    padding: 0 25px;
    li {
      margin: 20px 0;
      float: left;
      img {
        width: 30px;
      }
    }

  }  
</style>
