(function() {


var a=sluchiz([20,25,40,80,100,125])[0];
var b=sluchch(2,a/2);
var c=sluchch(2,a/2);
var d=a-b-c;
var f=[b,c,d];
var t1=sluchiz(om.strany.re,3);
var v1=sluchch(2);
var t2=sluchiz(om.sport.pe)[0];

window.vopr.txt='На семинар приехали '+
				b+' учёных из '+t1[0]+', '+c+' из '+t1[1]+' и '+d+' из '+t1[2]+'. '+
				'Порядок докладов определяется жеребьёвкой. '+
				'Найдите вероятность того, что '+sluchiz(['первым','последним','предпоследним','вторым','третьим',sluchch(4,a)+'-м'])[0]+
				' окажется доклад учёного из '+t1[v1]+'.';
window.vopr.ver=[''+(f[v1]/a).ts()];

window.vopr.kat['log']=0;
window.vopr.kat['prz']=0;
window.vopr.kat['drs']=0;
window.vopr.kat['tri']=0;
})();
