<template>
<div class="todo-footer" v-show="total">
  <label>
    <input type="checkbox" :checked="isAll" @change="checkAll"/>
  </label>
  <span>
    <span>completed {{totalDone}}</span> (all {{total}})
  </span>
  <button class="btn btn-danger" @click="clearAll">clear all completed task</button>
</div>
</template>

<script>
export default {
  name: "MyFooter",
  props:["todos"],
  computed:{
    total(){
      return this.todos.length
    },

    totalDone(){
      let i=0
      this.todos.forEach((todo)=>{
        if(todo.done) i++
      })
      return i
      //高端写法👇
      // return this.todos.reduce((pre,oneTodo)=> pre + (oneTodo.done ? 1: 0),0)
    },

    isAll(){
      return this.total===this.totalDone && this.total>0
    },

  },
  methods:{
    checkAll(e){
      //this.checkAllTodo(e.target.checked)
      this.$emit('checkAllTodo',e.target.checked)
    },
    clearAll(){
      if(confirm('confirm clear all completed tasks?')){
        //this.clearAllTodo()
        this.$emit('clearAllTodo')
      }
    }
  }
}
</script>

<style scoped>
.todo-footer{
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label{
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input{
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button{
  float: right;
  margin-top: 5px;
}
</style>