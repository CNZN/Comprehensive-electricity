<template>
  <div>
    <el-page-header @back="goBack" content="详情页面"> </el-page-header>
  </div>
</template>
<script>
export default {
    data(){
        return{
            id:null
        }
    },
  methods: {
    goBack() {
      history.go(-1)
    },
  },
  created(){
      this.id = this.$route.params.id
  }
};
</script>