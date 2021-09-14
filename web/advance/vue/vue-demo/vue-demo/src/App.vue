<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <tester />
    <MyModel v-model="message"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Tester from './components/Tester.vue'
import MyModel from './components/MyModel.vue'

export default {
  name: 'App',
  data: function() {
    return {
      message: "hello world"
    }
  },
  components: {
    // HelloWorld,
    Tester,
    MyModel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
