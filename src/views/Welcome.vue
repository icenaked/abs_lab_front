<template>
  <div>
    <div>
      hello
      <el-button  @click="gotologIn">登录</el-button>
    </div>



  </div>

</template>

<script>
export default {
  name: "Welcome",
  methods:{
    gotologIn(){

      //点击跳转至上次浏览页面
      // this.$router.go(-1)

      //指定跳转地址
      this.$router.push('/login')
    }
  }
}

</script>

<style scoped>

</style>