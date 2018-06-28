import Vue from "vue"
import App from "./App.vue"
import Profile from "./components/profile"

new Vue({
  el: "#app",
  components: { Profile },
  render: h => h(App)
})
