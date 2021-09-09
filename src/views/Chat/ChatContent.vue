<template>
  <div class="chat">
    <session-list></session-list>
    <div class="chatContent">
      <div class="chatTitle"><p>好友/客户</p></div>
      <chat-window></chat-window>
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
