<template>
  <div class="chat">
    <session-list></session-list>
    <div class="chatContent">
      <div class="chatTitle"><p>{{$store.state.otherPart.talkName}}</p></div>
      <chat-window :key="key" :profileImg="$store.state.otherPart.profileImg"></chat-window>
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
    }
  }
}
</script>

<style lang="less" scoped>

  @sessionListHeight: 300px;
  @chatTitleHeight: 56px;
  .chatContent {
    padding-left: @sessionListHeight;
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
