<template>
<div>
  <h2>sum:{{$store.state.count.sum}}</h2>
  <h3>sum*10={{$store.getters.bigSum}}</h3>
  <select v-model.number="n">
    <option :value="1">1</option>
    <option :value="2">2</option>
    <option :value="3">3</option>
  </select>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementOdd">求和为奇数再加</button>
  <button @click="incrementWait">等一会再加</button>
</div>
</template>

<script>
export default {
  name: "Count",
  data(){
    return{
      n: 1,
    }
  },
  methods: {
    increment(){
      console.log(this.$store.state.count.sum)
      this.$store.commit('JIA', this.n)
    },
    decrement(){
      this.$store.commit('JIAN', this.n)
    },
    incrementOdd(){
        this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait(){
        this.$store.dispatch('jiaWait', this.n)
    },
  },
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>