<template> 
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
          <p>{{message.remark}}</p>
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
          <p v-for="(item, index) in message.tag" :key="index">{{item.key}}</p>
          <p @click="addTag()">+</p>
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

      <div class="clear bar textarea">
        <img src="~assets/img/chat/remarks.png" alt="">
        <p>添加备注：</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="delete">
        <button>删除好友</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>