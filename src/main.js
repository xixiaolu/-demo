import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'lib-flexible';
import { Overlay,Button,IndexBar, IndexAnchor,Cell, CellGroup} from 'vant';
Vue.use(Button);
Vue.use(Overlay);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
Vue.use(CellGroup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
