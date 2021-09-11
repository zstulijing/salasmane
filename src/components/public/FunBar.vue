<template>
  <div class="funbar">
    <div class="photo clear">
      <img :src="getIMG(profile.profileImg)" alt="">
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
  name: 'FunBar',
  data() {
    return {
      profile: this.$store.state.profile
    }
  },
  methods: {
    getIMG(filename) {
      return 'http://l423145x35.oicp.vip/file/' + filename
    }
  }
}
</script>

<style lang="less" scoped>

  @navBarHeight: 40px;
  @funBarWidth: 60px;

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
    padding: 0 10px;
    margin: 20px 0 ;
    img {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      float: left;
    }
  }

  .fun {
    padding: 0 20px;
    li {
      margin: 20px 0;
      float: left;
      img {
        width: 20px;
      }
    }

  }  
</style>
