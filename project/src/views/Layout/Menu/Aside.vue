<template>
  <div class="sidebar">
    <el-menu
      :default-active="toIndex()"
      router
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="#333"
    >
      <el-menu-item
        @click="clickMenu(item)"
        v-for="item in noChildren"
        :key="item.Menu_ID"
        :index="item.Menu_ID"
      >
        <i :class="`el-icon-${item.Menu_Icon}`"></i>
        <span slot="title">{{ item.Menu_Name }}</span>
      </el-menu-item>

      <el-submenu
        v-for="item in hasChildren"
        :key="item.Menu_ID"
        :index="item.Menu_ID"
      >
        <template slot="title">
          <i :class="`el-icon-${item.Menu_Icon}`"></i>
          <span slot="title">{{ item.Menu_Name }}</span>
        </template>
        <el-menu-item-group
          v-for="subItem in item.child"
          :key="subItem.Menu_ID"
        >
          <el-menu-item
            @click="clickMenu(subItem)"
            :index="subItem.Menu_ID"
            >{{ subItem.Menu_Name }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { GetButtons,getChildMenu} from "@/api/index.js";

export default {
  data() {
    let a = sessionStorage.getItem("Token");
    return {
      defaultActive:'',
      Appid: "312502",
      Token: a,
      List: [],
      Menu_Name: "",
      Menu_Icon: "",
      child: [],
      Btn_Name: "",
      Btns: "",
    };
  },
  created() {
    this.GetButtons({
      Appid: this.Appid,
      Token: this.Token,
      MenuCode: "5ed20159-d1ad-4bbe-92f3-e574d9d6be88",
      HideList: "123",
    });
  },
  mounted() {
    this.$bus.$on("sendMenuID", (Menu_ID) => {
     this.MenuID=Menu_ID
      this.getChildMenu({
      Appid: this.Appid,
      Token: this.Token,
      MenuID: this.MenuID,
    })
    })
  },
  methods: {
  toIndex(){
    return this.$route.path.split('/')[2];
  },

    getChildMenu(data) {
      getChildMenu(data).then((res) => {
        if (res.status == "200") {
          if (res.data.Code == "00") {
            console.log(res);
            this.List = res.data.List;
          }
        }
      })
    },

    clickMenu(item) {
      console.log(item);
//           this.$router.options.routes.map((item) => {
//         console.log(item.children);
// });

    },
    GetButtons(data) {
      GetButtons(data).then((res) => {
        console.log(res);
        // this.Buttons = JSON.parse(res.data.Buttons);
        // console.log(this.Buttons);
      });
    },
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