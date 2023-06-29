<template>
  <div>
    <div class="top"></div>
    <div class="banner"></div>
    <div class="box">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li style="margin-right: 0">4</li>
      </ul>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
name: "Layout"
}
</script>

<style scoped>
/*清除内外边距，很重要！！！！！！*/
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
.top{
  height: 50px;
  background-color: gray;
}
.banner{
  width: 980px;
  height: 150px;
  background-color: gray;
  margin: 10px auto;
}
.box{
  width: 980px;
  height: 300px;
  margin: 0 auto;
  background-color: plum;
}
.box li{
  float: left;
  width: 237px;
  height: 300px;
  background-color: gray;
  margin-right: 10px;
}
.footer{
  height: 200px;
  background-color: gray;
  margin-top: 10px;
}
</style>