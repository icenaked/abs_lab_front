<template>
  <div>
    <input type="text" >
    <input type="password" name="">

    <div class="fakeElement">
      666
    </div>

    <div class="video">
      伪元素应用
      <img src="../assets/mina.jpg" alt="" style="width: 200px;vertical-align: middle">
    </div>

    <div class="oldBox">
      css旧盒子模型
      <br>
      content-box
    </div>

    <div class="newBox">
      css3新盒子模型
      <br>
      border-box
    </div>

    <div style="width: calc(100% - 25px)">
      计算宽高calc
    </div>

    <div class="trans">

    </div>

    <div>
      flex布局敬请期待
    </div>

  </div>
</template>

<script>
export default {
name: "Css3Lab"
}
</script>

<style scoped>
*{
  border: 1px solid blueviolet;
}
/*属性选择器*/
input[type=password]{
  color: pink;
}
.fakeElement{
  width: 200px;
  height: 200px;
  color: pink;
}
/*伪元素属于行内元素，需要加浮动/定位/inline-block才能设置大小！*/
.fakeElement::before{
  content: 'qian';
}
.fakeElement::after{
  content: 'hou';
  display: inline-block;
  width: 50px;
  height: 50px;
  color: skyblue;
}
.video{
  position: relative;
}
/*伪元素的应用*/
.video:hover::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
}
.oldBox{
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: red;
  border: 20px solid blue;
  padding: 15px;
  box-sizing: content-box;
}
.newBox{
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: red;
  border: 20px solid blue;
  padding: 15px;
  box-sizing: border-box;
}
.trans{
  width: 200px;
  height: 100px;
  background-color: pink;
  /*谁使用给谁加transition：变化属性 花费时间 运动曲线 何时开始*/
  transition: width .5s, height .5s;
  /*变化属性写all，可以全变*/
  /*transition: all .5s*/
}
.trans:hover{
  width: 400px;
  height: 250px;
}
</style>