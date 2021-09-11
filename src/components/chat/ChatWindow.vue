<template>
  <div class="window clear">
    <div class="dialogue">
      <div class="chatbox clearfix">
        <div v-for="(record, index) in records" :key="index">
          <div v-if="record != null">

            <div v-if="judgeDirection(record) == 1">
              <chat-record-left>
                <img :src="imgURL(profileImg)" alt="" slot="head">
                <p v-if="record.content" slot="text">{{record.content}}</p>
                <img v-else-if="record.savePath" :src="imgURL(record.savePath)" alt="" slot="emoji">
              </chat-record-left>
            </div>

            <div v-if="judgeDirection(record) == 2">
              <chat-record-right>
                <img :src="imgURL($store.state.profile.profileImg)" alt="" slot="head">
                <p v-if="record.content" slot="text">{{record.content}}</p>
                <img v-else-if="record.savePath" :src="imgURL(record.savePath)" alt="" slot="emoji">
              </chat-record-right>
            </div>

            <div v-if="judgeDirection(record) == 3">
              <chat-record-center>
                <p v-if="record.systemPrompt" slot="system">{{record.systemPrompt}}</p>
              </chat-record-center>
            </div>

          </div>
        </div>
      </div>
      <div class="send">
        <div class="fun clear">
          <div><img src="~assets/img/chat/emoji.png" alt=""></div>
          <div><img src="~assets/img/chat/screenshot.png" alt=""></div>
          <div><img src="~assets/img/chat/document.png" alt=""></div>
          <div><img src="~assets/img/chat/commonWords.png" alt=""></div>
          <div><img src="~assets/img/chat/history.png" alt=""></div>
        </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div class="button clear"><button>发送(S)</button></div>
      </div>
    </div>

    <div class="information">
      <div class="profile">
        <div class="photo clear">
          <img :src="imgURL($store.state.otherPart.profileImg)" alt="">
          <p>{{message.name}}</p>
        </div>
        <div class="personInformation">
          <div class="inf clear">
            <p>ID:</p>
            <p>{{message.id}}</p>
          </div>
          <div class="inf clear">
            <p>手机:</p>
            <p>{{message.mobile}}</p>
          </div>
          <div class="inf clear">
            <p>备注:</p>
            <p>无</p>
          </div>
          <div class="inf clear">
            <p>分组:</p>
            <p>默认分组</p>
          </div>
          <div class="inf clear">
            <p>性别:</p>
            <p>{{message.gender}}</p>
          </div>
          <div class="inf clear tag">
            <p class="first">标签:</p>
            <p>计算机科学与技术</p>
            <p>智能科学与技术</p>

            <!-- <p>{{message.tag}}</p> -->
          </div>
        </div>
      </div>
      <div class="manage">
        <div class="clear bar">
          <img src="~assets/img/chat/nodisturb.png" alt="">
          <div class="border clear">
            <p>消息免打扰</p>
            <div class="newButton">
              <new-button></new-button>
            </div>
          </div>
        </div>

        <div class="clear bar">
          <img src="~assets/img/chat/topping.png" alt="">
          <div class="border clear">
            <p>置顶聊天</p>
            <div class="newButton">
              <new-button></new-button>
            </div>
          </div>
        </div>

        <div class="clear bar">
          <img src="~assets/img/chat/blacklist.png" alt="">
          <div class="border clear">
            <p>加入黑名单</p>
            <div class="newButton">
              <new-button></new-button>
            </div>
          </div>
        </div>

        <div class="clear bar">
          <img src="~assets/img/chat/disturb.png" alt="">
          <div class="border clear">
            <p>设置AI提醒时间</p>
            <div class="newButton">
              <new-button></new-button>
            </div>
          </div>
        </div>

        <div class="clear bar">
          <img src="~assets/img/chat/remarks.png" alt="">
          <div class="border clear">
            <p>添加备注：</p>
            <div class="newButton">
              <new-button></new-button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {request} from 'network/request.js'
import NewButton from 'components/chat/NewButton.vue'

import ChatRecordLeft from 'components/chat/ChatRecordLeft.vue'
import ChatRecordRight from 'components/chat/ChatRecordRight.vue'
import ChatRecordCenter from 'components/chat/ChatRecordCenter.vue'

