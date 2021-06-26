<template>
  <div>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-container>
  </div>
</template>

<script >
import Vue from "vue";
import axios from "axios";
export default {
  data: () => ({
    headers: [
      { text: "通知标题", value: "N_title" },
      { text: "发布的宿管姓名", value: "write_H_name" },
      { text: "发布时间", value: "publish_time" },
      { text: "内容", value: "content" },
    ],
    desserts: [
      // {
      //   N_title: "新通知啊实打实多",
      //   write_H_name: "阿萨德",
      //   publish_time: "2021年1月1日",
      //   content:
      //     "清按时豆腐加三分暗示法司法发发呆防守打撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊/n阿诗丹顿多多多多多多多多多多多多多多多啊实打实大所多啊实打实多阿斯顿点点滴滴",
      // },
    ],
  }),
  mounted() {
    axios
      .get("http://localhost:8080/api/deal_dormitory_service/get_notice", {
        params: {},
      })
      .then((res) => {
        this.$data.desserts = res.data;
        console.log(res);
      });
  },
};
</script>