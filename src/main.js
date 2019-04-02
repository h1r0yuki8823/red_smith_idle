import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import VeeValidate, {Validator} from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja'


Vue.use(VeeValidate, { locale: ja});
Validator.localize('ja', ja);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
