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
          <div class="briefList" v-for="(item, index) in friendList" :key="index">
            <div v-if="item != null" class="clear" @click="chatContent(index)">

              <p class="newMessage" v-if="item.data.data.news_length != 0">{{item.data.data.news_length}}</p>
              <div class="briefList_photo">
                <img :src="getIMG(item.data.data.profile_img)" alt="">
              </div>
              <div class="briefList_talk">
                <p>{{item.data.data.talk_name}}</p>
                <p>{{item.data.data.messege | cutMessage}}</p>
              </div>
              <div class="briefList_time">
                <p>{{item.data.data.create_time | showDate}}</p>
              </div>
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
  filters: {
    showDate(date) {
      let YMD = date.split('T')[0].split('-')
  
      let now = new Date().toLocaleDateString().split('/')
      let num = 0; 
      for (let i = 0; i < YMD.length; i++){
        if (parseInt(YMD[i]) == parseInt(now[i])) {
          num ++;
        } 
      }
      if (num == YMD.length) {
        return date.split('T')[1].split(':')[0] + ':' +  date.split('T')[1].split(':')[1]
      } else if (parseInt(YMD[0]) != parseInt(now[0])){
        return date.split('T')[0].split('-')[0]
      } else {
        return date.split('T')[0].split('-')[1] + '-' + date.split('T')[0].split('-')[2]
      }
    },
    cutMessage(message) {
      if (message.length >= 13) {
        return message.substring(0, 13) + '...'
      } else {
        return message
      }
    }
  },
  data() {
    return {
      show: [false, true, false, false],
      search: '',
      sessionList: [],
      friendList: [],
      serviceList: [],
      groupList: [],
      chooseNow: 1,
      relativeId: []
    }
  },
  methods: {
    submit(search) {
      
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
    },
    chatContent(index) {
      // console.log(this.$route.path.indexOf(this.friendList[index].data.data.link_user));
      if (this.$route.path.indexOf(this.friendList[index].data.data.link_user) == -1) {

        this.$store.commit('setOtherPart', {
          talkName: this.friendList[index].data.data.talk_name,
          linkUser: this.friendList[index].data.data.link_user,
          profileImg: this.friendList[index].data.data.profile_img,
          relative: this.relativeId[index]
        })
        request({
          method: 'GET',
          url: 'http://l423145x35.oicp.vip/chatOne/hasReadHistory',
          params: {
            relative_id: this.relativeId[index],
            type: 1
          }
        }).then(response => {
          this.friendList[index].data.data.news_length = 0
          this.$router.push('/chat/' + this.friendList[index].data.data.link_user)
        })


      }
    },
    update() {
      request({
        method: 'GET',
        url: 'http://l423145x35.oicp.vip/chat/RecenttalkListBySort',
        params: {
          user_id: this.$store.state.profile.id,
          type: 1
        }
      }).then(response => {
        let mesLength = response.data.data.length
        let all = []
        for (let i in response.data.data) {
          this.relativeId[i] = response.data.data[i].imRecenttalk.relative
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
        this.relativeId[i] = response.data.data[i].imRecenttalk.relative
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


    let num = setInterval(() => {
      request({
        method: 'GET',
        url: 'http://l423145x35.oicp.vip/chatOne/getMesBool',
        params: {
          me_id: this.$store.state.profile.id
        }
      }).then(response => {
        if (response.data.data.flag == true) {
          for(let i of response.data.data.relation_list) {
            if (i == this.$store.state.otherPart.relative) {
              this.$emit('update', '')
            }
          }
          this.update()
        }
      })
    }, 100);
  }
}
</script>

<style lang="less" scoped>

  @sessionListWidth: 300px;

  .sessionList {
    overflow: auto;
    position: absolute;
    height: calc(100vh - 40px);
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
      font-size: 16px;
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
      font-size: 16px;
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
      font-size: 16px;
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
      font-size: 16px;
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
        &>div:nth-child(1) {
          position: relative;
          .newMessage {
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            left: 45px;
            top: 1px;
            background-color: rgb(250, 81, 81);
            text-align: center;
            line-height: 15px;
            color: #fff;
            font-size: 10px;
          }
        }
        cursor: pointer;
        height: 64px;
        .briefList_photo {
          float: left;
          img {
            width: 40px;
            height: 40px;
            border: 2px solid #707070;
            border-radius: 5px;
            margin: 10px;
          }
        }
        .briefList_talk {
          float: left;
          margin-top: 10px;
          &>p:nth-child(2) {
            font-size: 12px;
            margin-top: 10px;
          }

        }
        .briefList_time {
          float: right;
          margin: 20px 10px 0 0;
          color: #707070;
          font-size: 10px;
        }
      }
    }  
  }
  .list .button .active {
    color: #3875C5;
    background-color: #3875c53a;
  }
</style>
