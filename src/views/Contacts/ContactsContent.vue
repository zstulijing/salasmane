<template>
  <div class="cContent">
    <contacts-list></contacts-list>
    <div class="cRight">
      <div class="cHome" v-if="isHome">
        <img src="~assets/img/salesman/transparent.png" alt="">
      </div>
      <div class="cFriendDetail" v-else>
        <contacts-detail></contacts-detail>
      </div>
    </div>
  </div>
</template>

<script>
import ContactsList from 'components/contacts/ContactsList.vue'
import ContactsDetail from 'components/contacts/ContactsDetail.vue'
export default {
  name: 'ContactsContent',
  components: {
    ContactsList,
    ContactsDetail
  },
  computed: {
    isHome() {
      if (this.$route.path == '/contacts') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="less" scoped>

  @contactsListWidth: 300px;
  .cRight {
    margin-left: @contactsListWidth;
    position: relative;
  }
  .cHome {
    background-color: rgb(250, 250, 250);
    img {
      margin: 0 auto;
      padding-top: 200px;
      width: 200px;
    }
  }
</style>