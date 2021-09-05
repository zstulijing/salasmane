<template>
  <div class="chat">
    <session-list></session-list>
  </div>  
</template>

<script>
import SessionList from 'components/chat/SessionList.vue'
export default {
  name: 'Chat',
  components: {
    SessionList
  }
}
</script>

<style lang="less" scoped>

</style>
