<template>
  <div class="login">
    <div class="content">
      <p class="title">VUE-ADMIN 后台管理系统</p>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
            placeholder="请输入账号"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :type="inputType"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入密码"
            prefix-icon="el-icon-key"
          >
            <i class="el-icon-view" slot="suffix" @click="handleIconClick"> </i>
          </el-input>
        </el-form-item>
        <el-form-item prop="yzm">
          <div class="yzm">
            <el-input
              placeholder="请输入验证码"
              prefix-icon="el-icon-mobile"
              v-model="ruleForm.yzm"
            >
            </el-input>
            <div
              class="div"
              ref="yzmDiv"
              @click="createYzm"
              :style="`background-position: ${background_position_x}px ${background_position_y}px;`"
            >
              <span
                v-for="(item, index) in yzm.split('')"
                :key="index"
                :style="`color:${colorArr[Math.round(Math.random() * 4)]};`"
                >{{ item }}</span
              >
            </div>
          </div>
        </el-form-item>
        <el-form-item class="loginBtn">
          <el-button type="primary" @click="loginSetting('ruleForm')"
            >登录系统</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      inputType: "password",
      ruleForm: {
        username: "",
        password: "",
        yzm: "",
      },
      rules: {
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        yzm: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
      yzm: "abcd",
      yzmArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"],
      background_position_x: 100,
      background_position_y: 100,
      colorArr: ["red", "yellow", "blue", "green", "orange"],
    };
  },
  mounted() {
      this.$refs.yzmDiv.click()
  },
  methods: {
    handleIconClick() {
      if (this.inputType == "password") {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },

    createYzm() {
      let yzm = "";
      for (var i = 0; i < 4; i++) {
        let num = Math.round(Math.random() * 14);
        yzm += this.yzmArr[num];
      }
      this.yzm = yzm;
      this.background_position_x = Math.random() * 300;
      this.background_position_y = Math.random() * 300;
    },

    loginSetting(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.ruleForm.yzm != this.yzm){
              this.$refs.yzmDiv.click()
              return this.$message.error("验证码输入错误");
          }
          alert("登录成功")
        } else {
          this.$message.error("亲,输入的内容不能有空哦！")
          return false;
        }
      });
    },
  },
  computed: {
  },
  watch: {},
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background: #20a0ff;
}
.content {
  width: 500px;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .title {
    width: 100%;
    text-align: center;
    color: white;
    padding: 26px 0px;
    font-size: 24px;
  }
  .demo-ruleForm {
    width: 300px;
    background: white;
    width: 100%;
    padding: 30px 20px;
    box-sizing: border-box;
  }
  .yzm {
    display: flex;
    justify-content: space-between;
    .el-input {
      width: 300px;
    }
    .div {
      width: 150px;
      letter-spacing: 15px;
      background: url("http://bpic.588ku.com//back_origin_min_pic/20/12/16/4462ee88acf8b7fa3eff78a1b3914176.jpg!/fw/750/quality/99/unsharp/true/compress/true");
      color: blue;
      line-height: 40px;
      padding: 0px 40px;
      box-sizing: border-box;
      border-radius: 10px;
    }
  }
  .el-form-item__content {
    width: 100%;
    .el-button {
      position: absolute;
      right: 0px;
    }
  }
}
</style>