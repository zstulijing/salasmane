<template>
  <div class="sessionList">
    <div class="search clearfix clear">
      <input type="text" name="search" placeholder="搜索" @keyup.enter="submit(search)" v-model="search">
    </div>
    <div class="list clearfix clear">
      <div class="button clear">
        <button @click="choose(0)" :class="isActive(0)">全部会话</button>
        <button @click="choose(1)" :class="isActive(1)">好友</button>
        <button @click="choose(2)" :class="isActive(2)">客服</button>
        <button @click="choose(3)" :class="isActive(3)">群聊</button>
      </div>
      <div class="session">
        <div v-if="show[0]">

        </div>
        <div v-else-if="show[1]">
          <div class="" v-for="(item, index) in sessionList" :key="index">
            <img src="" alt="">
            <p>{{item.title}}</p>
            <p>{{item.lastInf}}</p>
            <p>{{item.time}}</p>
          </div>
        </div>
        <div v-else-if="show[2]">

        </div>
        <div v-else-if="show[3]">
          
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SessionList',
  data() {
    return {
      show: [false, true, false, false],
      search: '',
      sessionList: [
      {
        title: '好友/客户',
        lastInf: 'Last information',
        photo: '',
        time: '18:21'
      },
      {
        title: '好友/客户',
        lastInf: 'Last information',
        photo: '',
        time: '18:21'
      },
      {
        title: '好友/客户',
        lastInf: 'Last information',
        photo: '',
        time: '18:21'
      }],
      friendList: [],
      serviceList: [],
      groupList: [],
      chooseNow: 1
    }
  },
  methods: {
    submit(search) {
      console.log(search)   
    },
    choose(num) {
      this.chooseNow = num
      for (let i = 0; i < this.show.length; i++) {
        if (i == num) {
          this.show[i] = true
        } else {
          this.show[i] = false
        }

      }
    },
    isActive(num) {
      if (num == this.chooseNow) {
        return {active: true}
      } else {
        return {active: false}
      }
    }
  }
}
</script>

<style lang="less" scoped>


  .sessionList {
    position: fixed;
    height: 100%;
    width: 375px;
    border-right: 1px solid #e7e7e7;
  }
  .search {
    background-color: #FAFAFA;
    input {
      display: block;
      margin: 12px auto;
      width: 318px;
      height: 35px;
      background: #7070702c;
      border: 0px;
      border-radius: 10px;
    }
    input::-webkit-input-placeholder { 
      font-family: 'SegoeUI';
      background-image: url(~assets/img/chat/search.png);
      background-size: 18px;
      background-repeat: no-repeat;
      background-position-x: 110px;
      background-position-y: 5px;
      text-align: center;
      font-size: 18px;
      color: #707070;
    }
    input:-moz-placeholder { 
      font-family: 'SegoeUI';
      background-image: url(~assets/img/chat/search.png);
      background-size: 18px;
      background-repeat: no-repeat;
      background-position-x: 110px;
      background-position-y: 5px;
      text-align: center;
      font-size: 18px;
      color: #707070;
    } 
    input::-moz-placeholder { 
      font-family: 'SegoeUI';
      background-image: url(~assets/img/chat/search.png);
      background-size: 18px;
      background-repeat: no-repeat;
      background-position-x: 110px;
      background-position-y: 5px;
      text-align: center;
      font-size: 18px;
      color: #707070;
    } 
    input:-ms-input-placeholder { 
      font-family: 'SegoeUI';
      background-image: url(~assets/img/chat/search.png);
      background-size: 18px;
      background-repeat: no-repeat;
      background-position-x: 110px;
      background-position-y: 5px;
      text-align: center;
      font-size: 18px;
      color: #707070;
    }
  }
  .list {
    border-top: 1px solid #e7e7e7;
    background-color: #F5F5F5;
    .button {
      margin: 8px 28px;
      button {
        padding: 4px 10px;
        float: left;
        outline: none;
        border: none;
        color: #313131;
        font-size: 18px;
        border-radius: 10px;
        background-color: #F5F5F5;
        margin-right: 19px;
      }
      &>button:last-child {
         margin-right: 0px;
      }
    }  
  }
  .list .button .active {
    color: #3875C5;
    background-color: #3875c53a;
  }
</style>
