import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import zhHans from "vuetify/src/locale/zh-Hans";

import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md" || "fa",
  },
  lang: {
    locales: { zhHans },
    current: "zhHans",
  },
});
