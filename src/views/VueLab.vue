<template>

  <el-container class="layout-container-demo" style="height: 500px">
    <el-header style=" font-size: 24px; text-align: right">
      <div class="toolbar">
        <el-icon id="home" @click="goHome"><House/></el-icon>
        <el-dropdown style="text-align: right">
          <el-icon style="margin-right: 8px; margin-top: 1px; font-size: 24px;cursor:pointer">
            <Setting/>
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>zyq</span>
      </div>
    </el-header>


    <el-container>
      <el-aside>
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><aim /></el-icon>基础知识
              </template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
                <el-menu-item index="1-3">Option 3</el-menu-item>
              <el-sub-menu index="1-4">
                <template #title>Option4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><star /></el-icon>炫酷案例
              </template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
                <el-menu-item index="2-3">Option 3</el-menu-item>
              <el-sub-menu index="2-4">
                <template #title>Option 4</template>
                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title >
                <el-icon @click="gotoDraft"><editPen /></el-icon>草稿纸
              </template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
                <el-menu-item index="3-3">Option 3</el-menu-item>
              <el-sub-menu index="3-4">
                <template #title>Option 4</template>
                <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <el-main class="leftAlign">
        <el-scrollbar>
        <!-- -->
        <!--list示例-->
        <div>
          <h1>list示例</h1>
          <div>遍历数组</div>
          <ul>
            <li v-for="p in persons" :key="p.id" >
              {{p.id}}-{{p.name}}--{{p.age}}
            </li>
          </ul>
          <ul>
            <li v-for="(p,index) in persons" :key="index" >
              {{p.id}}-{{p.name}}--{{p.age}}
            </li>
          </ul>
          <div>遍历对象</div>
          <ul>
            <li v-for="(value,k) in car" :key="k" >
              {{k}} : {{value}}
            </li>
          </ul>
          <div>遍历字符串</div>
          <ul>
            <li v-for="(char,k) in str" :key="k" >
              {{k}} : {{char}}
            </li>
          </ul>
          <div>遍历指定次数</div>
          <ul>
            <li v-for="(number,k) in 5" :key="k" >
              {{k}} : {{number}}
            </li>
          </ul>
          <div>列表过滤/排序</div><br/>
          <el-input placeholder="输入姓名搜索" v-model="keyWord" style="width: 200px; margin-right: 20px"></el-input>
          <el-button @click="sortType = 2">年龄升序</el-button>
          <el-button @click="sortType = 1">年龄降序</el-button>
          <el-button @click="sortType = 0">恢复原序</el-button>
          <ul>
            <li v-for="p in filFamous" :key="p.id" >
              {{p.id}}-{{p.name}}--{{p.age}}
            </li>
          </ul>
        </div>
        <hr/>
        <!--list操作-->
        <div>
          <h1 class="leftAlign">list操作</h1>
          <el-button @click="show = !show">隐藏</el-button>
          <el-button @click="list.push(list.length + 1)">Push</el-button>
          <el-button @click="list.pop()">Pop</el-button>
          <el-button @click="list.reverse()">反转</el-button>

          <ul v-if="show && list.length" class="leftAlign">
            <li v-for="item of list" :key="item">{{ item }}</li>
          </ul>
          <p v-else-if="list.length">躲起来</p>
          <p v-else>List is empty.</p>
        </div>
        <hr/>
        <!--单双向绑定-->
        <div>
          <h1>单双向绑定</h1>
          <!--单向绑定中v-bind可省略-->
          单向数据绑定：<br/><br/><el-input type="text" :value="bind.name"></el-input><br/><br/>
          双向数据绑定：<br/><br/><el-input type="text" v-model="bind.name"></el-input>
        </div>
        <hr/>
        <!--事件-->
        <div>
          <h1>事件</h1>
          <el-button v-on:click="showInfo1">我来也！(不传参弹窗)</el-button><br/><br/>
          <div>
            <el-input v-model="input" placeholder="请输入姓名" style="width: 100px; margin-right: 20px"></el-input>
            <el-button @click="showInfo2($event,input)">我来也！(传参弹窗)</el-button>
          </div>
        </div>
        <hr/>
        <!--计算属性-->
        <h1>计算属性</h1>
        <div>
          姓： <el-input v-model="firstName" placeholder="请输入姓" style="width: 100px; margin-right: 20px"></el-input><br/><br/>
          名： <el-input v-model="lastName" placeholder="请输入名" style="width: 100px; margin-right: 20px"></el-input><br/><br/>
          计算属性猜你的全名是：<span>{{fullName}}</span><br/><br/>
          计算属性（简写）猜你的全名是：<span>{{fullNam}}</span>
        </div>
        <hr/>
        <!--lab1-->
        <h1>lab1</h1>
        <ElCard class="project-card" shadow="hover">
          <template #header>
            <span>{{projCard.name}}</span>
          </template>
          <div>描述：{{projCard.description}}</div>
          <ElTooltip class="item" effect="dark" :content="gitRemoteUrl" placement="top">
            <div class="link">链接：<a class="url" @click.stop.prevent="copy(gitRemoteUrl)">{{gitRemoteUrl}}</a></div>
          </ElTooltip>
        </ElCard>
        <hr/>
        <!--绑定class样式-->
        <h1>绑定class样式</h1>
        <div>
          <div class="basic" :class="mood" @click="changeMood">点我随机变色</div>
        </div>
        <hr/>
        <!--条件渲染-->
        <div>
          <h1>条件渲染</h1>
          当前的n为：{{n}}
          <el-button @click="n++">不知名按钮</el-button><br/><br/>
          <!--template配合v-if使用，不能和v-show一起用，实际效果为去掉这一层结构包装，所以新vue文件template里必须再写一个div才能用-->
          <template v-if="n === 1">
            不错。
          </template>
          <template v-else-if="n === 2">
            不对劲..
          </template>
          <template v-else-if="n === 3">
            救命！！
          </template>
          <template v-else>
            ...(无人回应)
          </template>
        </div>
        <hr>
        <!--收集表单数据-->
        <div>
          <h1>收集表单数据</h1>
          <el-form @submit.prevent="demo">
            <!--trim去空格，number保证年龄为数字-->
            账号:<el-input class="smallInput" type="text" v-model.trim="userInfo.account"></el-input><br/><br/>
            密码:<el-input class="smallInput" type="password" v-model="userInfo.password"></el-input><br/><br/>
            年龄:<el-input class="smallInput" type="number" v-model.number="userInfo.age"></el-input><br/><br/>
            性别：
            <el-radio-group v-model="userInfo.sex">
              <el-radio label="male">男</el-radio>
              <el-radio label="female">女</el-radio>
            </el-radio-group>
            <br/><br/>
            爱好：
            <el-checkbox v-model="userInfo.hobby" label="cs"></el-checkbox>
            <el-checkbox v-model="userInfo.hobby" label="lol"></el-checkbox>
            <el-checkbox v-model="userInfo.hobby" label="mhwi"></el-checkbox>
            <br/><br/>
            所属校区
            <select v-model="userInfo.city">
              <option value="">请选择</option>
              <option value="beijing">北京</option>
              <option value="shanghai">上海</option>
              <option value="shenzhen">深圳</option>
              <option value="wuhan">武汉</option>
            </select>
            <br/><br/>
            其他信息：
            <!--lazy不实时收集，适用于个人简介这种要写很长时间的文字-->
            <textarea v-model.lazy="userInfo.other"></textarea><br/><br/>
            <el-checkbox v-model="userInfo.agree">阅读并接受</el-checkbox>
            <a href="https://www.baidu.com">《用户协议》</a>
            <el-button native-type="submit" style="margin-left: 20px">提交</el-button>
          </el-form>
        </div>
        <hr/>
        <!--过滤器-->
        <div>
          <h1>过滤器</h1>
          现在是{{fmtTime}}(计算属性)
          <br/>
          现在是{{time}}(过滤器vue3中已废除)
        </div>
        <hr/>
        <!--自定义v-zyq-->
        <div>
          <h1>自定义v-zyq</h1>
          <span v-zyq="822"></span>
        </div>
        <hr/>
        <!--生命周期-->
        <div>
          <h1>生命周期</h1>
                      <!--此处可简写{opacity}-->
          <h2 :style="{opacity: opacity}">welcome!!</h2>
        </div>
        <hr/>
        <!--todoList-->
        <div>
          <h1>todoList</h1>
          <div class="todo-container">
            <div class="todo-wrap">
              <MyHeader :addTodo="addTodo"/>
              <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
              <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
            </div>
          </div>
        </div>
        <hr/>
        <!--模板-->
        <div>
          <h1>标题</h1>
        </div>
        <hr/>

        </el-scrollbar>
      </el-main>

    </el-container>

  </el-container>

