<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside :class="collapseFlag?'close':'open'">
      <header>Logo</header>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        text-color="#fff"
        background-color="#424f63"
        active-text-color="#ffd04b"
        :collapse="collapseFlag"
        collapse-transition
        router
      >
        <!-- 首页 -->
        <el-menu-item index="/admin/home">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <!-- 表格管理 -->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-share"></i>
            <span>表格管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/basicTable">基本表格</el-menu-item>
            <el-menu-item index="/admin/sortTable">排序表格</el-menu-item>
            <el-menu-item index="/admin/filterTable">筛选表格</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- 图标管理 -->
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>图标管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/bar">柱状图</el-menu-item>
            <el-menu-item index="/admin/line">折线图</el-menu-item>
            <el-menu-item index="/admin/pie">饼图</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- 表单管理 -->
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>表单管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/render">渲染表单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- 系统管理 -->
        <el-menu-item index="2">
          <i class="el-icon-loading"></i>
          <span slot="title">系统管理</span>
        </el-menu-item>
        <!-- 用户管理 -->
        <el-menu-item index="4">
          <i class="el-icon-s-custom"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <!-- 权限管理 -->
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">权限管理</span>
        </el-menu-item>
        <!-- 操作日志 -->
        <el-menu-item index="4">
          <i class="el-icon-date"></i>
          <span slot="title">操作日志</span>
        </el-menu-item>
        <!-- 测试 -->
        <el-menu-item index="/admin/test">
          <i class="el-icon-setting"></i>
          <span slot="title">测试</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container style="background:#eee;">
        <!-- 头部 -->
      <el-header style="background:white;">
        <div class="left">
            <!-- 是否折叠侧边导航按钮 -->
          <i class="el-icon-s-fold" @click="collapseFlag=!collapseFlag"></i>
          <h3>VUE-ADMIN 后台管理系统</h3>
        </div>
        <div class="right">
          <!-- 用户查看 -->
          <p>
            <el-dropdown>
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <i class="el-icon-s-custom"></i>
                <el-dropdown-item>{{$store.state.loginData[0].username}}</el-dropdown-item>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item 
                v-for="(item,index) in $store.state.loginData"
                :key="index"
                >{{item.username}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </p>
          <p class="btns">
            <i class="el-icon-question"></i>
            <i class="el-icon-error" @click="logout"></i>
          </p>
        </div>
      </el-header>
      <!-- 主要区域 -->
      <el-main style="padding:15px;">
          <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        // 侧边导航折叠
        collapseFlag:false,
    };
  },
  mounted() {},
  methods: {
    //   退出登录
    logout(){
        this.$confirm('此操作将退出登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$router.push("/login")

          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
    }
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  .el-aside {
    background: #424f63;
    height: 100%;
    overflow: hidden;
    .el-menu {
      border-right: none !important;
      background: #424f63 !important;
      height: 100%;
      overflow: scroll;
    }
    header {
      width: 100%;
      height: 72px;
      text-align: center;
      line-height: 72px;
      font-size: 24px;
      color: #65cea7;
    }
  }
  .el-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-shadow: 0px 0px 5px black;
    .left {
      display: flex;
      align-items: center;
      h3 {
        margin-left: 15px;
      }
      i {
        font-size: 30px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      .btns{
          i{
              margin: 0px 10px;
              font-size: 30px;
          }
      }
    }
  }
}

.open{
    width: 200px  !important;
    transition: 0.4s;
}
.close{
    width: 64px !important;
    transition: 0.4s;
}

</style>