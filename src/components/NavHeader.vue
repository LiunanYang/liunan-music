<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-header{
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
  }

  .m-header  .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
  .m-header .text{

  }
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
  .m-header .mine{
    position: absolute
    top: 0
    right: 0
  }
  .m-header .mine .icon-mine{
    display: block
    padding: 12px
    font-size: 20px
    color: $color-theme
  }

</style>
