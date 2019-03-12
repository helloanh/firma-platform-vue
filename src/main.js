import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Navigation from './Navigation.vue'
// import Map from './Map.vue'


Vue.component('nav-component', Navigation);
Vue.component('home-component', Home);
// Vue.component('roadmap-component', Map);

new Vue({
  el: '#app',
  render: h => h(App)
})
