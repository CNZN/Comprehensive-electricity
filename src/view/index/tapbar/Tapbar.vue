<template>
  <div class="tapbar">
    <div class="tapbar">
      <router-link tag="p" to="/index/select">
        <p class="sup">
          <span class="sp1">精选</span><br /><span class="sp2">为你推荐</span>
        </p>
      </router-link>
      <router-link tag="p" to="/index/happy">
        <p class="sup">
          <span class="sp1">欢度十一</span><br /><span class="sp2"
            >爆款巡礼</span
          >
        </p>
      </router-link>
      <router-link tag="p" to="/index/shopping">
        <p class="sup">
          <span class="sp1">超市</span><br /><span class="sp2">百货生鲜</span>
        </p>
      </router-link>
      <router-link tag="p" to="/index/electric">
        <p class="sup">
          <span class="sp1">电器</span><br /><span class="sp2">3C家电</span>
        </p>
      </router-link>
      <router-link tag="p" to="/index/life">
        <p class="sup">
          <span class="sp1">生活</span><br /><span class="sp2">居家日用</span>
        </p>
      </router-link>
      <router-link tag="p" to="/index/makeup">
        <p class="sup">
          <span class="sp1">时尚</span><br /><span class="sp2">美妆穿搭</span>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tapbar {
    margin-top: 10px;
  width: 375px;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  p {
    flex-shrink: 0;
    width: 75px;
    height: 70px;
    text-align: center;
    &.active {
      color: red;
    }
    p {
      .sp1 {
        font-size: 16px;
        font-weight: 800;
        line-height: 24px;
      }
      .sp2 {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
</style>