<template>
  <div class="contactsList">
    
  </div>

</template>

<script>
export default {
  name: 'ContactsList',

}
</script>

<style lang="less" scoped>

  @contactsListWidth: 300px;

  .contactsList {
    overflow: auto;
    position: absolute;
    height: 100%;
    width: @contactsListWidth;
    border-right: 1px solid #e7e7e7;
    background-color: #bfa;
  }
</style>