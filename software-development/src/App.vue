<template>
  <Admin />
</template>

<script lang="ts">
import Vue from "vue";
import Login from "./views/Login.vue"
import Admin from "./views/Admin.vue"

export default Vue.extend({
  name: "App",
  components: {
    Admin,
    Login
  },
  data: () => ({
    //
  }),
});
</script>
