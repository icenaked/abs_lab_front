<template>

  <el-container class="layout-container-demo" style="height: 500px">
    <el-header style="text-align: right; font-size: 12px">
      <div class="toolbar">
        <el-dropdown>
          <el-icon style="margin-right: 8px; margin-top: 1px">
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
                <el-icon><message /></el-icon>Navigator One
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>Option4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><icon-menu /></el-icon>Navigator Two
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="2-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="2-4">
                <template #title>Option 4</template>
                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><setting /></el-icon>Navigator Three
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="3-3">Option 3</el-menu-item>
              </el-menu-item-group>
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
          <el-form id="list">
            <li v-for="p in persons" :key="p.id" >
              {{p.id}}-{{p.name}}--{{p.age}}
            </li>
          </el-form>
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
          单向数据绑定：<br/><br/><el-input type="text" :value="bind.name"></el-input><br/><br/>
          双向数据绑定：<br/><br/><el-input type="text" v-model="bind.name"></el-input>
        </div>
        <hr/>

        </el-scrollbar>
      </el-main>

    </el-container>

  </el-container>

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
      bind : {
        name : "单项绑定也可写为v-bind:value=\"name\""
      }
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
  height: 70px;
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
  height: calc(100vh - 70px);
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
</style>