</template>

<script>
import dayjs from "@/utils/dayjs.min"
import MyFooter from "@/views/component/MyFooter";
import MyHeader from "@/views/component/MyHeader";
import MyList from "@/views/component/MyList";
export default {
  name: "VueLab",
  components:{MyList,MyHeader,MyFooter},
  data() {
    return {
      activeIndex: "1",
      persons : [
        {id:'001',name:"张三",age:18},
        {id:'002',name:"李四",age:19},
        {id:'003',name:"王五",age:28}
      ],
      famous : [
        {id:'001',name:"马冬梅",age:18,sex:'女'},
        {id:'002',name:"周冬雨",age:30,sex:'女'},
        {id:'003',name:"周杰伦",age:40,sex:'男'},
        {id:'004',name:"温兆伦",age:21,sex:'男'},
      ],
      sortType: 0,
      keyWord:"",
      car: {
        name : 'bmw',
        price : '1000w',
        color : 'black'
      },
      str : "zhangyueqi",
      show: true,
      list: [1, 2, 3],
      bind : {
        name : "单项绑定也可写为v-bind:value=\"name\"(v-bind可省略)"
      },
      input : "",
      firstName:"",
      lastName:"",
      projCard:{
        name: "66",
        description:"xx",
      },
      mood:"normal",
      n:0,
      userInfo:{
        account:"",
        password:"",
        age:"",
        sex:"",
        hobby:[],
        city:"beijing",
        other:"",
        agree:"",
      },
      time: 1621561377603,
      opacity: 0.5,
      todos:[
        {id:'001',title:'吃饭',done:true},
        {id:'002',title:'睡觉',done:false},
        {id:'003',title:'训练',done:true}
      ],
    };
  },
  computed:{
    fullName:{
      get(){
        return this.firstName+'-'+this.lastName
      },
      set(value){
        const arr=value.split('-')
        this.firstName=arr[0]
        this.lastName=arr[1]
      }
    },
    // 只考虑读取，不考虑修改的时候可以用计算属性的简写
    fullNam(){
      return this.firstName+this.lastName
    },
    filFamous(){
      const arr= this.famous.filter((p)=>{
        return p.name.indexOf(this.keyWord) !== -1
      })
      if(this.sortType){
        arr.sort((p1,p2)=>{
          return this.sortType ===1 ? p2.age-p1.age : p1.age-p2.age
        })
      }
      return arr
    },
    fmtTime(){
      return dayjs(this.time).format('YYYY-MM-DD hh:mm:ss')
    }
  },
  // watch:{
  //   keyWord:{
  //     immediate: true,
  //     handler(val){
  //       this.filFamous = this.famous.filter((p)=>{
  //         return p.name.indexOf(val) !== -1
  //       })
  //     }
  //   }
  // },
  directives:{
    zyq(element,binding){
      element.innerText=binding.value+20010000
    }
  },
  methods:{
    showInfo1(){
      alert("泥豪\\(@^0^@)/")
    },
    showInfo2(event,name){
      alert(name+"泥豪\\(@^0^@)/")
    },
    goHome(){
      this.$router.push('/welcome')
    },
    gotoDraft(){
      this.$router.push('/draft')
    },
    changeMood(){
      const arr=['happy','sad','normal']
      const index=Math.floor(Math.random()*3)
      this.mood = arr[index]
    },
    demo(){
      alert("nb!")
      console.log(JSON.stringify((this.userInfo)))
    },
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id===id) todo.done = !todo.done
      })
    },
    deleteTodo(id){
      this.todos= this.todos.filter( todo => todo.id !==id)
    },
    checkAllTodo(done){
      this.todos.forEach(todo=>{
        todo.done=done
      })
    },
    clearAllTodo(){
      this.todos = this.todos.filter(todo => !todo.done)
    }
  },
  mounted(){
      setInterval(()=>{
        this.opacity-=0.01
        if(this.opacity<=0) this.opacity=1
      },16)
    }
}


</script>

<style>
.leftAlign{
  text-align: left
}
.project-card {
  width: calc(33% - 24px);
  margin: 12px;
  cursor: pointer;
}
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  height: 70px;
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
  height: calc(100vh - 70px);
  width: 250px;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 10px;
  height: calc(100vh - 70px);
}
.toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
#home{
  position: absolute;
  left: 30px;
  cursor: pointer;
}
.basic{
  width:400px;
  height:100px;
  border:1px solid black;
  cursor: pointer;
}
.normal{
  background: white;
}
.happy{
  background: red;
}
.sad{
  background: blue;
}
.smallInput{
  width:200px;
}
/*todoList ↓ */
/*body {*/
/*  background: #fff;*/
/*}*/
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger{
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover{
  color: #fff;
  background-color: #bd362f;
}
.btn:focus{
  outline: none;
}
.todo-container{
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap{
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>