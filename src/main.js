import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store'
import RadListView from 'nativescript-ui-listview/vue';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  'PullToRefresh',
  () => require('@nstudio/nativescript-pulltorefresh').PullToRefresh
);

Vue.registerElement(
  'CheckBox',
  () => require('@nstudio/nativescript-checkbox').CheckBox,
  {
    model: {
      prop: 'checked',
      event: 'checkedChange'
    }
  }
);

Vue.use(RadListView);

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
