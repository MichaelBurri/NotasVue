import Vue from "vue"
import App from "./App.vue"

import { BootstrapVue } from "bootstrap-vue"
import { IconsPlugin }  from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false

// eslint-disable-next-line vue/require-name-property
new Vue({
  render: h => h(App),
}).$mount("#app")
