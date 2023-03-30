<template>
  <div>{{$route.query.id}},{{$route.query.name}}</div>
</template>

<script>
export default {
  name: "luyou",
  // activated和deactivated是配合keep-alive一起使用的
  // activated和deactivated没有keep-alive的时候是不会被触发的
  // 在存在keep-alive的时候可以将activated当作created进行使用
  // deactivated是组件销毁的时候触发，此时的destory是不执行的
  activated() {
    console.log("luyou组件激活")
  },
  deactivated() {
    console.log("luyou组件失活")
  },
}
</script>

<style scoped>

</style>