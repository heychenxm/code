<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <tester />
    <MyModel v-model="message"/>
    <Myslot :user="user">
      <div>This is outside slot</div>
      <template v-slot:header>
        <h1>HEADER</h1>
      </template>
      <template v-slot:footer>
        <h2>{{message}}</h2>
      </template>
      <h1>hello world</h1>
    </Myslot>
    <async-example></async-example> -->
    <Parentcomponent>
      <Childcomponent></Childcomponent>
    </Parentcomponent>
  </div>
</template>

<script>
// import Childcomponent from './components/Childcomponent.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Tester from './components/Tester.vue'
// import MyModel from './components/MyModel.vue'
// import Myslot from './components/Myslot.vue'
// import './components/Asyncexample'
import Childcomponent from './components/Childcomponent.vue'
import Parentcomponent from './components/Parentcomponent.vue'

export default {
  name: 'App',
  data: function() {
    return {
      message: "hello world message",
      user: {
        name: "陈小名"
      }
    }
  },
  components: {
    // HelloWorld,
    // Tester,
    // MyModel,
    // Myslot,
    Parentcomponent,
    Childcomponent
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
