<template>
  <div>
    <el-dialog title="选择用户" :visible.sync="detailVisible">
      <div>
        <div style="padding: 20px">
          <el-button type="success">显示所有</el-button>
          <el-button type="success">全选</el-button>
          <el-button type="danger">取消全选</el-button>
        </div>
        <div style="padding-top: 20px">
          <el-col :span="6" :xs="24">
            <el-tree
              :data="list"
              :props="defaultProps"
              accordion
              @node-click="handleNodeClick"
            ></el-tree>
          </el-col>
          <el-col :span="18" :xs="24">
            <el-table
              :data="tableData"
              style="width: 100%"
              border="1"
              v-for="(item,index) in tableData"
              :key="index"
            >
              <el-table-column type="selection" width="55"> </el-table-column>
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
          </el-col>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { DeptList } from "@/api/index.js";

export default {
  data() {
    return {
      detailVisible: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      list: [],
      defaultProps: {
        children: "children",
        label: "DeptName",
      },
    };
  },
  created() {
    this.getDeptList(); //获取树列表
  },
  methods: {
    init(data) {
      this.detailVisible = true;
      //data是父组件弹窗传递过来的值，我们可以打印看看
      console.log(data);
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },

    handleNodeClick(data) {
      console.log(data.DeptName);
    },

    //树列表
    getDeptList() {
      let params = {
        pageIndex: 1,
        pageSize: 20,
      };
      DeptList(params).then((res) => {
        this.list = res.data.list;
        console.log(res.data);
      });
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
//设置弹框样式
/deep/ .el-dialog__body {
  padding: 0;
}
/deep/ .el-dialog__header {
  background-color: #2d6dcc;
}
/deep/ .el-dialog__title {
  color: #fff;
}
/deep/ .el-dialog__headerbtn .el-dialog__close {
  color: #fff;
}
/deep/.el-tree {
  width: 100%;
  overflow: scroll;
}
</style>

