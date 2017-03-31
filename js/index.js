/* 
* @Author: Marte
* @Date:   2017-03-31 10:42:59
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-31 10:56:59
*/

var lbtu=document.getElementById('lbtu');
var sit=setInterval(box, 1000);
/*数据库*/
var arr=['imgs/1.jpg','imgs/2.jpg','imgs/3.jpg','imgs/timg.jpg'];

var num=0;

function box(){
    num=num+1;
    if(num==4){
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