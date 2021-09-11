<template>
  <div class="cContent">
    <contacts-list></contacts-list>
  </div>
</template>

<script>
import ContactsList from 'components/contacts/ContactsList.vue'
export default {
  name: 'ContactsContent',
  components: {
    ContactsList
  }
}
</script>

<style lang="less" scoped>

</style>