export default {
  name: 'ChatWindow',
  components: {
    NewButton,
    ChatRecordLeft,
    ChatRecordRight,
    ChatRecordCenter
  },
  props: {
    profileImg: {
      type: String
    }
  },
  data() {
    return {
      records: [],
      myId: this.$store.state.profile.id,
      source_id: this.$route.params.id,
      myPhoto: this.$store.state.profile.profileImg,
      message: {},
      isLeft: true,
      isRight: true
    }
  },
  methods: {
    imgURL(fileName) {
      return 'http://l423145x35.oicp.vip/file/' + fileName
    },
    judgeDirection(record) {
      if (record.type == 0) { //系统消息
        this.isLeft = false
        this.isRight = false
        return 3

      }
      else if (record.type == 1 || record.type == 2) { //文字消息
        if (record.sendId == this.myId) {
          this.isLeft = false
          this.isRight = true
          return 2

        } else {
          this.isLeft = true
          this.isRight = false
          return 1

        }
      }
    }
  },
  mounted() {

    request({
      method: 'GET',
      url: 'http://l423145x35.oicp.vip/chat/getThreeChatInfo',
      params: {
        source_id: this.source_id,
        type: 1,
        me_id: this.myId
      }
    }).then(response => {
      this.records = response.data.data.records
    })

    request({
      method: 'GET',
      url: 'http://l423145x35.oicp.vip/chatOne/otherIsEmployeeInChat',
      params: {
        relative_id: this.$store.state.otherPart.relative
      }
    }).then(response => {

      if (response.data.data) {
        //员工
      } else {
        //客户
        request({
          method: 'GET',
          url: 'http://l423145x35.oicp.vip/chatOne/getManInfo',
          params: {
            people_id: this.$store.state.otherPart.linkUser,
            roleType: 1,
            firm_id: this.$store.state.company.firmId
          }
        }).then(response => {
          this.message = response.data.data
        })
      }
    })
  }
}
</script>

<style lang="less" scoped>
  .window {
    height: 100%;
  }
  .dialogue {
    float: left;
    margin-right: 15px;
    width: 750px;

    border: 1px solid rgba(112, 112, 112, 0.3);
    border-radius: 0px 10px 0px 0px;
    .chatbox {
      box-sizing: border-box;
      padding: 0 45px 0 50px;
      width: 750px;
      height: 450px;
      background: rgb(248, 248, 248);
      overflow: auto;
    }
    .send {
      padding: 20px 30px 15px 30px;
      .fun {
        div {
          float: left;
          margin-right: 23px;
          img {
            width: 20px;
          }
        }
        &>div:last-child {
          float: right;
          margin-right: 0;
        }
      }
      textarea {
        padding-top: 10px;
        width: 100%;
        height: 100px;
        border: none;
        resize: none;
        font-size: 22px;
      }
      .button {
        button {
          float: right;
          width: 80px;
          height: 40px;
          background: #F5F5F5;
          border: 1px solid #707070;
          opacity: 0.5;
          font-size: 16px;
        }
      }
    }
  }
  .information {
    float: left;
    width: 380px;
    .profile {
      padding: 0 28px;
      height: 300px;
      background: #FBFBFB;
      border: 1px solid rgba(112, 112, 112, 0.3);
      border-radius: 10px;
      margin-bottom: 15px;
      .photo {
        img {
          float: left;
          width: 40px;
          height: 40px;
          margin: 15px 25px;
        }
        p {
          float: right;
          font-size: 20px;
          line-height: 60px;
          font-family: 'Segoe UI';
          margin-right: 25px;
        }
        border-bottom: 1px solid rgba(112, 112, 112, 0.3);
      }
      .personInformation {
        .inf {

          line-height: 28px;
          p {
            float: left;
            font-size: 16px;
            font-family: 'Segoe UI';
          } 
          &>p:nth-child(1) {
            width: 50px;
            text-align: right;
            margin-right: 20px;
          }
        }
        .tag {
          &>p:not(.first) {
            background-color: #1492e631;
            padding: 1px 10px;
            border-radius: 10px;
          }
        }
      }
    }
    .manage {
      height: 320px;
      background: #FBFBFB;
      border: 1px solid rgba(112, 112, 112, 0.3);
      border-radius: 10px;
      .bar {
        margin: 15px 20px;
        .border {
          margin-left: 40px;
          border-bottom: 1px solid #70707065;
          padding-bottom: 10px;
        }
        img {
          float: left;
          width: 20px;
        }
        p {
          line-height: 20px;
          float: left;
        }
        .newButton {
          float: right;
        }
      }
    }
  }

</style>