<template>
  <div class="main">
    <van-swipe :loop="true" :width="375" :height="170" :autoplay="2000" indicator-color="#333333">
      <van-swipe-item>
        <img src="../../../assets/images/item4.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../assets/images/item5.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../assets/images/item6.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../assets/images/item7.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img{
  height: 150px;
  width: 375px;
}
</style>