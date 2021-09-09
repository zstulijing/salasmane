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
          <div class="briefList clear" v-for="(item, index) in friendList" :key="index">
            <div v-if="item != null">
              <div class="briefList_photo">
                <img :src="getIMG(item.data.data.profile_img)" alt="">
              </div>
              <div>
                <p>{{item.data.data.create_time}}</p>
                <p>{{item.data.data.messege}}</p>
              </div>
              <!-- <div>
                <p>{{item.newHisTime}}</p>
              </div> -->

            </div>

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
import {request} from 'network/request.js'
export default {
  name: 'SessionList',
  data() {
    return {
      show: [false, true, false, false],
      search: '',
      sessionList: [],
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
    },
    getIMG(filename) {
      return 'http://l423145x35.oicp.vip/file/' + filename
    }
  },
  mounted () {
    request({
      method: 'GET',
      url: 'http://l423145x35.oicp.vip/chat/RecenttalkListBySort',
      params: {
        user_id: this.$store.state.profile.id,
        type: 1
      }
    }).then(response => {
      let mesLength = response.data.data.length
      this.friendList = new Array(mesLength)
      let all = []
      for (let i in response.data.data) {
        all.push(request({
          method: 'GET',
          url: 'http://l423145x35.oicp.vip/chat/getNewHisByRelativeId',
          params: {
            type: 1,
            relative_id: response.data.data[i].imRecenttalk.relative
          }
        }))
     }
      Promise.all(all).then(response => {
        this.friendList = response
      })
    })

  },
}
</script>

<style lang="less" scoped>

  @sessionListWidth: 300px;

  .sessionList {
    position: absolute;
    height: 100%;
    width: @sessionListWidth;
    border-right: 1px solid #e7e7e7;
  }
  .search {
    background-color: #FAFAFA;
    input {
      display: block;
      margin: 12px auto;
      width: 243px;
      height: 30px;
      background: #7070702c;
      border: 0px;
      border-radius: 10px;
    }
    input::-webkit-input-placeholder { 
      font-family: 'SegoeUI';
      background-image: url(~assets/img/chat/search.png);
      background-size: 18px;
      background-repeat: no-repeat;
      background-position-x: 80px;
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
      background-position-x: 80px;
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
      background-position-x: 80px;
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
      background-position-x: 80px;
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
      margin: 8px 10px;
      button {
        padding: 4px 10px;
        float: left;
        outline: none;
        border: none;
        color: #313131;
        font-size: 16px;
        border-radius: 10px;
        background-color: #F5F5F5;
        margin-right: 7px;
      }
      &>button:last-child {
         margin-right: 0px;
      }
    }
    .session {
        .briefList {
          .briefList_photo {
            img {
              width: 50px;
              height: 50px;
            }
          }
        }
      }  
  }
  .list .button .active {
    color: #3875C5;
    background-color: #3875c53a;
  }
</style>
