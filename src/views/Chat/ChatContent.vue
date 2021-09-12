<template>
  <div class="chat clear">
    <session-list class="chatLeft"></session-list>
    <div class="chatRight">
      <div class="chatHome" v-if="isHome">
          <img src="~assets/img/salesman/transparent.png" alt="">
      </div>

      <div class="chatContent" v-else>
        <div class="chatTitle"><p>{{$store.state.otherPart.talkName}}</p></div>
        <chat-window :key="key" :profileImg="$store.state.otherPart.profileImg"></chat-window>
      </div>
    </div>
  </div>  
</template>

<script>
import SessionList from 'components/chat/SessionList.vue'
import ChatWindow from 'components/chat/ChatWindow.vue'
export default {
  name: 'ChatContent',
  components: {
    SessionList,
    ChatWindow
  },
  computed: {
    key() {
      return this.$route.path + Math.random() 
    },
    isHome() {
      if (this.$route.path == '/chat') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="less" scoped>

  @sessionListWidth: 300px;
  @chatTitleHeight: 56px;

  .chatLeft {
    width: @sessionListWidth;
  }
  .chatRight {
    margin-left: @sessionListWidth;
    .chatHome {
      background-color: rgb(250, 250, 250);
      img {
        width: 200px;
      }
    }
  }

  .chatTitle {
    height: @chatTitleHeight;
    p {
      font-family: 'Segoe UI';
      font-size: 22px;
      font-weight: 400;
      line-height: 60px;
      margin-left: 30px;
    }
  }
</style>
