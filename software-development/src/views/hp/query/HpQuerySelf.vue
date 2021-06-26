<template>
  <v-container>
    <v-simple-table style="align='center">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">工号</th>
            <th class="text-left">姓名</th>
            <th class="text-left">性别</th>
            <th class="text-left">管理楼栋</th>
            <th class="text-left">月薪</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.H_ID">
            <td>{{ item.H_ID }}</td>
            <td>{{ item.H_name }}</td>
            <td>{{ item.H_sex }}</td>
            <td>{{ item.admin_B_name }}</td>
            <td>{{ item.slary }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      desserts: "",
    };
  },
  mounted() {
    axios({
      method: "get",
      url: "http://httpbin.org/",
    }).then((res) => {
      this.$data.desserts = res.data;
      console.log(this.$data.desserts);
    });
  },
};
</script>
