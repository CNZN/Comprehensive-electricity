<template>
  <div class="header1">
    <p>
      <i id="i1" class="el-icon-cloudy"></i>
      {{ title }}
      <i id="i2" class="el-icon-camera-solid"></i>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "购物",
    },
  },
  methods:{
    
  }
};
</script>

<style scoped>
p {
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  font-weight: 600;
  color: white;
  font-size: 18px;
  background: #EBC344;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#i1 {
  margin-left: 20px;
}
#i2 {
  margin-right: 20px;
}
</style>