<template>
  <div>
    <el-card style="margin-top: 8px; margin-left: -8px">
      <el-transfer
        filterable
        :filter-method="filterMethod"
        filter-placeholder="搜索"
        v-model="value"
        :data="data"
      >
      </el-transfer>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    const generateData = () => {
      const data = [];
      const cities = ["上海", "北京", "广州", "深圳", "南京", "西安", "成都"];
      const pinyin = [
        "shanghai",
        "beijing",
        "guangzhou",
        "shenzhen",
        "nanjing",
        "xian",
        "chengdu",
      ];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index],
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
    };
  },
};
</script>

<style scoped>
</style>
