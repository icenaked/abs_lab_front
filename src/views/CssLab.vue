<template>
  <div>
    <div class="red font35 bgc">
      css,启动！
    </div>

    <div id="idStyle">
      id: only one
    </div>

    <div>
      <p>
        1st line
      </p>
      <p>
        2nd line
      </p>
      <p>
        3rd line
      </p>
    </div>

<!--    <ol>-->
      <li>ol1</li>
      <li>ol1</li>
      <li>ol1</li>
<!--    </ol>-->

    <div>
      <a href="###">小猪佩奇</a>
    </div>

<!--    块元素占一行，可变宽高；行内元素变不了，一行可多个；行内块元素都可以-->
    <a href="#"
       style="width:150px;height:50px;background-color: #da4f49; display: block;"
    >行内元素转换成块形状链接</a>

    <div style="display: inline;background-color: papayawhip">块转换行内元素</div>
    <div style="display: inline;background-color: papayawhip">块转换行内元素</div>
    <div style="display: inline;background-color: papayawhip">块转换行内元素</div>

    <span style="display: inline-block;width: 300px;height: 30px;background-color: plum">行内元素转换为行内块元素</span>
    <span style="display: inline-block;width: 300px;height: 30px;background-color: plum">行内元素转换为行内块元素</span>

  </div>
</template>

<script>
export default {
name: "CssLab"
}
</script>

<style scoped>
.red{
  color: red;
}
.font35{
  font-size: 35px;
}
.bgc{
  background-color: #6ba5bd;
}
#idStyle{
  color: red;
  font-size: 35px;
}
/*全部标签样式*/
*{
  margin-top: 10px;
  padding: 2px;
  border: 1px solid blueviolet;
}
p{
  text-align: left;
  /*em 相对单位：1个当前字体大小距离 */
  text-indent: 2em;
}
/*后代选择器: ol里的li的样式 */
ol li{
  color: pink;
}
/*链接伪类选择器,四个顺序不能变*/
a:link{
  color: #333;
  text-decoration: none;
}
a:visited{
  color: orange;
}
a:hover{
  color: skyblue;
}
a:active{
  color: green;
}

</style>