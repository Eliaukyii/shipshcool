<template>
  <div>
    <el-button type="primary" @click="getTableData">获取表格数据</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    getTableData() {
      axios.get("/api/getTableData");
    },
  },
};
