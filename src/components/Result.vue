<template>
  <div class="result">
    <form action="/">
      <van-search
        v-model="value0"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

    <ul>
      <li
        v-for="item in datalist0"
        :key="item.price"
        @click="todetail(item._id)"
      >
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
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";
import { Toast } from "vant";
import { DropdownMenu, DropdownItem } from "vant";

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Search);
export default {
  data() {
    return {
      value0: "",
      datalist: null,
      baseurl: "http://localhost:7777/",
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "价格升序", value: "b" },
        { text: "价格降序", value: "c" },
      ],
    };
  },
  components: {},
  methods: {
    getlist() {
      this.$http.get("/allinfo").then((res) => {
        this.datalist = res.goodslist;
        this.datalist.forEach((item) => {
          item.img = this.baseurl + item.img;
        });
      });
    },
    onSearch(val) {
      var bb = null;
      // var aa = this.datalist;
      if (val) {
        bb = this.datalist.filter((item) => {
          if (item.desc.includes(val)) {
            return item;
          }
        });
        this.datalist = bb;
        console.log(this.datalist, val);
      } else {
        this.getlist();
      }
    },
    onCancel() {
      Toast("取消");
      history.go(-1);
    },
    todetail(id) {
      this.$router.push({
        path: "/detail/" + id,
      });
    },
  },
  created() {
    // this.value0 = this.$route.query.value;
  },
  mounted() {
    this.getlist();
  },
  computed: {
    datalist0() {
      if (this.value2 == "a") {
        return this.datalist;
      } else if (this.value2 == "b") {
        var aa = this.datalist;
        aa.sort(function (a, b) {
          return a.price - b.price;
        });
        return aa;
      } else {
        // console.log(this.datalist);
        var bb = this.datalist;
        bb.sort(function (a, b) {
          return b.price - a.price;
        });
        return bb;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
        color: #4d4a4a;
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
      .p5 {
        color: #4d4a4a;
      }
    }
  }
}
span {
  margin-left: 5px;
  margin-top: 1px;
  margin-bottom: 1px;
  border-radius: 5px;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-right: 10px;
}
</style>