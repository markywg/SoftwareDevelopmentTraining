<template>
  <div>
    <template>
      <!--表单-->
      <v-container>
        <v-form>
          <v-row>
            <v-col cols="12" md="3">
              <v-select
                v-model="sGrade"
                :items="option_sGrade"
                label="年级"
              ></v-select>
            </v-col>

            <v-col cols="12" md="3">
              <v-select
                v-model="sCollege"
                :items="option_sCollege"
                label="学院"
              ></v-select>
            </v-col>

            <v-col cols="12" md="3">
              <v-select
                v-model="sSex"
                :items="option_sSex"
                label="性别"
              ></v-select>
            </v-col>
            <v-col cols="12" md="3">
              <v-select
                v-model="sClass"
                :items="option_sClass"
                label="班级"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="3">
              <v-text-field v-model="sId" label="学号"></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="sName" label="姓名"></v-text-field>
            </v-col>
            <v-col cols="12" md="3"> </v-col>
            <v-col cols="12" md="3">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="mr-4" @click="submit" v-bind="attrs" v-on="on">
                    查询
                  </v-btn>
                </template>
                <span>若不选择条件则查看所有学生</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </template>

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

<script>
import axios from "axios";
import Vue from "vue";
export default {
  data: () => ({
    //表单
    option_sGrade: [
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2013",
      "2012",
      "2011",
    ],
    option_sCollege: [
      "机械与汽车工程学院",
      "建筑学院",
      "土木与交通学院",
      "电子与信息学院",
      "材料科学与工程学院",
      "化学与化工学院",
      "轻工科学与工程学院",
      "食品科学与工程学院",
      "数学学院",
      "物理与光电学院",
      "经济与贸易学院",
      "自动化科学与工程学院",
      "计算机科学与工程学院",
      "电力学院",
      "生物科学与工程学院",
      "环境与能源学院",
      "软件学院",
      "工商管理学院",
      "公共管理学院",
      "外国语学院",
      "法学院",
      "新闻与传播学院",
      "艺术学院",
      "体育学院",
      "设计学院",
      "医学院",
    ],
    option_sSex: ["男", "女"],
    option_sClass: ["1", "2", "3", "4", "5", "6"],
    sName: "",
    sId: "",
    sGrade: "",
    sCollege: "",
    sSex: "",
    sClass: "",
    errmsg: "",

    headers: [
      { text: "学号", value: "s_id" },
      { text: "姓名", value: "sname" },
      { text: "性别", value: "sex" },
      { text: "年级", value: "grade" },
      { text: "班级", value: "now_class" },
      { text: "手机号", value: "phone_number" },
      { text: "宿舍号", value: "bel_d_number" },
    ],
    desserts: [],
  }),
  methods: {
    submit() {
      console.log(
        this.$data.sGrade,
        this.$data.sSex,
        this.$data.sCollege,
        this.$data.sClass,
        this.$data.sId,
        this.$data.sName
      );
      axios
        .get("http://localhost:8080/api/user/dorm_get_student_information", {
          params: {
            s_id: this.sId,
            sname: this.sName,
            sex: this.sSex,
            school: this.sCollege,
            grade: this.sGrade,
            now_class: this.sClass,
          },
        })
        .then((res) => {
          this.$data.desserts = res.data;
          console.log(res);
        });
    },
  },
};
</script>