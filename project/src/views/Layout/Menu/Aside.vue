<template>
  <div class="sidebar">
    <el-menu
      :default-active="this.$router.path"
      router
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="#333"
    >
      <el-menu-item
        @click="clickMenu(item)"
        v-for="item in noChildren"
        :key="item.index"
        :index="item.index"
      >
        <i :class="`el-icon-${item.Menu_Icon}`"></i>
        <span slot="title">{{ item.Menu_Name }}</span>
      </el-menu-item>

      <el-submenu
        v-for="item in hasChildren"
        :key="item.index"
        :index="item.index"
      >
        <template slot="title">
          <i :class="`el-icon-${item.Menu_Icon}`"></i>
          <span slot="title">{{ item.Menu_Name }}</span>
        </template>
        <el-menu-item-group
          v-for="(subItem, subIndex) in item.child"
          :key="subItem.index"
        >
          <el-menu-item :index="subIndex + ''">{{
            subItem.Menu_Name
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item
        :index="item.Menu_Url"
        v-for="(item, index) in List"
        :key="index"
      >
        <template slot="title">
          <i :class="item.Menu_Icon"></i>
          <span slot="title">{{ item.Menu_Name }}</span>
        </template>
      </el-menu-item> -->

      <!-- <el-menu-item index="/clbx">
       <template slot="title">
        <i class="el-icon-setting"></i>
        <span>差旅报销</span>
      </template>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-data"></i>
        <span>日常报销</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/bxsq"><i class="el-icon-reading"></i>报销申请</el-menu-item>
          <el-menu-item index="/bxsp"><i class="el-icon-user-solid"></i>报销审批</el-menu-item>
      </el-menu-item-group> 
    </el-submenu>

    <el-menu-item index="/jkbx" class="routerLink">
       <template slot="title">
        <i class="el-icon-folder-add"></i>
        <span>借款报销</span>
      </template>
    </el-menu-item>

     <el-menu-item index="/wlfk">
       <template slot="title">
        <i class="el-icon-coin"></i>
        <span>往来付款</span>
      </template>
    </el-menu-item> -->
    </el-menu>
  </div>
</template>
<script>
import { getChildMenu,GetButtons} from "@/api/index.js";
export default {
  data() {
    let a = sessionStorage.getItem("Token");
    let b = sessionStorage.getItem("Menu_ID");
    return {
      Appid: "312502",
      Token: a,
      MenuID: b,
      List: [],
      Menu_Name: "",
      Menu_Icon: "",
      child: [],
      Btn_Name:'',
      Btns:''
    };
  },
  created() {
    this.getChildMenu({
      Appid: this.Appid,
      Token: this.Token,
      MenuID: this.MenuID,
    });

    this.GetButtons({
      Appid: this.Appid,
      Token: this.Token,
      MenuCode: '5ed20159-d1ad-4bbe-92f3-e574d9d6be88',
      HideList:'123'
    })
  },
  mounted() {
    this.$bus.$on("sendBus", (Menu_ID) => {
      console.log(Menu_ID);
    });
  },
  methods: {
    getChildMenu(data) {
      getChildMenu(data).then((res) => {
        // console.log(res);
        this.List = res.data.List;
        // this.child=res.data.List[0].child.map(item=>{
        //   console.log(item.Menu_Name);
        // })
      });
    },
    clickMenu(item) {
      console.log(item);
      // if (this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
      //   this.$router.push(item.path)
      // }
    },
    GetButtons(data){
      GetButtons(data).then((res)=>{
        this.Buttons=JSON.parse(res.data.Buttons)
        console.log(this.Buttons);
      })
    }
      
  },
  computed: {
    // 没有子菜单
    noChildren() {
      return this.List.filter((item) => !item.child);
    },
    // 有子菜单
    hasChildren() {
      return this.List.filter((item) => item.child);
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-menu-item.is-active {
  color: #333;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  border: none;
}
.el-menu-item:hover {
  background: #eff5ff !important;
}
</style>