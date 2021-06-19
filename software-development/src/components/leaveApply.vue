
<template>
  <html>
    <body>
      <v-form id="leaveInfo">
        <v-container>
          <!-- 离校原因下拉框 -->
          <v-row>
            <v-col>&nbsp; </v-col>
            <v-col cols="12" md="3">
              <v-select
                v-model="select"
                :items="items"
                :rules="[(v) => !!v || '请选择离校原因']"
                label="离校原因"
                dense
                solo
                required
              ></v-select>
            </v-col>
            <v-col>&nbsp; </v-col>
          </v-row>
          <!-- 其他原因填写 -->
          <v-row>
            <v-col>&nbsp; </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-if="select == '其他'"
                :rules="[(v) => !!v || '请填写原因']"
                label="其他原因填写"
                v-model="otherReason"
                dense
                solo
                required
              >
              </v-text-field>
            </v-col>
            <v-col>&nbsp; </v-col>
          </v-row>
          <!-- 离校时间选择 -->
          <v-row>
            <v-col>&nbsp; </v-col>
            <v-col cols="12" md="3">
              <v-menu
                :close-on-content-click="false"
                :return-value.sync="leaveDate"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="leaveDate"
                    :rules="[(v) => !!v || '请选择离校时间']"
                    label="离校时间"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    dense
                    solo
                    required
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="leaveDate"
                  no-title
                  scrollable
                  required
                  :min="curDate()"
                >
                  <v-spacer></v-spacer>

                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    确认
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col>&nbsp; </v-col>
          </v-row>
          <v-row>
            <v-col>&nbsp; </v-col>
            <v-col cols="12" md="3">
              <v-btn class="mr-4" @click="submit" rounded color="primary" dark>
                提交申请
              </v-btn>
            </v-col>
            <v-col>&nbsp; </v-col>
          </v-row>
          <v-row>
            <v-col>&nbsp; </v-col>
            <v-col cols="12" md="3">
              <p :class="['caption','red--text']"
              transition="scale-transition">
                {{errmsg}}
              </p>
            </v-col>
            <v-col>&nbsp; </v-col>
          </v-row>
        </v-container>
      </v-form>
    </body>
  </html>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  data: () => ({
    select: "",
    items: ["毕业", "请假", "其他"],
    otherReason: "",
    leaveDate: "",
    errmsg: "",
  }),
  methods: {
    submit() {
      if (this.$data.select == "") {
        this.$data.errmsg = "请选择离校原因";
        return false;
      }
      if(this.$data.select=="其他"&&this.$data.otherReason==""){
        this.$data.errmsg="请填写离校原因";
        return false;
      }
      if(this.$data.leaveDate==""){
        this.$data.errmsg="请选择离校日期";
        return false;
      }
      this.$data.errmsg="";
      console.log(this.$data);
      axios({
        method: "get",
        url: "http://httpbin.org/",
        params: this.$data,
      }).then((res) => {
        this.desserts = res.data;
        console.log(res.data);
      });
    },
    curDate() {
      var curDate = new Date();
      var allowedDates =
        curDate.getFullYear() +
        "-" +
        (curDate.getMonth() + 1 < 10
          ? "0" + (curDate.getMonth() + 1)
          : curDate.getMonth() + 1) +
        "-" +
        curDate.getDate();
      return allowedDates;
    },
  },
};
</script>