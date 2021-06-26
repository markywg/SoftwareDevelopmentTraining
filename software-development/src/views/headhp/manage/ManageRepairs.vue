<template>
  <div>
    <v-container>
      <template>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
          v-model="selected"
          :single-select="singleSelect"
          item-key="repair_ID"
          show-select
        ></v-data-table>
      </template>

      <p>&ensp;</p>
      <v-row>
        <v-col cols="12" md="1" offset="11">
          <v-dialog transition="dialog-bottom-transition" max-width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" v-bind="attrs" v-on="on" @click="submit"
                >上报</v-btn
              >
            </template>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="primary" dark>提示</v-toolbar>
                <v-card-text>
                  <div class="text-h2 pa-12">提交成功</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn
                    text
                    color="green"
                    @click="(dialog.value = false), refresh"
                    >关闭</v-btn
                  >
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
        <v-col>&ensp;</v-col>
      </v-row>
    </v-container>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  data() {
    return {
      singleSelect: false,
      dialog: false,
      selected: [],

      headers: [
        { text: "报修单号", value: "repair_ID" },
        { text: "报修物品", value: "repair_item" },
        { text: "宿舍楼", value: "report_from_B_name" },
        { text: "宿舍号", value: "report_from_D_number" },
        { text: "学生姓名", value: "report_S_name" },
        { text: "学生联系电话", value: "report_phone_number" },
        { text: "报修时间", value: "report_time " },
      ],
      desserts: [],
    };
  },
  methods: {
    submit() {
      console.log(this.$data.selected);

      var list_ID = [];
      for (var i in this.$data.selected) {
        list_ID.push(this.$data.selected[i].S_ID);
      }
      for (i = 0; i < list_ID.length; i++) {
        axios
          .get("http://localhost:8080/api/user/dorm_get_student_information", {
            params: {
              repair_ID: list_ID[i],
            },
          })
          .then((res) => {
            this.$data.desserts = res.data;
            console.log(res);
          });
      }
    },
    //更新数据
    refresh() {
      axios
        .get("http://localhost:8080/api/deal_dormitory_service/get_repair", {
          params: {},
        })
        .then((res) => {
          this.$data.desserts = res.data;
          console.log(this.$data.desserts);
        });
    },
  },
  mounted() {
    this.refresh();
  },
};
</script>