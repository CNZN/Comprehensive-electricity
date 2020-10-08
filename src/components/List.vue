<template>
  <div class="list">
    <!-- <Back></Back> -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      
    >
      <!-- <van-cell v-for="item in datalist" :key="item" :title="item.title" /> -->
      <ul>
        <li v-for="item in datalist" :key="item.price" @click="todetail(item._id)">
          <img :src="item.img" alt="" v-if="item.title" />
          <div class="box" v-if="item.title">
            <p class="p1">
              <span>热销</span><span>{{ item.title }}</span> <br />
              <span>{{ item.desc }}</span>
            </p>
            <p class="p2">
              <span class="sp1">￥{{ item.price }}</span>
              <span class="sp2">秒杀价</span>
            </p>
            <p class="p3">
              <span class="sp3">自营</span>
              <span class="sp4">京东超市</span>
              <span class="sp5">多买优惠</span>
              <span class="sp6">分期免息</span>
            </p>
            <p class="p4">
              <span class="sp7">您买过的商品</span>
              <span class="sp8">36万条评价</span>
              <span class="sp9">98%好评</span>
            </p>
            <p class="p5">
              <span class="sp10">京东自营店</span>
              <span class="sp11">进店></span>
              <van-icon name="shopping-cart" />
            </p>
          </div>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
import Vue from "vue";
import { List } from "vant";
Vue.use(List);
export default {
  components: {
  },
  data() {
    return {
    //   list: [],
      loading: false,
      finished: false,
      datalist: null,
      baseurl: "http://localhost:7777/",
    };
  },
  methods: {
    onLoad() {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.datalist.push(this.datalist.length + 1);
        }

    //     // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.datalist.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    getlist() {
      this.$http.get("/allinfo").then((res) => {
        this.datalist = res.goodslist;
        this.datalist.forEach((item) => {
          item.img = this.baseurl + item.img;
        });
      });
    },
    todetail(id) {
      // alert(id);
      this.$router.push({
        path:'/detail/'+id
      })
    },
  },
  mounted() {
    this.getlist();
  },
};
</script>

<style  lang='scss' scoped >
ul {
    overflow: hidden;
  li {
    display: flex;
    margin: 20px 5px;
    font-size: 14px;
    color: #101010;
    .box {
      font-size: 12px;
      .p1 {
        width: 80%;
        line-height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .p2 {
        color: #e51c23;
        font-size: 12px;
        
        .sp2 {
          display: inline-block;
          width: 45px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          background: #e51c23;
          color: white;
        }
      }
      .p3 {
        .sp3 {
          display: inline-block;
          width: 38px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          background: #e51c23;
          color: white;
        }
        .sp4 {
          display: inline-block;
          width: 61px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          background: #e51c23;
          color: white;
        }
        .sp5,
        .sp6 {
          display: inline-block;
          width: 61px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          color: #e51c23;
          background: white;
          border: 1px solid #e51c23;
        }
      }
      .p4 {
          color: #4D4A4A;
        .sp7 {
          display: inline-block;
          width: 87px;
          height: 20px;
          text-align: center;
          line-height: 17px;
          color: #2caafd;
          background: white;
          border: 1px solid #2caafd;
        }
      }
      .p5{
          color: #4D4A4A;
      }
    }
  }
}
span{margin-left: 5px;margin-top: 1px;margin-bottom: 1px;border-radius: 3px;}
img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 6px;
}
</style>