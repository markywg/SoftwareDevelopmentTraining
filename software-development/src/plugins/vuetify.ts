import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import zhHans from "vuetify/src/locale/zh-Hans";
import colors from 'vuetify/es5/util/colors'

import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

Vue.component('my-component', {
  methods: {
      changeLocale () {
          this.$vuetify.lang.current = 'sv'
      }
  }
})

export default new Vuetify({
  icons: {
    iconfont: "md" || "fa",
  },
  lang: {
    locales: { zhHans },
    current: "zhHans",
  },
  theme: {
    themes: {
        light: {
            primary: localStorage.getItem('lightPrimary') || '#6200ee',
            secondary: localStorage.getItem('lightSecondary') || '#FFC107',
            accent: '#232f34',
            divder: '#fafafa',
            error: colors.red.base
        }
    }
}
});
