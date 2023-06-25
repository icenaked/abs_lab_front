<template>
<div>
  草稿纸
  <div>
    <el-button @click="change">
      chuli
    </el-button>
    <el-dialog
        title="提示"
        :visible.sync=a
    >
      ???
    </el-dialog>
  </div>
</div>
</template>

<script>
export default {
  name: "experiment",
  data(){
    return{
      a: false,
    };
  },
  methods:{
    change(){
      this.a = true
      console.log('a: '+this.a)
    }
  }
}
</script>

<style scoped>

</style>