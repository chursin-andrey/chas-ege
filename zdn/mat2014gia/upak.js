nabor.upak={A1:{1:function(){var a=sl(1,5).pm(),c=sl(1,5).pm(),d=sl(1,5).pm(),e=[2,4,5,10].iz(),f=[2,4,5,10].iz(),g=[2,4,5,10].iz();window.vopr.txt=om.otvnaydite.iz().toZagl()+" значение выражения $$"+([(a/e).ts(),a.frac(e)].iz()+"+"+[(c/f).ts(),c.frac(f)].iz()+"+"+[(d/g).ts(),d.frac(g)].iz()).plusminus()+"$$";window.vopr.ver=[(a/e+c/f+d/g).ts()]},main:function(){window.nomer=sl(1,1);window.comment="Элементарные вычисления."}},B2:{11:function(){var a="фонарик;флакон шампуня;флэшка;компакт-диск;сувенир;матрёшка;магнит на холодильник;сборник тестов для подготовки к ЕГЭ;тетрадь;учебник;цветочный горшок".split(";").iz(),
c=sluchch(50,200,10),d=sluchch(10,150,10),e=sluchch(500,1E4,100);window.vopr.txt="Оптовая цена "+lx[a].re+" "+chislitlx(c,"рубль")+". Розничная цена на "+d+"% выше оптовой. Какое наибольшее число таких "+lx[a].rm+" можно купить по розничной цене на "+chislitlx(e,"рубль")+"?";window.vopr.ver=[(e/(c*(1+0.01*d))).floor().ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},12:function(){var a=sl(100,1E3,10),c=sl(20,90,5),d=sl(5,30),e=sl(1,10),f=sklonlxkand(["школьник",
"ребёнок","пионер","учащийся"].iz()),g=sklonlxkand("взрослый педагог учитель преподаватель вожатый родитель".split(" ").iz()),h=["железнодорожный билет","билет в театр","билет на поезд","билет на корабль"].iz();window.vopr.txt=h.toZagl()+" для "+g.re+" стоит "+chislitlx(a,"рубль")+". Цена билета для "+f.re+" составляет "+c+"% от стоимости билета для "+g.re+". Группа состоит из "+chislitlx(d,f.ie,"r")+" и "+chislitlx(e,g.ie,"r")+". Сколько рублей стоят билеты на всю группу?";window.vopr.ver=[((e+d*
c/100)*a).ts()]},13:function(){var a=sl(2,50).pm(),c=sklonlxkand("электрочайник кофемашина бензопила принтер сканер Android-планшет".split(" ").iz()),d=sl(2500,5E3,100);window.vopr.txt="Цена на "+c.ve+" была "+(0<a?"повышена":"понижена")+" на "+a.abs()+"% и составила "+chislitlx(d*(1+a/100),"рубль")+". Сколько рублей стоил "+c.ie+" до "+(0<a?"повышения":"понижения")+" цены?";window.vopr.ver=[d.ts()]},21:function(){var a=sluchch(1E4,5E4,1E3),c="самолёта;вертолёта;аэроплана;дирижабля;воздушного шара;аэростата".split(";").iz(),
d=["пилота","пассажира","пассажиров"].iz();window.vopr.txt="Встроенная система навигации на базе GNU/Linux "+["Debian","Ubuntu","Gentoo","Mint"].iz()+" "+c+" информирует "+d+" о том, что полёт проходит на высоте "+a+" футов. Выразите высоту полёта в метрах. Считайте, что 1 фут равен 30,5 см.";window.vopr.ver=[(30.5*a/100).ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},26:function(){var a=sklonlxkand(["футболка","майка"].iz()),c=sluchch(600,1E3,10),d=
sluchch(400,c-100,10);window.vopr.txt=a.ie.toZagl()+" стоила "+chislitlx(c,"рубль")+". После снижения цены она стала стоить "+chislitlx(d,"рубль")+". На сколько процентов была снижена цена на "+a.ve+"?";window.vopr.ver=[(100-d/(c/100)).ceil()]},27:function(){var a,c=10*sl(1,3),d=sl(1,c-1),e,f;do a=sl(5,30),e=slKrome(a,3,12),f=400/c*d/a*e;while(!(100*f).isZ());var g=sklonlxkand(["чернослив","черника","земляника","ежевика"].iz());window.vopr.txt="Имеется рецепт пирога с "+g.te+". Для пирога на "+a+
" человек следует взять $"+d.frac(c)+"$ фунта "+g.re+". Сколько граммов "+g.re+" следует взять для пирога, рассчитанного на "+e+" человек? Считайте, что 1 фунт равен 0,4 кг";window.vopr.ver=[f]},29:function(){var a;do{var c=sluchch(1E4,2E4,1E3),d=sluchch(10,20);a=(c+c*d/100)/12}while(!(100*a).isZ());window.vopr.txt="Клиент взял в банке кредит "+c+" рублей на год под "+d+" %. Он должен погашать кредит, внося в банк ежемесячно одинаковую сумму денег, с тем чтобы через год выплатить всю сумму, взятую в кредит, вместе с процентами. Сколько рублей он должен вносить в банк ежемесячно?";
window.vopr.ver=[a.ts()]},30:function(){var a=[["винограда","виноградного"],["вишен","вишневого"],["слив","сливового"],["груш","грушевого"],["яблок","яблочного"],["смородины","смородинового"]].iz(),c=sluchch(1,3),d=sluchch(1,2),e=sluchch(20,30);window.vopr.txt="Для приготовления "+a[1]+" варенья на "+c+" кг "+a[0]+" нужно "+d+" кг сахара. Какое наименьшее количество килограммовых упаковок сахара нужно, чтобы сварить варенье из "+e+" кг "+a[0]+"?";window.vopr.ver=[(e/(d*c)).ceil()]},31:function(){do var a=
sluchch(10,50),c=sluchch(20,65,15);while(0!=100*a%c);var d=sklonlxkand(["школа","лицей","гимназия"].iz()),e=["военных","специальных","частных"].iz();window.vopr.txt=chislitlx(a,"выпускник")+" "+d.re+" собираются учиться в "+e+" вузах. Они составляют "+c+"% от числа выпускников. Сколько в "+d.pe+" выпускников?";window.vopr.ver=[(100*(a/c)).ts()]},32:function(){var a=sklonlxkand(["тетрадь","шуруп","карандаш","ручка"].iz()),c=sluchch(5,25),d=sluchch(20,70),e=sluchch(30,50,10),f=sluchch(5,12),g=["покупатель",
"школьник","ученик"].iz(),h=["киоск","ларёк","магазин"].iz();window.vopr.txt=a.ie.toZagl()+" стоит "+chislitlx(c,"рубль")+". Сколько рублей заплатит "+g+" за "+chislitlx(d,a)+" если при покупке больше "+chislitlx(e,a)+" "+h+" делает скидку "+f+"% от стоимости всей покупки?";window.vopr.ver=e<d?[(c*d*f/100).ceil()]:[(c*d).ceil()]},33:function(){var a=["пачка "+["масла","соли"].iz(),"пакет молока","батон хлеба","банка тушенки","упаковка пельменей"].iz(),c=sluchch(50,70),d=sklonlxkand(["пенсионер","студент",
"ветеран"].iz()),e=["магазин","ларёк","киоск"].iz(),f=sluchch(2,10);window.vopr.txt=a.toZagl()+" стоит "+chislitlx(c,"рубль")+". "+d.dm.toZagl()+" "+e+" делает скидку "+f+"%. Сколько рублей стоит   "+a+" для "+d.re+"?";window.vopr.ver=[(c*(1-f/100)).ts()]},34:function(){var a=sluchch(85,95),c=sluchch(25E3,31E3,100),d=sklonlxkand(om.naspunkt.iz()),e=sluchch(1,10),f=sklonlxkand(["ученик","выпускник"].iz());window.vopr.txt="Только "+a+"% из "+chislitlx(c,"выпускник","r")+" "+d.re+" правильно решили задачу B"+
e+". Сколько "+f.rm+" правильно решили задачу В"+e+"?";window.vopr.ver=[(a*c/100).round()]},35:function(){var a="мобильный телефон;планшет;телевизор;ноутбук;роутер;холодильник;монитор;компьютер;маршрутизатор;принтер".split(";").iz(),c=["этот товар","этот продукт","данную модель","это устройство","эту модель"].iz(),d=sluchch(6E3,5E4,100),e=d-sluchch(1,29)*(d/100),f=["стоил","имел стоимость"].iz(),g=["через","спустя"].iz(),h=["снизили","понизили"].iz(),i=["снижена","понижена"].iz(),j=sklonlxkand(["цена",
"стоимость"].iz());window.vopr.txt=a.toZagl()+" "+f+" "+chislitlx(d,"рубль")+". "+g.toZagl()+" некоторое время "+j.ve+" на "+c+" "+h+" до "+chislitlx(e,"рубль")+". На сколько процентов была "+i+" "+j.ie+"?";window.vopr.ver=[(100*(d-e)/d).ts()]},36:function(){var a=sluchch(1,3,0.1).ts(),c=sluchch(2,9,0.1).ts(),d=sluchch(2,9,0.1).ts(),e=sklonlxkand(["рулон","упаковка","пачка"].iz());window.vopr.txt=e.re.toZagl()+" обоев хватает для оклейки полосы от пола до потолка шириной "+a+" м. Сколько "+e.rm+" обоев нужно купить для оклейки прямоугольной комнаты размерами "+
d+" м на "+c+" м?";window.vopr.ver=[(2*(d+c)/a).ceil().ts()]},37:function(){var a=sluchch(50,900,10),c=sluchch(1,20,0.5).ts(),d=sluchch(20,200,10),e=["потолка","стены"].iz();window.vopr.txt="Для покраски 1 кв. м "+e+" требуется "+a+" г краски. Краска продаётся в банках по "+c+" кг. Какое наименьшее количество банок краски нужно купить для покраски "+e+" площадью "+d+" кв. м?";window.vopr.ver=[(d*a/1E3/c).ceil().ts()]},38:function(){var a=sluchch(1E4,7E4),c=["Система навигации","Пилот"].iz(),d="информирует;сообщает;передаёт;оповещает;объявляет;даёт знать;осведомляет;уведомляет;извещает".split(";").iz();
window.vopr.txt=c+" самолёта "+d+" о том, что полёт проходит на высоте "+chislitlx(a,"фут")+". Выразите высоту полёта в метрах. Считайте, что 1 фут равен 30,5 см.";window.vopr.ver=[(30.5*a/100).ts()]},39:function(){var a=sluchch(300,5E3),c=sluchch(15,70),d=sluchch(15,90),e=sklonlxkand(["школа","университет","колледж","училище","гимназия"].iz()),f=sklonlxkand(["ученик","студент","учащийся"].iz()),g=["немецкий","французский","итальянский","английский","испанский"].iz();window.vopr.txt="В "+e.pe+" "+
a+" "+f.rm+", из них "+c+"%  — "+f.im+" начальной школы. Среди "+f.rm+" средней и старшей школы "+d+"% изучают "+g+" язык. Сколько "+f.rm+" в "+e.pe+" изучают "+g+" язык, если в начальной школе "+g+" язык не изучается?";window.vopr.ver=[(a*(1-c/100)*d/100).ts()]},40:function(){var a=sluchch(5,30),c=sluchch(2E3,4E4,500),d=["магазине","салоне"].iz(),e=["Покупатель","Клиент","Заказчик","Потребитель"].iz(),f=sklonlxkand("шкаф диван кресло стол стенка стелаж".split(" ").iz());window.vopr.txt="В "+d+" вся мебель продаётся в разобранном виде. "+
e+" может заказать сборку мебели на дому, стоимость которой составляет "+a+"% от стоимости купленной мебели. "+f.ie.toZagl()+" стоит "+chislitlx(c,"рубль")+" . Во сколько рублей обойдётся покупка "+f.re+" вместе со сборкой?";window.vopr.ver=[(c*(1+a/100)).ts()]},4:function(){var a=sluchch(0,om.meltov.ie.length-1),c=sluchch(20,200,10),d=sluchch(2*c+10,2E3,5),e=sluchch(3,40),f=sluchch(0,3),g=[-e,e,e,e];window.vopr.txt=om.meltov.ie[a].toZagl()+" стоит "+c+" рублей. Какое наибольшее число "+om.meltov.rm[a]+
" можно купить за "+d+" рублей "+["после повышения цены на","после понижения цены на","во время распродажи, когда скидка составляет","с дисконтной картой, дающей право на скидку"][f]+" "+e+"%?";window.vopr.ver=[""+(d/(c*(1-0.01*g[f]))).floor()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},6:function(){var a=sluchch(0,om.meltov.ie.length-1),c=sluchch(20,200,10),d=sluchch(2*c+10,2E3,5),e=sluchch(3,40);window.vopr.txt="Магазин закупает "+om.meltov.im[a]+" по оптовой цене "+
c+" рублей и продаёт с наценкой "+e+"%. Какое наибольшее число "+om.meltov.rm[a]+" можно купить за "+d+" рублей?";window.vopr.ver=[""+(d/(c*(1+0.01*e))).floor()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},8:function(){var a=sluchch(0.1,2.5,0.1),c=sluchch(2,4),d=sluchch(5,60),e=sluchch(5,20),f=sluchch(0.1,2.5,0.1);window.vopr.txt="Больному прописано лекарство, которое нужно пить по "+a.ts()+" г "+c+" раза в день в течение "+chislitlx(d,"день","r")+". В одной упаковке "+
e+" таблеток лекарства по "+f.ts()+" г. Какого наименьшего количества упаковок хватит на весь курс лечения?";window.vopr.ver=[(a*c*d/e/f).ceil().ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},main:function(){window.nomer=[4,6,8,11,12,13,21,26,27,29,30,31,32,33,34,35,36,37,38,39,40].iz();window.comment="Элементарные бытовые задачи."}},B6:{10:function(){var a=NLsets.alphabets.english.getRandomItems(3),c=a[0],d=a[1],a=a[2],e=sluchch(2,10),f=sluchch(0.1,
0.9,0.1),g=e*f;b=(e*e-g*g).koren();var h="\\sin{"+d+"}",i="\\cos{"+c+"}",j="\\sin^2{"+c+"}",k="\\sin^2{"+d+"}",l="\\cos^2{"+c+"}",m="\\cos^2{"+d+"}",n=1-f*f,e=svVel([[{vel:"",bkv:["\\sin{"+c+"}","\\cos{"+d+"}"].iz(),vin:1,zna:f.ts(),nah:1},{vel:"",bkv:[j,m].iz(),vin:1,zna:(f*f).ts(),nah:1},{vel:"",bkv:[k,l].iz(),vin:1,zna:n.ts(),nah:1},{vel:"",bkv:[h,i].iz(),vin:1,zna:n.koren(),nah:n.isPolnKvadr()}].iz(),{vel:"",bkv:c+d,zna:e.ts(),rod:1,vin:1,nah:1},{vel:"",bkv:c+a,zna:b,rod:1,vin:1,nah:0},{vel:"",
bkv:d+a,zna:g.ts(),rod:1,vin:1,nah:1}].sluchiz(3));window.vopr.ver=[""+e.splice(0,1)];window.vopr.txt="В треугольнике $"+(c+d+a).mesh()+"$ угол $"+a+"$ равен $90^\\circ$. "+e.shuffle().soed();window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=1},11:function(){var a=["sin","cos"].shuffle(),c=NLsets.alphabets.english.getRandomItems(3),d=sluchch(1),e=om.znamenat.iz(),f=sluchch(1,e-1),g=e*e-f*f;window.vopr.txt="В треугольнике $"+c.soed()+"$ угол $"+c[0]+"$ равен $90^\\circ$, $\\"+
a[0]+" "+c[1]+" = \\frac{"+g.koren()+"}{"+e+"}$. Найдите $\\"+a[1*!d]+" "+c[d?2:1]+"$.";window.vopr.ver=[(f/e).ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=1},1:function(){var a=NLsets.alphabets.english.getRandomItems(5),c=a[0],d=a[1],e=a[2],f=a[3],a=a[4],g=sluchch(11,99),h=[1,2,3,4];h.shuffle();var i=g*h[0],g=g*h[1],j=[];j[1]="треугольника $"+sluchiz([sluchiz([e,c,d]).soed()+f+a,sluchiz([f,a]).soed()+c+d]).soed().mesh()+"$ ";j[2]="треугольника $"+sluchiz([e+
f+d,e+a+c]).soed().mesh()+"$ ";j[3]="трапеции $"+sluchiz([c+f+a+d,d+a+f+c])+"$ ";j[4]="треугольника $"+(c+d+e).mesh()+"$ ";window.vopr.txt="В треугольнике $"+c+d+e+"$  $"+f+a+"$ – средняя линия, $"+f+" \\in "+c+e+"$, $"+a+" \\in "+e+d+"$. Площадь "+j[h[0]]+"равна "+i+". Найдите площадь "+j[h[1]]+".";window.vopr.ver=[""+g];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},2:function(){var a=sluchch(1,19),c=sluchch(1),d=["площадь","диагональ"],a=[(a*a/2).ts(),
a];window.vopr.txt=d[c].toZagl()+" квадрата равна "+a[c]+". Найдите его "+d[1-c]+".";window.vopr.ver=[a[1-c]];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},3:function(){var a=sluchch(1,19),c="один из углов "+sluchiz(["равен 30$^\\circ$","равен 150$^\\circ$",sluchiz(["в 5 раз ","на 120 градусов "])[0]+sluchiz(["больше","меньше"])[0]+" другого угла"])[0];window.vopr.txt="Найдите площадь ромба, если его сторона равна "+a+", а "+c+".";window.vopr.ver=[(a*a/2).ts()];
window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},4:function(){var a=[["sin","cos"],["tg","ctg"]].iz().shuffle(),c=sluchiz(NLsets.alphabets.english,3),d=sluchch(0.01,0.99,0.01).ts();window.vopr.txt="В треугольнике $"+c.soed()+"$ угол $"+c[0]+"$ равен $90^\\circ$, $\\"+a[0]+" "+c[1]+" = "+d+"$. Найдите $\\"+a[1]+" "+c[2]+"$.";window.vopr.ver=[d];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=1},5:function(){var a=sluchiz(NLsets.alphabets.english,
3),c=[["sin",["tg~} "+a[1],"ctg~} "+a[2]].iz()],["cos",["ctg~} "+a[1],"tg~} "+a[2]].iz()]].iz(),d=sluchch(1),e=[2,5,10].iz(),f=sluchch(1,100),g=e*e+f*f,h=g.isPolnKvadr(),d=sluchch(1);window.vopr.txt="В треугольнике $"+a.soed()+"$ угол $"+a[0]+"$ равен $90^\\circ$, $\\"+c[0]+" "+a[1]+" = \\frac{"+(h?f:f+g.koren().esli(d))+"}{"+(h?g.sqrt:d?g:g.koren())+"}$. Найдите $\\mathrm{"+c[1]+"$.";window.vopr.ver=[(f/e).ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=
1},6:function(){var a=sluchiz(NLsets.alphabets.english,3),c=["tg~","ctg~"].iz(),d=[2,5,10].iz(),e=sluchch(1,100);window.vopr.txt="В треугольнике $"+a.soed()+"$ угол $"+a[0]+"$ равен $90^\\circ$, $\\mathrm{"+c+"} "+a[1]+" = "+d.frac(e)+"$. Найдите $\\mathrm{"+c+a[2]+"}$.";window.vopr.ver=[(e/d).ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=1},7:function(){var a=sluchiz(NLsets.alphabets.english,3),c=["tg~","ctg~"].shuffle(),d=[2,5,10].iz(),e=sluchch(1,100);
window.vopr.txt="В треугольнике $"+a.soed()+"$ угол $"+a[0]+"$ равен $90^\\circ$, $\\mathrm{"+c[0]+"} "+a[1]+" = "+d.frac(e)+"$. Найдите $\\mathrm{"+c[1]+a[1]+"}$.";window.vopr.ver=[(e/d).ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=1},8:function(){var a=NLsets.alphabets.english.sluchiz(3),c=a[0],d=a[1],a=a[2],e=om.pifagtr.iz(),f=sluchch(1,10),g=e[0]*f,h=e[1]*f,f=e[2]*f,e="\\sin{"+c+"}="+g.frac(f),i="\\sin{"+d+"}="+h.frac(f),j="\\cos{"+c+"}="+h.frac(f),
k="\\cos{"+d+"}="+g.frac(f),l="\\mathrm{tg}~"+c+"="+g.frac(h),m="\\mathrm{tg}~"+d+"="+h.frac(g),n="\\mathrm{ctg}~"+c+"="+h.frac(g),o="\\mathrm{ctg}~"+d+"="+g.frac(h),f=svVel([{utv:"$"+[e,i,j,k,l,m,n,o].iz()+"$"},{vel:"",bkv:c+d,zna:f,rod:1,vin:1,nah:1},{vel:"",bkv:c+a,zna:h,rod:1,vin:1,nah:1},{vel:"",bkv:d+a,zna:g,rod:1,vin:1,nah:1}].sluchiz(3));window.vopr.ver=[""+f.splice(0,1)];window.vopr.txt="В треугольнике $"+c+d+a+"$ угол $"+a+"$ равен $90^\\circ$. "+f.shuffle().soed();window.vopr.kat.log=0;
window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=1},9:function(){var a=NLsets.alphabets.english.sluchiz(3),c=a[0],d=a[1],a=a[2],e=sluchch(2,20),f=sluchch(0.5,5,0.5),g=(e*e*f*f+e*e).koren(),h="\\mathrm{tg}~"+d,i="\\mathrm{ctg}~"+c,j="\\mathrm{tg^2}~"+c,k="\\mathrm{tg^2}~"+d,l="\\mathrm{ctg^2}~"+c,m="\\mathrm{ctg^2}~"+d,e=svVel([[{vel:"",bkv:["\\mathrm{tg}~"+c,"\\mathrm{ctg}~"+d].iz(),vin:1,zna:(1).frac(f)},{vel:"",bkv:[i,h].iz(),vin:1,zna:f.ts(),nah:1},{vel:"",bkv:[j,m].iz(),vin:1,zna:(1).frac(f*
f)},{vel:"",bkv:[l,k].iz(),vin:1,zna:(f*f).ts(),nah:1}].iz(),{vel:"",bkv:c+d,zna:g,rod:1,vin:1,nah:(f*f+1).isPolnKvadr()},{vel:"",bkv:c+a,zna:(e*f).ts(),rod:1,vin:1,nah:1},{vel:"",bkv:d+a,zna:e.ts(),rod:1,vin:1,nah:1}].sluchiz(3));window.vopr.ver=[""+e.splice(0,1)];window.vopr.txt="В треугольнике $"+(c+d+a).mesh()+"$ угол $"+a+"$ равен $90^\\circ$. "+e.shuffle().soed();window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=1},main:function(){window.nomer=sl(1,11);window.comment=
"Многоугольники."}},B9:{1:function(){(function(){for(var a=0,c=0,d=0,e=0,f=0,g=0,h=0;!h;)a=sluchch(1,16),c=sluchch(1,16),d=sluchch(1,16),e=sluchch(1,16),f=sluchch(1,16),g=sluchch(1,16),h=s3ug(a,c,d,e,f,g);var h=h.ts(),i=Math.random();window.vopr.dey=function(){var h=document.getElementById("ris"+i).getContext("2d");h.lineWidth=2;h.setka(20,20);h.lineWidth=4;h.lineJoin="round";h.fillStyle="777";h.beginPath();h.moveTo(20*a,20*c);h.lineTo(20*d,20*e);h.lineTo(20*f,20*g);h.closePath();h.globalAlpha=0.5;
h.fill();h.globalAlpha=1;h.stroke()};window.vopr.txt="Найдите площадь треугольника, изображенного на клетчатой бумаге с размером клетки 1 см $\\times$ 1 см (см. рис.). Ответ дайте в квадратных сантиметрах.";window.vopr.txt+='<canvas style="float:left;margin-right:1em;" width="480" height="480" id="ris'+i+'" style="text-align:center"></canvas>';window.vopr.ver=[h];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0})()},2:function(){(function(){for(var a={},c={},
d={},e={},f=0,g=[],h="";!f||"четырёхугольник"==h.ie&&sluchch(0,2E3)||"трапеция"==h.ie&&sluchch(0,100)||"дельтоид"==h.ie&&sluchch(0,25)||"параллелограмм"==h.ie&&sluchch(0,50);)a.x=sluchch(1,16),a.y=sluchch(1,16),c.x=sluchch(1,16),c.y=sluchch(1,16),d.x=sluchch(1,16),d.y=sluchch(1,16),e.x=sluchch(1,16),e.y=sluchch(1,16),g=[a,c,d,e],f=g.mt_isMnug(4),h=g.mt_imen4ug();var f=g.mt_s4ug(),i=Math.random();window.vopr.dey=function(){var f=document.getElementById("ris"+i).getContext("2d");f.lineWidth=2;f.setka(20,
20);f.lineWidth=4;f.lineJoin="round";f.fillStyle="777";f.beginPath();f.moveTo(20*a.x,20*a.y);f.lineTo(20*c.x,20*c.y);f.lineTo(20*d.x,20*d.y);f.lineTo(20*e.x,20*e.y);f.closePath();f.globalAlpha=0.5;f.fill();f.globalAlpha=1;f.stroke()};window.vopr.txt="Найдите площадь "+h.re+' на клетчатой бумаге с размером клетки 1 см $\\times$ 1 см (см. рис.). Ответ дайте в квадратных сантиметрах.<canvas style="float:left;margin-right:1em;" width="480" height="480" id="ris'+i+'" style="text-align:center"></canvas>';
window.vopr.ver=[f.ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0})()},3:function(){(function(){var a=sluchch(1,3);sluchch(0,3);var c=sluchch(3,8),d=sluchch(0,(c/2).ceil()),e=sluchch(d?0:1,(c/2).ceil()),f=c*c*a/4,g=Math.random();window.vopr.dey=function(){var f=document.getElementById("ris"+g).getContext("2d");f.translate(240,240);f.lineWidth=2;f.setka(20,20);f.lineWidth=4;f.lineJoin="round";f.fillStyle="777";var i=(e/d).atan();f.beginPath();f.arc(0,
0,20*c,i,i-Math.PI/2*a,!0);f.lineTo(0,0);f.closePath();f.globalAlpha=0.5;f.fill();f.globalAlpha=1;f.stroke();f.beginPath();f.arc(0,0,20*c,0,2*Math.PI,!0);f.closePath();f.stroke()};window.vopr.txt='Найдите (в см$^2$) площадь $S$ фигуры, изображенной на клетчатой бумаге с размером клетки 1 см $\\times$ 1 см (см. рис.). В ответе запишите $\\frac S\\pi$.<canvas style="float:left;margin-right:1em;" width="480" height="480" id="ris'+g+'" style="text-align:center"></canvas>';window.vopr.ver=[f.ts()];window.vopr.kat.log=
0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0})()},4:function(){(function(){var a=sluchch(2,10),c=[2,4,5,8,10].iz().pm(),d=NLsets.alphabets.english.getRandomItems(3);sl1();var e=a/c,f=Math.random();window.vopr.dey=function(){var e=document.getElementById("ris"+f).getContext("2d");e.translate(240,240);e.lineWidth=2;e.setka(20,20);e.lineWidth=5;e.drawLine(0,0,20*Math.abs(c),0);e.drawLine(0,0,20*c,20*a);e.font="italic bold 24px sans-serif";e.textBaseline="top";e.fillStyle="#00f";
e.fillText(d[1],3,3);e.fillText(d[0],20*Math.abs(c),0);e.fillText(d[2],20*c,20*a);$("#ris").attr("id","")};window.vopr.txt="Найдите тангенс угла $"+d.soed()+'$.<canvas style="float:left;margin-right:1em;" width="480" height="480" id="ris'+f+'" style="text-align:center"></canvas>';window.vopr.ver=[""+e];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=1})()},main:function(){window.nomer=sl(1,4);window.comment="Элементарные бытовые задачи."}},B15:{10:function(){var a=
sluchiz([20,25,40,80,100,125])[0],c=sluchch(2,a/2),d=sluchch(2,a/2),e=[c,d,a-c-d];sluchch(1);var f=sluchiz(om.strany.re,2),g=sluchch(1),h=om.sport.pe.iz();window.vopr.txt="В чемпионате по "+h+" участвуют "+a+" спортсменок, среди которых "+c+" из "+f[0]+" и "+d+" из "+f[1]+". Порядок, в котором выступают спортсменки, определяется жребием. Найдите вероятность того, что спортсменка, выступающая "+sluchiz(["первой","последней","предпоследней","второй","третьей",sluchch(4,a)+"-ой"])[0]+", окажется из "+
f[g]+".";window.vopr.ver=[""+(e[g]/a).ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},11:function(){var a="Стрелок Солдат Матрос Ополченец Боец Партизан Курсант Десантник".split(" ").iz(),c=sl(0.1,0.9,0.1),d=sl1();window.vopr.txt=a+" стреляет по мишени один раз. В случае промаха "+a.toLowerCase()+" делает второй выстрел по той же мишени. Вероятность попасть в мишень при одном выстреле равна "+c.ts()+". Найдите вероятность того, что мишень "+["не будет поражена ни первым, ни вторым выстрелом.",
"будет поражена (либо первым, либо вторым выстрелом)."][d];window.vopr.ver=[(d?1-(1-c)*(1-c):(1-c)*(1-c)).ts()];window.vopr.rsh="Вероятность того, что мишень будет поражена с первого раза, составляет $"+c.ts()+"$. Вероятность того, что мишень с первого раза поражена не будет, составляет $"+(1-c).ts()+"$. Вероятность того, что мишень не будет поражена с первого раза, но будет поражена со второго, составляет $"+(1-c).ts()+"\\cdot"+c.ts()+"="+(c*(1-c)).ts()+"$.Вероятности несовместных событий складываются, значит, мишень будет поражена с вероятностью $"+
c.ts()+"+"+(1-c).ts()+"\\cdot"+c.ts()+"="+(1-(1-c)*(1-c)).ts()+"$."+(" Вероятность того, что мишень поражена не будет, составляет $1-"+(1-(1-c)*(1-c)).ts()+"="+((1-c)*(1-c)).ts()+"$").esli(!d)},12:function(){var a=sl(0.01,0.19,0.01),c=sl(2);window.vopr.txt="Вероятность того, что батарейка бракованная, равна "+a.ts()+". Покупатель в магазине выбирает случайную упаковку, в которой две таких батарейки. Найдите вероятность того, что "+["обе батарейки окажутся исправными.","обе батарейки окажутся неисправными.",
"исправной окажется ровно одна батарейка."][c];window.vopr.ver=[[(1-a)*(1-a),a*a,2*(1-a)*a][c].ts()];window.vopr.rsh=["Отдельно взятая батарейка исправна с вероятностью $1-"+a.ts()+"="+(1-a).ts()+"$. Вероятности независимых событий перемножаются: $"+(1-a).ts()+"\\cdot"+(1-a).ts()+"="+((1-a)*(1-a)).ts()+"$","Отдельно взятая батарейка неисправна с вероятностью "+a.ts()+". Вероятности независимых событий перемножаются: $"+a.ts()+"\\cdot"+a.ts()+"="+(a*a).ts()+"$","Отдельно взятая батарейка исправна с вероятностью $1-"+
a.ts()+"="+(1-a).ts()+"$. Нас интересуют две ситуации: либо первая батарейка исправна, а вторая нет - вероятность этого равна $"+(1-a).ts()+"\\cdot"+a.ts()+"="+((1-a)*a).ts()+"$ (т. к. вероятности независимых событий перемножаются),либо первая батарейка неисправна, а вторая исправна, что произойдёт с вероятностью $"+a.ts()+"\\cdot"+(1-a).ts()+"="+((1-a)*a).ts()+"$. Вероятности несовместных событий складываются: $"+((1-a)*a).ts()+"+"+((1-a)*a).ts()+"="+(2*(1-a)*a).ts()+"$"][c]},13:function(){var a=
sl(0.1,0.95,0.01),c=sl(0.1,0.95,0.01),d=om.rusbukv.iz(2),e=sl(2);window.vopr.txt="Если гроссмейстер "+d[0]+". играет белыми, то он выигрывает у гроссмейстера "+d[1]+". с вероятностью "+a.ts()+". Если "+d[0]+". играет черными, то "+d[0]+". выигрывает у "+d[1]+". с вероятностью "+c.ts()+". Гроссмейстеры "+d[0]+". и "+d[1]+". играют две партии, причем во второй партии меняют цвет фигур. Найдите вероятность того, что "+[[d[0]+". выиграет",d[1]+". проиграет"].iz()+" оба раза.",[d[1]+". выиграет",d[0]+
". проиграет"].iz()+" оба раза.",d.iz()+". "+["вы","про"].iz()+"играет ровно одну партию."][e];window.vopr.ver=[[(a*c).ts(),((1-a)*(1-c)).ts(),(a*(1-c)+c*(1-a)).ts()][e]];window.vopr.rsh=["Результаты первой и второй партий  - независимые события.Вероятности того, что "+d[0]+". выиграет партию белыми и того, что "+d[0]+". выиграет партию чёрными, перемножаются: $"+a.ts()+"\\cdot"+c.ts()+"="+(a*c).ts()+"$","Вероятность того, что "+d[1]+". выиграет партию чёрными, равна $1-"+a.ts()+"="+(1-a).ts()+"$.Вероятность того, что "+
d[1]+". выиграет партию белыми, равна $1-"+c.ts()+"="+(1-c).ts()+"$.Результаты первой и второй партий  - независимые события. Вероятности того, что "+d[1]+". выиграет партию белыми и того, что "+d[1]+". выиграет партию чёрными, перемножаются: $"+(1-a).ts()+"\\cdot"+(1-c).ts()+"="+((1-a)*(1-c)).ts()+"$","Результаты первой и второй партий  - независимые события.Нас интересуют две ситуации: либо "+d[0]+". проиграл партию белыми, но выиграл чёрными, либо наоборот. Эти два события несовместны.Значит, итоговая формула - это сумма двух произведений:$(1-"+
a.ts()+")\\cdot"+c.ts()+"+"+a.ts()+"\\cdot(1-"+c.ts()+")="+(a*(1-c)+c*(1-a)).ts()+"$"][e]},14:function(){var a=sl(0.01,0.95,0.01),c=sl(0.01,1-a-0.02,0.01),d="Теорема Ролля;Теорема Лагранжа;Теорема Дарбу;Производные и дифференциалы высших порядков;Теорема Коши;Правило Лопиталя".split(";").iz(2);window.vopr.txt='На коллоквиуме по математическому анализу студенту достаётся один из вопросов. Вероятность того, что это вопрос по теме "'+d[0]+'", равна '+a.ts()+'. Вероятность того, что это вопрос по теме "'+
d[1]+'", равна '+c.ts()+". Вопросов, которые одновременно относятся к этим двум темам, нет. Найдите вероятность того, что на коллоквиуме студенту достанется вопрос по одной из этих двух тем.";window.vopr.ver=[(a+c).ts()];window.vopr.rsh="Вероятность одного из несовместных событий равна сумме вероятностей этих событий:$"+a.ts()+"+"+c.ts()+"="+(a+c).ts()+"$."},1:function(){(function(){function a(c,d){return d>c?0:d==c||0==d?1:a(c-1,d-1)+a(c-1,d)}var c=sluchch(2,4),d=sluchch(1,c),e=sluchiz(window.moneta,
1)[0];window.vopr.txt="В случайном эксперименте симметричную монету бросают "+c+" раза."+(" Какова вероятность того, что "+e+" выпадет "+window.razy[d]+"?");window.vopr.ver=[""+a(c,d)/Math.pow(2,c)];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0})()},2:function(){var a=sluchch(1,20),c=sluchch(2,3);window.vopr.txt="В случайном эксперименте бросают "+c+" игральные кости. Найдите вероятность того, что в сумме выпадет "+a+" "+chislit(a,"очко","очка","очков")+". Результат округлите до сотых.";
window.vopr.ver=[""+(om.igrkosti[c][a]/(6).pow(c)).toFixedLess(2).toStandart()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},3:function(){var a=sluchiz([20,25,40,80,100,125])[0],c=sluchch(2,a/2),d=sluchch(2,a/2),e=[c,d,a-c-d],f=sluchiz(om.strany.re,3),g=sluchch(2),h=sluchiz(om.sport.pe)[0];window.vopr.txt="В чемпионате по "+h+" участвуют "+a+" спортсменок: "+c+" из "+f[0]+", "+d+" из "+f[1]+", остальные — из "+f[2]+". Порядок, в котором выступают спортсменки, определяется жребием. Найдите вероятность того, что спортсменка, выступающая "+
sluchiz(["первой","последней","предпоследней","второй","третьей",sluchch(4,a)+"-ой"])[0]+", окажется из "+f[g]+".";window.vopr.ver=[""+(e[g]/a).ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},4:function(){var a=sluchiz([100,200,250,400,500,1E3,2E3])[0],c=sluchch(2,20),d=sluchch(1),e=sluchch(1),f=(d?c:a-c)/a,c=e?a-c:c,g=sluchch(om.tovary.ie.length-1);window.vopr.txt="В среднем из "+a+" "+om.tovary.rm[g]+", поступивших в продажу, "+c+" "+(e?"не ":"")+chislit(c,
"имеет","имеют","имеют")+" дефект"+(!e?"ы":"ов")+". Найдите вероятность того, что один случайным образом выбранный экземпляр товара "+(d?"имеет дефекты":"не имеет дефектов")+".";window.vopr.ver=[""+f.ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},5:function(){var a=sluchiz([20,25,40,80,100,125])[0],c=sluchch(2,a/3),d=sluchch(2,a/3-2),e=sluchch(2,a/3-2),f=a-c-d,e=[c,d,f,e],g=sluchiz(om.strany.re,4),h=sluchch(2),i=sluchiz(om.sport.pe)[0];window.vopr.txt=
"В чемпионате по "+i+" участвуют "+a+" спортсменок: "+c+" из "+g[0]+", "+d+" из "+g[1]+", "+f+" из "+g[2]+", остальные — из "+g[3]+". Порядок, в котором выступают спортсменки, определяется жребием. Найдите вероятность того, что спортсменка, выступающая "+sluchiz(["первой","последней","предпоследней","второй","третьей",sluchch(4,a)+"-ой"])[0]+", окажется из "+g[h]+".";window.vopr.ver=[""+(e[h]/a).ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},6:function(){var a=
sl1(),c=sl1(),d,e="11234567890";do{d=sluchch(1,3);var f=sluchch(2,4),g=sluchch(f+3,20),h=sluchch(3,6)*d*(g-f),e=sluchch(3,7)*d*f;d=f*h+(g-f)*e;e=""+[h,e][a-c]/d}while(6<=e.length);var i=[[sluchch(1,f)+"-й","первый","второй"],[g+1-sluchch(1,f)+"-й","последний","предпоследний"]];window.vopr.txt=["Научная конференция","Песенный конкурс"].iz()+" проводится в "+g+" дней. Всего запланировано "+chislitlx(d,"выступление")+" — "+["первые","последние"][a]+" "+f+" дня по "+chislitlx(h,"выступление")+", остальные распределены поровну между оставшимися днями. Порядок выступлений определяется жеребьёвкой. Какова вероятность, что выступление товарища "+
om.rusbukv.iz()+". окажется запланированным на "+i[c].iz()+" день мероприятия?";window.vopr.ver=[e.ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},7:function(){var a=sluchiz([20,25,40,80,100,125])[0],c=sluchch(2,a/2),d=sluchch(2,a/2),e=a-c-d,f=[c,d,e],g=sluchiz(om.strany.re,3),h=sluchch(2);sluchiz(om.sport.pe);window.vopr.txt="На семинар приехали "+c+" учёных из "+g[0]+", "+d+" из "+g[1]+" и "+e+" из "+g[2]+". Порядок докладов определяется жеребьёвкой. Найдите вероятность того, что "+
sluchiz(["первым","последним","предпоследним","вторым","третьим",sluchch(4,a)+"-м"])[0]+" окажется доклад учёного из "+g[h]+".";window.vopr.ver=[""+(f[h]/a).ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},8:function(){var a=sluchiz([20,25,40,80,100,125])[0],c=sluchch(1,7),d=sluchch(2,a/2),a=a*c+1,d=d*c+1,c=om.imenaj.ie.iz(),e=om.sportparn.pe.iz(),f=sluchch(1),g=(d-1)/(a-1),g=f?g:1-g;window.vopr.txt="Перед началом первого тура чемпионата по "+e+" участниц разбивают на игровые пары случайным образом с помощью жребия. Всего в чемпионате участвует "+
chislitM(a,"спортсменка","спортсменки","спортсменок")+", среди которых "+chislitM(d,"участница","участницы","участниц")+" из России, в том числе "+c+". Найдите вероятность того, что в первом туре "+c+" будет играть с какой-либо спортсменкой "+(f?"":"не ")+"из России.";window.vopr.ver=[""+g.ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},9:function(){var a=[20,25,40,50].iz(),c=sluchch(2,a-1),d=sluchch(1),e=(d?a-c:c)/a,f=[["математике","логарифмам"],["математике",
"неравенствам"],["математике","уравнениям"],["биологии","ботанике"],["биологии","зоологии"]].iz();window.vopr.txt="В сборнике билетов по "+f[0]+" всего "+a+" билетов, в "+c+" из них встречается вопрос по "+f[1]+". Найдите вероятность того, что в случайно выбранном на экзамене билете школьнику "+"не ".esli(d)+"достанется вопрос по "+f[1]+".";window.vopr.ver=[""+e.ts()];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},main:function(){window.nomer=sl(1,14);window.comment=
"Начала теории вероятностей."}},B16:{1:function(){var a=sluchch(11,19),c=sluchch(10,90,10),d=sluchch(10,90,10),e=(a*d*c/1E3).toFixedLess(3),a="При температуре $0^\\circ {\\rm{C}}$ рельс имеет длину $l_0="+c+"$ м. При возрастании температуры происходит тепловое расширение рельса, и его длина, выраженная в метрах, меняется по закону $l(t^\\circ ) = l_0 (1 + \\alpha  \\cdot t^\\circ)$, где $\\alpha="+(a/10).toFixedLess(3)+"\\cdot 10^{-5}(^\\circ {\\rm{C}})^{-1}$ — коэффициент теплового расширения, $t^\\circ$  — температура (в градусах Цельсия). При какой температуре рельс удлинится на "+
e+" мм? Ответ выразите в градусах Цельсия.";window.vopr.txt=a;window.vopr.ver=[""+d];window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},2:function(){var a=sluchch(50,500,10),c=sluchch(a+10,700,10),d=sluchch(1E3,2E4,100)*(c-a),e=sluchch(1E4,d-1E4,100),e=svVel([{vel:"цена за единицу продукции",zna:c,bkv:"p",rod:1,nah:1,nmn:"руб."},{vel:"переменные затраты на производство одной единицы продукции",zna:a,bkv:"v",rod:3,nah:1,nmn:"руб."},{vel:"постоянные расходы предприятия",
zna:e,bkv:"f",rod:3,nah:1,nmn:"руб."},{vel:"месячная операционная прибыль предприятия",zna:d-e,rod:1,nah:1,nmn:"руб."}]);window.vopr.ver=[""+e.splice(0,1)];window.vopr.txt="Некоторая компания продает свою продукцию. Месячная операционная прибыль предприятия (в рублях) вычисляется по формуле $a(q)=q(p-v)-f$."+e.shuffle().soed();window.vopr.kat.log=0;window.vopr.kat.prz=0;window.vopr.kat.drs=0;window.vopr.kat.tri=0},main:function(){window.nomer=sl(1,2);window.comment="Расчётные задачи."}}};
