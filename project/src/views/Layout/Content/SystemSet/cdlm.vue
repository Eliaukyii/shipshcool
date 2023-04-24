<template>
  <div>
    <el-card>
      <el-button-group>
        <el-button type="success" size="small">添加</el-button>
        <el-button type="danger" size="small">删除</el-button>
        <el-button type="warning" size="small">复制</el-button>
        <el-button type="success" size="small">粘贴</el-button>
      </el-button-group>
      <el-tree
        :data="treeData"
        :props="defaultProps"
        node-key="id"
        :lazy="true"
        ref="tree"
        show-checkbox
        :default-expand-all="true"
        @node-click="handleNodeClick"
        :load="loadNode"
      >
      </el-tree>
    </el-card>
  </div>
</template>

<script>
import { getMenuList} from "@/api/index.js";
export default {
  data() {
    return {
      treeData: [],
      defaultProps: {
        children: "children",
        label: "Menu_Name",
      },
    };
  },
  created() {
    this.getMenuList()
  },
  mounted() {
  
  },
  methods: {
    handleNodeClick(data) {
     console.log(data.Menu_ID);
    },

     async getMenuList(){
      getMenuList().then((res) => {
      this.treeData = res.data.MenuList;
    });
   
     }
  },
  components: {},
};
</script>

<style scoped>
</style>
