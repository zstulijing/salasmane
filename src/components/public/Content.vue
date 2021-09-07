<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="less" scoped>
  @navBarHeight: 60px;
  @funBarWidth: 80px;

  .content {

    margin-top: @navBarHeight;
    margin-left: @funBarWidth;

  }
</style>
