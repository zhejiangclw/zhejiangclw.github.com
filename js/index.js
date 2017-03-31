/* 
* @Author: Marte
* @Date:   2017-03-31 10:42:59
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-31 16:45:43
*/

var lbtu=document.getElementById('lbtu');
var sit=setInterval(box, 1000);
/*数据库*/
var arr=['imgs/lbtu1.jpg','imgs/lbtu2.jpg','imgs/lbtu3.jpg','imgs/lbtu4.jpg',"imgs/lbtu5.jpg"];

var num=0;

function box(){
    num=num+1;
    if(num==5){
        num=0;
    }
    lbtu.src=arr[num];
}
//鼠标移入悬停    
    function stopbo(){
           
        clearInterval(sit);
    }
//鼠标移出继续轮播
    function startbo(){
        sit=setInterval(box,1000);
    }