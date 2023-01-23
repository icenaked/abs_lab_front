<template>
  <div class="leftAlign">

    <div>
      <h1 class="leftAlign">list示例</h1>
      <el-form id="list" class="leftAlign">
        <li v-for="p in persons" :key="p.id" >
          {{p.id}}-{{p.name}}--{{p.age}}
        </li>
      </el-form>
    </div>
    <hr/>

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

  </div>

</template>

<script>
export default {
  name: "VueLab",
  data() {
    return {
      activeIndex: "1",
      persons : [
        {id:'001',name:"张三",age:18},
        {id:'001',name:"李四",age:19},
        {id:'001',name:"王五",age:28}
      ],
      show: true,
      list: [1, 2, 3],
    };
  },
}

</script>

<style scoped>
.leftAlign{
  text-align: left
}
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>