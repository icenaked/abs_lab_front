<template>
  <div>
    <!--setup与ref-->
    <div>
      <h1>setup与ref</h1>
      <h2>姓名：{{name}}</h2>
      <h2>年龄：{{age}}</h2>
      <h3>工作：{{academic.school}}'s {{academic.subject}}er</h3>
      <el-button @click="sayHello">speak</el-button>
      <el-button @click="changeAge">younger</el-button>
    </div>
    <hr/>
    <!--reactive-->
    <div>
      <h1>reactive</h1>
      <h2>工作：{{job.type}}</h2>
    </div>
    <hr/>
    <!--计算属性-->
    <div>
      <h1>计算属性</h1>
      <span>全名：{{fullName}}</span>
    </div>
    <hr/>
    <!--hook-->
    <div>
      <h1>hook</h1>
      <h2>鼠标坐标:x:{{point.x}}, y:{{point.y}}</h2>
    </div>
    <hr/>
    <!--模板-->
    <div>
      <h1>标题</h1>
    </div>
    <hr/>

  </div>
</template>

<script>
import {ref, reactive, computed, watchEffect, onMounted, onBeforeUnmount} from 'vue'
export default {
  name: "Vue3",
  //setup()里有两个参数props,context
  setup(){
    //这里的不是响应式的数据，不能改
    let name = "zyq"
    //用ref即可
    let age = ref(22)
    let academic = ref({
      school: 'NJU',
      subject: 'SE',
    })
    //reactive写法,用于对象与数组，ref的对象形式其实也求助了reactive
    let job = reactive({
      type: 'student',
    })
    let hobby = reactive(['xx','oo'])

    let data = reactive({
      person: {
        firstName: 'z',
        lastName: 'yq',
      }
    })

    let fullName = computed(()=>{
      return data.person.firstName + '-' +data.person.lastName
    })

    let point = reactive({
      x: 0,
      y: 0,
    })

    function sayHello(){
      alert(`hello,${name}!`)
    }

    function changeAge(){
      age.value = 18
      academic.value.subject = 'CS'
      job.type = 'adult'
    }

    //watchEffect里用到什么，就监视什么
    watchEffect(()=>{
      const x = age.value
      console.log("有指定的东西改变了！" + JSON.stringify(x))
    })

    onMounted(()=>{
      window.addEventListener('mousemove', (event)=>{
        point.x = event.pageX
        point.y = event.pageX
      })
    })

    onBeforeUnmount(()=>{
      window.removeEventListener('mousemove',(event)=>{
        point.x = event.pageX
        point.y = event.pageX
      })
    })

    return{
      name,
      age,
      academic,
      job,
      hobby,
      data,
      fullName,
      point,
      sayHello,
      changeAge,
    }

    //渲染函数
    //return ()=> h('h1','xxx')
  }
}
</script>

<style scoped>

</style>