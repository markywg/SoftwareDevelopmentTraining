<template>
  <v-app>
    <select></select>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Select from "./components/Select.vue"


export default Vue.extend({
  name: "App",
  components: {
    Select
  },
  data: () => ({
    //
  }),
});
</script>
