<template>
  <div class="container">
    <p class="counter">{{counter}}</p>
    <div class="actions">
      <div class="actions-inner">
        <button
          v-longclick="() => changeValue(1)"
          @click="changeValue(1)">+</button>
        <button
          v-longclick="() => changeValue(-1)"
          @click="() => changeValue(-1)">-</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    counter: 0
  }),
  methods: {
    changeValue (amount) {
      console.log(`Change amount by ${amount}`) // eslint-disable-line
      this.counter = this.counter + amount
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: 0 0 25px rgba(0,0,0,0.08);
  transform: translateX(-50%) translateY(-50%);
  width: 300px;
  height: 200px;
  padding-bottom: 20px;
}

.counter {
  text-align: center;
  font-size: 40px;
  margin-bottom: 15px;
  color: #4B1248;
}

button {
/*   margin-right: 5px; */
  padding: 10px 15px;
  font-size: 20px;
  background-color: #42b983;
  border: 1px solid #42b983;
  outline: none;
  margin: 5px;
  width: 100px;
  color: white;
}

button:hover {
  opacity: .8;
  cursor: pointer;
}

.actions-inner {
  display: flex;
  justify-content: center
}
</style>
