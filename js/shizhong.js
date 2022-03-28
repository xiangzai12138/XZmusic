$(function(){
function kd(){
	var width=$(window).width();
	var height=$(window).height();
	var kd;
	if(width>height){kd=height}else{kd=width}
	$('.box').css('width',kd+'px').css('height',kd+'px');
	var Time=new Date();
	var shi=Time.getTime();                                         
	var tian = parseInt(shi/(24*60*60*1000));
	var hour = shi%(24*60*60*1000);
	var si = parseInt(hour/(60*60*1000));
	hour = hour%(60*60*1000);
	var fen = parseInt(hour/(60*1000));
	hour = hour%(60*1000);
	$('img').eq(2).css('transform','rotate('+(hour/1000)*6+'deg)');
	var miao=parseInt(hour/(1000));
}
function new_kd(){
	var time=new Date();
	$('img').eq(0).css('transform','rotate('+(time.getHours()*0.5+(time.getHours()*30))+'deg)');
	$('img').eq(1).css('transform','rotate('+time.getMinutes()*6+'deg)');
	var num,new_num,tow_new_num;
	if(time.getHours()<10){num='0'}else{num=''}
	if(time.getMinutes()<10){new_num='0'}else{new_num=''}
	if(time.getSeconds()<10){tow_new_num='0'}else{tow_new_num=''}
	$('.pm').html(num+time.getHours()+':'+new_num+time.getMinutes()+':'+tow_new_num+time.getSeconds());
}
kd();
new_kd();
setInterval(kd,1);
setInterval(new_kd,1000);
})