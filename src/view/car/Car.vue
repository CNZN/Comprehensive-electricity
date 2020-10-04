<template>
  <div class="car">
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <!-- <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template> -->
    </van-submit-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { SubmitBar } from "vant";

Vue.use(SubmitBar);
export default {
  name: "Car",
  components: {},
};
</script>

<style>
</style>