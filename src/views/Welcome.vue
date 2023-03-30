<template>
  <div>
    <div style="margin-top: 10px">
      hello
      <el-button  @click="gotologIn">登录</el-button>
    </div>
    <div style="margin-top: 10px">
      hello
      <el-button  @click="gotoVueLab">vue实验</el-button>
    </div>
    <div style="margin-top: 10px">
      hello
      <el-button  @click="gotoVue3Lab">vue3实验</el-button>
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
    },
    gotoVueLab(){

  //点击跳转至上次浏览页面
  // this.$router.go(-1)

  //指定跳转地址
  this.$router.push('/VueLab')
},
    gotoVue3Lab(){
      this.$router.push('/vue3')
    }
  }
}

</script>

<style scoped>

</style>