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
  @navBarHeight: 40px;
  @funBarWidth: 60px;

  .content {
    position: absolute;
    top: @navBarHeight;
    left: @funBarWidth;
    bottom: 0px;
  }
</style>
