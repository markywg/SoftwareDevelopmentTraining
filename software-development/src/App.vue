<template>
  <admin-main />
</template>

<script lang="ts">
import Vue from "vue";
import adminMain from "./views/AdminMain.vue"

export default Vue.extend({
  name: "App",
  components: {
    adminMain
  },
  data: () => ({
    //
  }),
});
</script>
