<template>
  <div class="window clear">
    <div class="dialogue">
      <div class="chatbox">
        
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
export default {
  name: 'ChatWindow'
}
</script>

<style lang="less" scoped>
  .window {
    height: 100%;
  }
  .dialogue {
    float: left;
    margin-right: 15px;
    width: 980px;


    border: 1px solid rgba(112, 112, 112, 0.3);
    border-radius: 0px 10px 0px 0px;
    .chatbox {
      overflow: auto;
      width: 100%;
      height: 550px;
      background: #FBFBFB;
    }
    .send {
      padding: 20px 30px 15px 30px;
      .fun {
        div {
          float: left;
          margin-right: 25px;
          img {
            width: 22px;
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
        height: 150px;
        border: none;
        resize: none;
        font-size: 22px;
      }
      .button {
        button {
          float: right;
          width: 100px;
          height: 40px;
          background: #F5F5F5;
          border: 1px solid #707070;
          opacity: 0.5;
          font-size: 18px;
        }
      }
    }
  }
  .information {
    float: left;
    width: 440px;
    .profile {
      padding: 0 28px;
      height: 360px;
      background: #FBFBFB;
      border: 1px solid rgba(112, 112, 112, 0.3);
      border-radius: 10px;
      margin-bottom: 15px;
      .photo {
        img {
          float: left;
          width: 50px;
          height: 50px;
          margin: 15px 25px;
        }
        p {
          float: right;
          font-size: 22px;
          line-height: 80px;
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
            font-size: 20px;
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
      height: 420px;
      background: #FBFBFB;
      border: 1px solid rgba(112, 112, 112, 0.3);
      border-radius: 10px;
    }
  }
</style>