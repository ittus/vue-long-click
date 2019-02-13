<template>
  <div id="app">
    <div class="content">
      <img alt="Vue logo" src="./assets/logo.png">
      <h3>Vue long-click (longpress) demo </h3>
      <demo />
    </div>
    <footer class="footer">
      <a href="https://github.com/ittus/vue-long-click" target="_blank">
        <strong>https://github.com/ittus/vue-long-click</strong>
      </a>
    </footer>
  </div>
</template>

<script>
import Demo from './components/Demo.vue'

export default {
  name: 'app',
  components: {
    Demo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html, body {
  height: 100%;
  margin: 0px;
}
#app {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1 0 auto;
}
.footer, a {
  flex-shrink: 0;
  background-color: #524644;
  padding: 10px;
  color: white;
}
</style>
