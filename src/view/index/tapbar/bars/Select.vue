<template>
  <div class="select">
    <div class="select1">
      <div v-for="item in datalist1" :key="item._id">
        <img :src="item.img" alt="" @click="todetail(item._id)" />
        <p class="p1">
          <span class="jingdong">京东物流</span>
          <span class="name">{{ item.title }}</span>
        </p>
        <p class="p2">{{ item.desc }}</p>
        <p class="p3">
          <span class="sp1">￥{{ item.price }}</span>
          <span class="sp2">满减</span>
          <span class="sp3">看相似</span>
        </p>
      </div>
    </div>

    <div class="select2">
      <div v-for="item in datalist2" :key="item._id">
        <img :src="item.img" alt="" @click="todetail(item._id)" />
        <p class="p1">
          <span class="jingdong">京东物流</span>
          <span class="name">{{ item.title }}</span>
        </p>
        <p class="p2">{{ item.desc }}</p>
        <p class="p3">
          <span class="sp1">￥{{ item.price }}</span>
          <span class="sp2">满减</span>
          <span class="sp3">看相似</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist1: null,
      datalist2: [],
      baseurl: "http://localhost:7777/",
    };
  },
  methods: {
    getlist() {
      this.$http.get("/allinfo").then((res) => {
        this.datalist1 = res.goodslist;
        this.datalist1.forEach((item) => {
          item.img = this.baseurl + item.img;
        });
      });
    },
    getlist2() {
      this.$http.get("/allinfo").then((res) => {
        this.datalist2 = res.goodslist.reverse();
        this.datalist2.forEach((item) => {
          item.img = this.baseurl + item.img;
        });
      });
    },
    todetail(id) {
      alert(id);
    },
  },
  created() {
    this.getlist();
    this.getlist2();
  },
};
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  .select1,
  .select2 {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    div {
      margin: 10px 9px;
      width: 100%;
      img {
        width: 100%;
      }
      .p1 {
        .jingdong {
          display: inline-block;
          width: 70px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          color: white;
          font-size: 12px;
          background: #e8341f;
        }
        // .name {
        // }
      }
      .p2 {
        margin-top: 5px;
        margin-bottom: 5px;
      }
      .p3 {
        margin-top: 5px;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .sp1 {
          font-size: 14px;
          color: #e51c23;
        }
        .sp2 {
          display: inline-block;
          font-size: 14px;
          color: #e51c23;
          width: 30px;
          height: 20px;
          border:1px solid #e51c23;
          text-align: center;
          line-height: 20px;
        }
        .sp3{
          display: inline-block;
          color: #909090;
          width: 51px;
          height: 20px;
          border:1px solid #909090 ;
          border-radius: 10px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>