<template>
  <div class="chatRecord">
    <div :class="direction()">
      <div class="head clear" v-if="show">
        <slot name="head"></slot>
      </div>
      <div class="text clear">
        <div class="border" v-if="show"></div>
        <table>
          <slot name="system"></slot>
        </table>
        <slot name="text"></slot>
        <slot name="emoji"></slot>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'ChatRecord',
  props: {
    sendDirection: {
      type: String
    }
  },
  methods: {
    direction() {
      if (this.sendDirection == 'left') {
        return {left: true, clear: true}
      } else if (this.sendDirection == 'right') {
        return {right: true, clear: true}
      } else {
        this.show = false
        return {center: true, clear: true}
      }
    }
  },
  data() {
    return {
      show: true   
    }
  }
}
</script>

<style lang="less" scoped>
  .chatRecord {
    width: 100%;
    margin: 10px 0;
  }
  .head {
    img {
      width: 50px;
      height: 50px;
    }
  }
  .text {

    border-radius: 10px;
    p {
      line-height: 50px;
      font-size: 20px;
      font-family: 'Segoe UI';
      padding: 0 10px;
    }
  }
  .left {
    div {
      float: left; 
    }
    .text {
      position: relative;
      margin-left: 20px;
      background-color: #fff;
      color: #000000;
      div {
        width: 0;
        height: 0;
        
        border: 8px solid;
        border-color: #f8f8f8 #ffffff #f8f8f8 #f8f8f8;

        position: absolute;
        left: -16px;
        top: 15px;
      }
      img {
        max-width: 500px;
        margin: 8px;
        border-radius: 5px;
      }
    }

  }
  .right {
    div {
      float: right;
    }
    .text {
      position: relative;
      margin-right: 20px;
      background-color: #12B7F5;
      color: #ffffff;
      div {
        width: 0;
        height: 0;
        border: 8px solid;
        border-color: #f8f8f8 #f8f8f8 #f8f8f8 #12B7F5;
        position: absolute;
        right: -16px;
        top: 15px;
      }
      img {
        max-width: 500px;
        margin: 8px;
        border-radius: 5px;
      }
    }
  }
  .center {
    .text {
      text-align: center;
      table {
        margin: 0 auto;
        p {
          background-color: rgb(214, 215, 216);
          color: rgb(119, 119, 119);
          font-size: 16px;
          line-height: normal;
          border-radius: 10px;
        }
      }
    }
  }
</style>
