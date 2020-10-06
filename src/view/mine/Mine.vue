<template>
  <div class="account">
    <Header2 title="账号"></Header2>
    <!-- 登录 -->
    <div class="login" v-if="flag == 'login'">
      <h1>登录页面</h1>
      <van-form @submit="onSubmit1">
        <van-field
          v-model="username1"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password1"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <span class="span1" @click="toregister">现在去注册</span>
          <van-button round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
    <!-- 注册 -->
    <div class="register" v-if="flag == 'register'">
      <h1>注册页面</h1>
      <van-form @submit="onSubmit2">
        <van-field
          v-model="username2"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password2"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <span class="span2" @click="tologin">已注册去登陆</span>
          <van-button round block type="info" native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>
    </div>
    <!-- 登陆后 -->
    <div class="after" v-if="flag == 'after'">
      <van-swipe-cell>
        <van-card
          :desc= uname
          title="用户"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <template #right>
          <van-button
            square
            text="退出"
            type="danger"
            class="delete-button"
            @click="quit"
          />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import Header2 from "../../components/Header2";
import { Dialog } from "vant";
import { mapMutations } from "vuex";
import Vue from "vue";
import { SwipeCell } from "vant";
Vue.use(SwipeCell);
export default {
  name: "Account",
  components: {
    Header2,
  },
  data() {
    return {
      username1: "",
      password1: "",
      username2: "",
      password2: "",
      flag: "login",
      uname:'',
    };
  },
  created() {
    if (localStorage.getItem("status") == 3) {
      this.flag = "after";
    }
    this.uname = localStorage.getItem('username')
  },
  methods: {
    ...mapMutations(["name"]),
    onSubmit1(values) {
      console.log("submit", values);
      var username = this.username1;
      var password = this.password1;
      this.$http.post("/login2", { username, password }).then((res) => {
        if (res.code === 20000) {
          Dialog({ message: res.msg });
          this.flag = "after";
          this.name(this.username1);
          localStorage.setItem("status", 3);
          localStorage.setItem("username", username);
        } else {
          localStorage.setItem("status", 2);
          localStorage.setItem("username", '');
        }
      });
    },
    // 注册
    onSubmit2(values) {
      console.log("submit", values);
      var username = this.username2;
      var password = this.password2;
      this.$http.post("/login1", { username, password }).then((res) => {
        if (res.code === 20000) {
          Dialog({ message: res.msg });
          this.flag = "login";
        }
      });
    },
    toregister() {
      this.flag = "register";
    },
    tologin() {
      this.flag = "login";
    },
    quit() {
      Dialog.confirm({
        title: "标题",
        message: "弹窗内容",
      })
        .then(() => {
          localStorage.setItem("status", 2);
          this.flag = "login";
          this.$message({
            type: "标题",
            message: "成功退出",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 20px;
  font-size: 35px;
  text-align: center;
  font-weight: 900;
}
.span1,
.span2 {
  font-size: 15px;
  color: red;
  font-weight: 400;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>