<template xmlns:text-overflow="http://www.w3.org/1999/xhtml">
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

<!--    line-height与盒子高度height一样即可实现文字垂直居中-->
    <span style="display: inline-block;width: 300px;height: 30px;background-color: plum;line-height: 30px;">行内元素转换为行内块元素</span>
    <span style="display: inline-block;width: 300px;height: 30px;background-color: plum;line-height: 50px;">行内元素转换为行内块元素</span>
    <span style="display: inline-block;width: 300px;background-color: plum;line-height: 50px;">行内元素转换为行内块元素</span>

    <div>
      <span class="bgi">
       golden tree
      </span>

      <span class="bgil">
       灵活方位
      </span>
    </div>

    <div class="download">
      click to download!
    </div>

    <div style="position:sticky;top: 10px;width: 100px;float: right">
      <img src="../assets/古龙入侵.jpg" alt="" style="width: 100px;display: block">
    </div>

    <div class="bigBG">
      云顶新版本！
    </div>

    <div class="nav">
      <a href="#">新浪导航</a>
      <a href="#">手机新浪网</a>
      <a href="#">移动客户端</a>
      <a href="#">微博</a>
    </div>

    <div>以上均为标准流，用于一行一个盒子的布局</div>
    <div>以下👇展示浮动，用于一行多个的布局</div>

    <div style="width: 1300px;height:460px;
    /*标准流盒子居中显示方法*/
    margin: 0 auto"
    >
      <div style="float: left;width: 230px;height: 460px">写死高度的浮动</div>
      <div style="float: left;width: 970px;height: 460px">浮动1</div>
    </div>

<!--    父标准流盒子不定义高度，需要清除浮动！！！-->
    <div style="width: 1300px;overflow: hidden;background-color: powderblue;margin: 0 auto">
      <div style="float: left;width: 230px;height: 460px">清除浮动</div>
      <div style="float: left;width: 970px;height: 460px">浮动1</div>
      <div style="float: left;width: 330px;height: 460px">清除浮动</div>
      <div style="float: left;width: 870px;height: 460px">浮动2</div>
      <div style="float: left;width: 130px;height: 460px">清除浮动</div>
      <div style="float: left;width: 1070px;height: 460px">浮动3</div>
    </div>

    <div style="margin-top: 20px">以下👇展示定位</div>
    <div>static与标准流一致。</div>
    <div>relative相对于自己原来位置变化，其他元素只知道它原来位置，给绝对定位当爹(子绝父相)。</div>
    <div>absolute相对于自己的父元素位置变化(父元素要有自己的定位),不占有位置，类似浮动</div>

    <div class="box w">
      <div class="box-hd">
        <h3>
          精品推荐
        </h3>
        <a href="#">查看全部</a>
      </div>
      <div class="box-bd">
        <ul style="overflow: hidden">
          <li>
            <em>
              <img src="../assets/logo.png" alt="">
            </em>
            <img src="../assets/mina.jpg" alt="">
            <h4>帅，otto！</h4>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>

    <div style="position:fixed;top: 100px;right: 20px;">
      <img src="../assets/群星.png" alt="" style="width: 200px;vertical-align: middle">
    </div>

    <div>
      <img src="../assets/logo.png" alt="" style="vertical-align: top;width: 50px"> 666
    </div>
    <div>
      <img src="../assets/logo.png" alt="" style="vertical-align: middle;width: 50px"> 666
    </div>
    <div>
      <img src="../assets/logo.png" alt="" style="vertical-align: bottom;width: 50px"> 666
    </div>

    <div style="
    margin: auto;
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;"
    >
      惹啊啊啊啊啊啊啊啊aaaaaaaaaaaaaaaaaaaaaaaa
    </div>

    <div class="rea">
      惹啊啊啊啊啊啊啊啊aaaaaaaaa啊啊啊啊啊啊啊啊啊
    </div>

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
  /*margin-top: 10px;*/
  /*padding: 2px;*/
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
.bgi{
  display: inline-block;
  background-size: 100% 100%;
  background-image: url('../assets/mina.jpg');
  height: 216px;
  width: 384px;
}
.bgil{
  display: inline-block;
  background-repeat: no-repeat;
  background-image: url('../assets/logo.png');
  background-position: center right;
  height: 300px;
  width: 400px;
}
.download{
  width: 200px;
  height: 40px;
  background-color: #42b983;
  font-size: 14px;
  /*文字不加粗*/
  font-weight: 400;
  line-height: 40px;
  background-image: url("../assets/icon-download.png");
  background-repeat: no-repeat;
  background-position: 10px center ;
  text-indent: 1em;
}
.bigBG{
  background-image: url("../assets/云顶.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  height: 530px;
}
.nav{
  height: 41px;
  border-top: 3px solid #ff8500;
  border-bottom: 1px solid #edeef0;
  background-color: #fcfcfc;
  line-height: 41px;
}
.nav a{
  display: inline-block;
  height: 41px;
  padding: 0 20px;
  border: none;
  font-size: 12px;
  color: #4c4c4c;
}
.nav a:hover{
  background-color: #eee;
  color: #ff8500;
}
.box{
  margin-top: 30px;
}
.box-hd{
  height: 45px;
}
.box-hd h3{
  float: left;
  margin: 0 0 0 0;
}
.box-hd a{
  float: right;
}
.box-bd ul{
  width: 1225px;
}
.box-bd ul li{
  /*子绝父相的相*/
  position: relative;
  float: left;
  width: 230px;
  height: 270px;
  background-color: pink;
  list-style: none;
  margin-right: 15px;
  margin-bottom: 15px;
}
.box-bd ul li:hover{
  border: 1px solid yellow;
}
/*大于号代表亲儿子元素是img才执行样式*/
.box-bd ul li > img{
  width: 100%;
}
.box-bd ul li em{
  /*子绝父相的绝*/
  position: absolute;
  top: 0;
  right: 0;
}
.box-bd ul li em img{
  width: 30px;
}
.box-bd ul li h4{
  margin: 20px 20px 20px 25px;
  font-size: 14px;
}
.rea{
  margin: auto;
  width: 150px;
  overflow: hidden;
  text-overflow:ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>