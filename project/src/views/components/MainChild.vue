<template>
  <div>
   <el-dialog :visible.sync="dialogFormVisible" :rowaa=row>
     
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
        dialogFormVisible: false,
        row:''
    }
  },
  methods: {
    rowClick(row) {
      this.dialogFormVisible = true;
      this.row=row
    },
  },
  components: {

  }
}
</script>

<style scoped>

</style>
