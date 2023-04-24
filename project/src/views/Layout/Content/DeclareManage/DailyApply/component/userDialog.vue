<template>
  <div>
    <el-dialog title="选择用户" :visible.sync="detailVisible">
      <div>
        <div style="padding: 20px">
          <div style="float: left">
            <el-button type="success" size="small">显示所有</el-button>
            <el-button type="success" size="small">全选</el-button>
            <el-button type="danger" size="small">取消全选</el-button>
            <input
              type="text"
              placeholder="输入工号/姓名"
              style="
                height: 28px;
                line-height: 28px;
                width: 150px;
                margin-left: 10px;
              "
            />
          </div>
          <div style="float: right">
            <span style="color: red; margin-right: 8px">已选择 {{count}} 人</span>
            <el-button type="primary" size="small">保存</el-button>
            <el-button type="warning" size="small">返回</el-button>
          </div>
        </div>
        <div style="padding-top: 40px; height: 500px">
          <el-col :span="6" :xs="24" class="dialogDiv">
            <el-tree
              :data="treeData"
              :props="defaultProps"
              node-key="id"
              ref="tree"
              @node-click="handleNodeClick"
            >
            </el-tree>
          </el-col>
          <el-col :span="18" :xs="24" class="dialogDiv">
            <el-table
              :data="
                tableData
                  ? tableData.slice(
                      (pageIndex - 1) * pageSize,
                      pageIndex * pageSize
                    )
                  : []
              "
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
              <el-table-column
                prop="EmployeeID"
                :label="SelectName"
                width="120"
              >
              </el-table-column>
              <el-table-column prop="EmployeeName" width="120">
              </el-table-column>
              <el-table-column prop="IDCard"></el-table-column>
              <el-table-column
                prop="EmployeeCode"
                width="100"
              ></el-table-column>
            </el-table>
            <el-pagination
              align="right"
              :total="total"
              :page.sync="pageIndex"
              :limit.sync="pageSize"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              layout="total, prev, pager, next"
            ></el-pagination>
          </el-col>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { DeptList, EmployeeList } from "@/api/systemManage.js";

export default {
  data() {
    return {
      total: 0,
      pageIndex: 1,
      pageSize: 10,
      detailVisible: false,
      tableData: [],
      treeData: [],
      defaultProps: {
        children: "children",
        label: "DeptName",
      },
      TreeParams: {
        pageIndex: 1,
        pageSize: 62,
      },
      TableParams: {
        pageIndex: 1,
        pageSize: 1818,
      },
      SelectName: "",
      count:'',
      multipleSelection:[],
    };
  },
  created() {
    this.getDeptList();
  },

  methods: {
    init() {
      this.detailVisible = true;
    },

    handleNodeClick(data) {
      this.SelectCode = data.DeptCode;
      this.tableData = this.getEmployeeList();
      this.SelectName = data.DeptName;
    },

    //渲染树列表
    getDeptList() {
      let TreeParams = {
        pageIndex: this.TreeParams.pageIndex,
        pageSize: this.TreeParams.pageSize,
      };
      DeptList(TreeParams).then((res) => {
        this.treeData = res.data.list;
        this.SelectCode = this.treeData[0].DeptCode;
        this.SelectName = this.treeData[0].DeptName;
        this.getEmployeeList(this.SelectCode);
      });
    },

    //渲染表格列表
    getEmployeeList() {
      let TableParams = {
        pageIndex: this.TableParams.pageIndex,
        pageSize: this.TableParams.pageSize,
      };
      EmployeeList(TableParams).then((res) => {
        this.tableData = res.data.list.filter(
          (item) => item.DeptCode === this.SelectCode
        );
        this.total = this.tableData.length;
      });
    },

    //表格分页器
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageIndex = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageIndex = val;
    },

    //全选

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

/deep/ .el-input__inner {
  border: 1px solid #ccc;
}
.dialogDiv {
  height: 500px;
  overflow: auto;
}
</style>