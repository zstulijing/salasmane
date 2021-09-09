<template>
  <div class="window clear">
    <div class="dialogue">
      <div class="chatbox clearfix">
        <div v-for="(record, index) in records" :key="index">
          <chat-record :sendDirection="judgeDirection(record)">
            <img src="" alt="" slot="head">
            <p v-if="record.systemPrompt" slot="system">{{record.systemPrompt}}</p>
            <p slot="text" v-else-if="record.content">{{record.content}}</p>
            <img v-else-if="record.savePath" :src="imgURL(record.savePath)" alt="" slot="emoji">
          </chat-record>
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
          <img src="" alt="">
          <p>用户名</p>
        </div>
        <div class="personInformation">
          <div class="inf clear">
            <p>ID:</p>
            <p></p>
          </div>
          <div class="inf clear">
            <p>手机:</p>
            <p></p>
          </div>
          <div class="inf clear">
            <p>备注:</p>
            <p></p>
          </div>
          <div class="inf clear">
            <p>分组:</p>
            <p></p>
          </div>
          <div class="inf clear">
            <p>性别:</p>
            <p></p>
          </div>
          <div class="inf clear">
            <p>标签:</p>
            <p></p>
          </div>
        </div>
      </div>
      <div class="manage">

      </div>
    </div>
  </div>
</template>

<script>
import {request} from 'network/request.js'
import ChatRecord from 'components/chat/ChatRecord.vue'
export default {
  name: 'ChatWindow',
  components: {
    ChatRecord
  },
  data() {
    return {
      records: [],
      myId: '28343434343434'
    }
  },
  methods: {
    imgURL(fileName) {
      return 'http://l423145x35.oicp.vip/file/' + fileName
    },
    judgeDirection(record) {
      if (record.type == 0) { //系统消息
        return 'center'
      }
      else if (record.type == 1 || record.type == 2) { //文字消息
        if (record.sendId == this.myId) {
          return 'right'
        } else {
          return 'left'
        }
      }
    }
  },
  mounted () {
    request({
      method: 'GET',
      url: 'http://l423145x35.oicp.vip/chat/getThreeChatInfo',
      params: {
        source_id: 273487384738748,
        type: 1,
        me_id: 28343434343434
      }
    }).then(response => {
      this.records = response.data.data.records
    })
  },
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
          margin: 14px 0;
          p {
            float: left;
            font-size: 16px;
            font-family: 'Segoe UI';
          } 
          &>p:nth-child(1) {
            width: 50px;
            text-align: right;
          }
        }
      }
    }
    .manage {
      height: 320px;
      background: #FBFBFB;
      border: 1px solid rgba(112, 112, 112, 0.3);
      border-radius: 10px;
    }
  }

</style>