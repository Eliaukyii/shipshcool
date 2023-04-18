<template>
  <div>
    <el-dialog title="选择用户" :visible.sync="detailVisible">
      <div>
        <div style="padding: 20px">
          <div style="float: left">
            <el-button type="success">显示所有</el-button>
            <el-button type="success">全选</el-button>
            <el-button type="danger">取消全选</el-button>
          </div>
          <div style="float: right">
            <el-button type="primary">保存</el-button>
            <el-button type="warning">返回</el-button>
          </div>
        </div>
        <div style="padding-top: 40px; height: 500px">
          <el-col :span="6" :xs="24" class="dialogDiv">
            <el-tree
              :data="treeData"
              :props="defaultProps"
              node-key="id"
              @node-click="handleNodeClick"
            >
            </el-tree>
          </el-col>
          <el-col :span="18" :xs="24" class="dialogDiv">
            <el-table
              :data="lists"
              ref="multipleTable"
              row-key="id"
              style="width: 100%"
              border
            >
              <el-table-column
                type="selection"
                width="55"
                :reserve-selection="true"
              >
              </el-table-column>
              <el-table-column prop="EmployeeID" label="DeptName" width="120">
              </el-table-column>
              <el-table-column prop="EmployeeName" width="120">
              </el-table-column>
              <el-table-column prop="IDCard"></el-table-column>
              <el-table-column
                prop="EmployeeCode"
                width="100"
              ></el-table-column>
            </el-table>
          </el-col>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { DeptList, EmployeeList } from "@/api/index.js";

export default {
  data() {
    return {
      detailVisible: false,
      tableData: [],
      treeData: [],
      lists: [],
      defaultProps: {
        children: "children",
        label: "DeptName",
      },
    };
  },
  created() {
    this.getDeptList();
    this.getEmployeeList();
  },
  methods: {
    init() {
      this.detailVisible = true;
      //data是父组件弹窗传递过来的值，我们可以打印看看
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },

    handleNodeClick(data) {
      this.currentSelect=data.DeptCode
      console.log(this.currentSelect);
      this.getEmployeeList();

    },

    //树列表
    getDeptList() {
      DeptList().then((res) => {
        this.treeData = res.data.list;
      });
    },
  

    //表格
    getEmployeeList() {
      EmployeeList().then((res) => {
        this.tableData = res.data.list;
        this.lists = this.tableData.filter((item) => item.DeptCode === "0001");
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
.dialogDiv {
  height: 500px;
  overflow: auto;
}
</style>

