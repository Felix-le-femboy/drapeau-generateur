var $=function(i){return document.getElementById(i)};
var img=null;
var FL=[["solid","Couleurs unies",[]],["rainbow","Dégradé multicolore",["#ff0000","#ff9900","#ffee00","#00b400","#00c8ff","#2040ff","#9a1fd6"]],["custom","Personnalisé",[]],
["pride","Arc-en-ciel",["#e40303","#ff8c00","#ffed00","#008026","#004dff","#750787"]],
["gay","Gay",["#078d70","#26ceaa","#98e8c1","#ffffff","#7bade2","#5049cc","#3d1a78"]],
["lesbian","Lesbien",["#d52d00","#ef7627","#ff9a56","#ffffff","#d162a4","#b55690","#a30262"]],
["butch","Butch",["#1b3486","#697db6","#8a92a9","#ffffff","#d1c6e8","#600fd6","#51038a"]],
["bi","Bi",["#d60270","#d60270","#9b4f96","#0038a8","#0038a8"]],
["pan","Pan",["#ff218c","#ffd800","#21b1ff"]],
["poly","Polysexuel",["#f61cb9","#07d569","#1c92f6"]],
["omni","Omnisexuel",["#fe9ace","#ff53bf","#200044","#6760fe","#8ea6ff"]],
["trans","Trans",["#5bcefa","#f5a9b8","#ffffff","#f5a9b8","#5bcefa"]],
["tmasc","Transmasculin",["#ff8abd","#cdf5fe","#9ae9ff","#74dfff","#9ae9ff","#cdf5fe","#ff8abd"]],
["nb","Non-binaire",["#fcf434","#ffffff","#9c59d1","#2c2c2c"]],
["gq","Genderqueer",["#b57edc","#ffffff","#4a8123"]],
["fluid","Genre fluide",["#ff75a2","#ffffff","#be18d6","#000000","#333ebd"]],
["pang","Pangenre",["#fff798","#ffddcd","#ffebfb","#ffffff","#ffebfb","#ffddcd","#fff798"]],
["ag","Agenre",["#000000","#bababa","#ffffff","#baf484","#ffffff","#bababa","#000000"]],
["ace","Asexuel",["#000000","#a3a3a3","#ffffff","#800080"]],
["aro","Aromantique",["#3da542","#a7d379","#ffffff","#a9a9a9","#000000"]],
["femboy","Femboy",["#d460a7","#e4adcd","#ffffff","#57cef8","#ffffff","#e4adcd","#d460a7"]],
["antiia","Anti IA générative",["#000000","#d62828","#ffffff","#d62828","#000000"]]];
var FLOPT=FL.map(function(f){return f[0]+"|"+f[1]});
var FN={};FL.forEach(function(f){FN[f[0]]=f[2]});
var KD=["#ff0000","#ffffff","#0000ff","#ffffff","#ff0000","#00aa00","#ffee00","#8800cc","#000000"];
var FONTS=["Futura,'Century Gothic','Trebuchet MS',Arial,sans-serif|Futura","'Arial Black',Arial,sans-serif|Arial Black","Impact,'Arial Narrow Bold',sans-serif|Impact","Verdana,Geneva,sans-serif|Verdana","Tahoma,Geneva,sans-serif|Tahoma","'Trebuchet MS',Arial,sans-serif|Trebuchet","Georgia,serif|Georgia","'Times New Roman',Times,serif|Times","Palatino,'Palatino Linotype',serif|Palatino","'Courier New',monospace|Machine","'Comic Sans MS',cursive|Comic Sans","system-ui,sans-serif|Système"];
var SEC=[
["Format",true,[
["sm","sel","Format","logo",["logo|Logo seul (rond)","flag|Drapeau rectangulaire avec logo"]],
["ra","sel","Proportions du drapeau","3:2",["3:2|3:2 classique","16:9|16:9","4:3|4:3","1:1|Carré","2:3|2:3 vertical"]],
["bd","sel","Diagonale","l",["l|Colorée en haut à gauche","r|Colorée en haut à droite","bl|Colorée en bas à gauche","br|Colorée en bas à droite","n|Aucune : drapeau entier"]],
["dp","rng","Position de la diagonale",78,[30,100]],
["bk","col","Moitié sombre","#000000"],["bc","col","Fond (couleur unie)","#5bcefa"],
["bs","rng","Taille du logo sur le drapeau",68,[20,100]],
["bw","rng","Bordure du drapeau",0,[0,60]],["bcl","col","Couleur de la bordure","#ffffff"],
["ow","chk","Contour autour du logo",false],["oc","col","Couleur du contour","#ffffff"],
["cv","sel","Fond de l’image exportée","none",["none|Transparent","color|Couleur"]],["cvc","col","Couleur du fond","#ffffff"],
["models","box"]]],
["Drapeaux LGBT",true,[
["fl","sel","Drapeau","antiia",FLOPT],["gal","box"],
["mx","sel","Mélanger avec un second drapeau","none",["none|Aucun mélange","cat|A en haut, B en bas","alt|Bandes alternées A et B","blend|Fondu de A vers B"]],
["fl2","sel","Second drapeau (B)","trans",FLOPT],
["cn","rng","Bandes du drapeau personnalisé",5,[2,9]],["kbox","box"],
["aT","chk","Appliquer au drapeau du haut du logo",true],["aB","chk","Appliquer au drapeau du bas du logo",false],
["aG","chk","Appliquer au fond du drapeau rectangulaire",true],["aR","chk","Appliquer à l’anneau",false],
["edw","rng","Contour des drapeaux rayés",0,[0,16]],["edc","col","Couleur du contour","#000000"]]],
["Couleurs",false,[["presets","box"],["tools","box"],["c2","col","Drapeau du haut","#ff0000"],["c1","col","Drapeau du bas","#000000"],["bg","col","Fond central","#ffffff"],["rg","col","Anneau","#000000"],["tr","chk","Centre transparent",false]]],
["Textes",false,[
["txt","txt","Texte du haut","ANTI IA",30],["txt2","txt","Texte du bas","GÉNÉRATIVE",24],
["cs","sel","Casse","up",["up|MAJUSCULES","low|minuscules","raw|Tel quel"]],["ff","sel","Police","",FONTS],
["fw","sel","Graisse","bold",["normal|Normale","bold|Grasse","900|Très grasse"]],["fi","chk","Italique",false],
["ts","rng","Taille du texte",78,[30,110]],["ls","rng","Espacement des lettres",4,[0,16]],
["tc","col","Couleur du texte","#ffffff"],["tc2","col","Couleur du texte du bas","#ffffff"],["cb","chk","Texte du bas d’une autre couleur",false],
["to","rng","Contour du texte",0,[0,10]],["toc","col","Couleur du contour du texte","#000000"],
["tof","rng","Décalage du texte du haut (°)",0,[-40,40]],["tob","rng","Décalage du texte du bas (°)",0,[-40,40]],
["sep","sel","Séparateurs aux extrémités","none",["none|Aucun","dot|Points","star|Étoiles"]]]],
["Anneau et décoration",false,[["rr","rng","Épaisseur de l’anneau",277,[190,330]],["irc","col","Couleur des filets","#ffffff"],["ir","chk","Filet intérieur",false],["orr","chk","Filet extérieur",false]]],
["Logo central",false,[["emb","sel","Emblème","flags",["flags|Deux drapeaux","star|Étoile","img|Mon image…","none|Aucun"]],["mir","chk","Inverser les drapeaux (miroir)",false],["fs","rng","Taille",100,[40,140]],["rot","rng","Rotation",0,[-30,30]],["ex","rng","Décalage horizontal",0,[-100,100]],["ey","rng","Décalage vertical",0,[-100,100]]]],
["Export et aperçu",false,[["px","sel","Largeur de l’image","2048",["512|512 px","1024|1024 px","2048|2048 px","4096|4096 px"]],["fx","sel","Format","png",["png|PNG","jpg|JPG","webp|WEBP"]],["pv","sel","Fond de l’aperçu","chk",["chk|Damier","white|Blanc","black|Noir","grey|Gris"]]]]];
var ids=[],DEF={};
function ctl(it){
  var id=it[0],t=it[1],lb=it[2],df=it[3],ex=it[4],h='';
  if(t==='box')return '<div class="f" id="'+id+'"></div>';
  ids.push(id);
  if(t==='chk')return '<div class="f chk"><input type="checkbox" id="'+id+'"'+(df?' checked':'')+'><span>'+lb+'</span></div>';
  if(t==='sel')h='<select id="'+id+'">'+ex.map(function(o){var p=o.split('|'),sel=(p[0]===df||(df===''&&o===ex[0]));return '<option value="'+p[0]+'"'+(sel?' selected':'')+'>'+p[1]+'</option>'}).join('')+'</select>';
  else if(t==='rng')h='<input type="range" id="'+id+'" min="'+ex[0]+'" max="'+ex[1]+'" value="'+df+'">';
  else if(t==='col')h='<input type="color" id="'+id+'" value="'+df+'">';
  else h='<input type="text" id="'+id+'" value="'+df+'" maxlength="'+ex+'">';
  return '<div'+(t==='col'?'':' class="f"')+'><label>'+lb+'</label>'+h+'</div>';
}
$('ctl').innerHTML=SEC.map(function(s){return '<details'+(s[1]?' open':'')+'><summary>'+s[0]+'</summary><div class="in">'+s[2].map(ctl).join('')+'</div></details>'}).join('');
function esc(s){return s.replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function get(i){var e=$(i);return e.type==='checkbox'?e.checked:e.value}
function set(i,x){var e=$(i);if(e.type==='checkbox')e.checked=!!x;else e.value=x}
function hx(c){return [1,3,5].map(function(i){return parseInt(c.substr(i,2),16)})}
function mixc(a,b,t){var p=hx(a),q=hx(b);return '#'+[0,1,2].map(function(i){var n=Math.round(p[i]+(q[i]-p[i])*t).toString(16);return n.length<2?'0'+n:n}).join('')}
function raw(f){
  if(f==='custom'){var n=+get('cn'),a=[];for(var i=0;i<n;i++)a.push(get('k'+i));return a}
  return FN[f]||[];
}
function cols(f){
  var a=raw(f),m=get('mx');
  if(m==='none'||f==='solid'||!a.length)return a;
  var b=raw(get('fl2'));if(!b.length)return a;
  if(m==='cat')return a.concat(b);
  var i,o=[],n;
  if(m==='alt'){n=Math.max(a.length,b.length);for(i=0;i<n;i++){o.push(a[i%a.length]);o.push(b[i%b.length])}return o}
  n=8;for(i=0;i<n;i++)o.push(mixc(a[Math.floor(i/n*a.length)],b[Math.floor(i/n*b.length)],i/(n-1)));return o;
}
function smooth(f){return f==='rainbow'&&get('mx')==='none'}
function css(f){
  if(f==='solid')return 'linear-gradient(135deg,#ff0000 50%,#000 50%)';
  if(f==='custom')return 'linear-gradient(135deg,#ff0000 25%,#fff 25% 50%,#0000ff 50% 75%,#fff 75%)';
  var c=raw(f),n=c.length;
  if(f==='rainbow')return 'linear-gradient(135deg,'+c.join(',')+')';
  return 'linear-gradient(to bottom,'+c.map(function(x,i){return x+' '+(i/n*100)+'% '+((i+1)/n*100)+'%'}).join(',')+')';
}
function paint(f,id,solid,defs){
  if(f==='solid')return solid;
  var a=cols(f),n=a.length,st='',sm=smooth(f);
  if(!n)return solid;
  a.forEach(function(c,i){st+=sm?'<stop offset="'+(i/(n-1))+'" stop-color="'+c+'"/>':'<stop offset="'+(i/n)+'" stop-color="'+c+'"/><stop offset="'+((i+1)/n)+'" stop-color="'+c+'"/>'});
  defs.push('<linearGradient id="'+id+'" x1="0" y1="0" x2="'+(sm?1:0)+'" y2="1">'+st+'</linearGradient>');
  return 'url(#'+id+')';
}
var TT=[[182,180,235,215,300,238,365,232],[365,232,430,225,460,178,520,178],[520,178,560,178,590,215,612,250]];
var TB=[[98,350,110,360,130,372,160,390],[160,390,230,428,320,432,395,418],[395,418,440,410,480,420,508,448]];
var BT=[[100,368,150,425,235,455,325,445],[325,445,385,437,420,420,440,430]];
var BB=[[100,368,110,415,135,452,175,482],[175,482,230,520,320,525,372,512]];
var RED="M182,180 C235,215 300,238 365,232 C430,225 460,178 520,178 C560,178 590,215 612,250 L498,625 L455,625 L508,448 C480,420 440,410 395,418 C320,432 230,428 160,390 C130,372 110,360 98,350 C98,290 150,235 182,180 Z";
var BLK="M100,368 C150,425 235,455 325,445 C385,437 420,420 440,430 L378,638 L335,638 L372,512 C320,525 230,520 175,482 C135,452 110,415 100,368 Z";
var P1="M612,250 L498,625 L455,625 L508,448 Z",P2="M440,430 L378,638 L335,638 L372,512 Z";
function samp(segs){var p=[];segs.forEach(function(s){for(var j=0;j<=20;j++){var t=j/20,u=1-t;p.push([u*u*u*s[0]+3*u*u*t*s[2]+3*u*t*t*s[4]+t*t*t*s[6],u*u*u*s[1]+3*u*u*t*s[3]+3*u*t*t*s[5]+t*t*t*s[7]])}});return p}
function res(p,n){
  var L=[0],i,o=[],j=1;
  for(i=1;i<p.length;i++)L.push(L[i-1]+Math.hypot(p[i][0]-p[i-1][0],p[i][1]-p[i-1][1]));
  for(var k=0;k<=n;k++){var d=L[L.length-1]*k/n;while(j<p.length-1&&L[j]<d)j++;var f=(d-L[j-1])/((L[j]-L[j-1])||1);o.push([p[j-1][0]+(p[j][0]-p[j-1][0])*f,p[j-1][1]+(p[j][1]-p[j-1][1])*f])}
  return o;
}
function pt(p){return p[0].toFixed(1)+','+p[1].toFixed(1)}
function lp(a,b,f){return [a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f]}
function wf(path,t,b,pole,f,solid,id,defs,ed,edc){
  var a=cols(f),n=a.length;
  if(f==='solid'||!n)return '<path d="'+path+'" fill="'+solid+'"/>';
  if(smooth(f))return '<path d="'+path+'" fill="'+paint(f,id,solid,defs)+'"/>'+(ed?'<path d="'+path+'" fill="none" stroke="'+edc+'" stroke-width="'+ed+'" stroke-linejoin="round"/>':'');
  var N=30,T=res(samp(t),N),B=res(samp(b),N);
  var o='<path d="'+pole+'" fill="'+a[n-1]+'" stroke="'+a[n-1]+'" stroke-width="1"/>';
  for(var i=0;i<n;i++){
    var p=[],q=[];
    for(var k=0;k<=N;k++){p.push(lp(T[k],B[k],i/n));q.push(lp(T[k],B[k],(i+1)/n))}
    o+='<path d="M'+p.map(pt).join('L')+'L'+q.reverse().map(pt).join('L')+'Z" fill="'+a[i]+'" stroke="'+a[i]+'" stroke-width="1"/>';
  }
  if(ed)o+='<path d="'+path+'" fill="none" stroke="'+edc+'" stroke-width="'+ed+'" stroke-linejoin="round"/>';
  return o;
}
function star(cx,cy,r,f){var p=[];for(var i=0;i<10;i++){var a=-Math.PI/2+i*Math.PI/5,d=i%2?r*.4:r;p.push((cx+d*Math.cos(a)).toFixed(1)+','+(cy+d*Math.sin(a)).toFixed(1))}return '<polygon points="'+p.join(' ')+'" fill="'+f+'"/>'}
var DIM={"3:2":[1200,800],"16:9":[1280,720],"4:3":[1200,900],"1:1":[1000,1000],"2:3":[800,1200]};
function dims(){return get('sm')==='flag'?DIM[get('ra')]:[740,740]}
function build(){
  var v={};ids.forEach(function(i){v[i]=get(i)});
  var dfs=[],fl=v.fl,R=+v.rr,ls=+v.ls,mid=(R+366)/2,ed=+v.edw;
  var top=v.aT?fl:'solid',bot=v.aB?fl:'solid';
  var pR=v.aR?paint(fl,'gR',v.rg,dfs):v.rg,pM=v.aG?paint(fl,'gM',v.bc,dfs):v.bc;
  function tx(s){s=v.cs==='up'?s.toUpperCase():v.cs==='low'?s.toLowerCase():s;return esc(s)}
  var tt=tx(v.txt),bt=tx(v.txt2),ff=v.ff.replace(/"/g,"'");
  var base=Math.min(+v.ts,Math.floor((366-R)*1.05));
  function fit(t,r,k){var n=Math.max(1,t.length);return Math.floor((r*Math.PI*k-n*ls)/(n*0.68))}
  var s1=Math.max(10,Math.min(base,fit(tt,mid-0.36*base,1.25))),rt=mid-0.36*s1;
  var s2=Math.max(10,Math.min(base,fit(bt,mid+0.36*base,1.0))),rb=mid+0.36*s2;
  var em='';
  if(v.emb==='flags'){
    em=wf(BLK,BT,BB,P2,bot,v.c1,'gB',dfs,ed,v.edc)+wf(RED,TT,TB,P1,top,v.c2,'gT',dfs,ed,v.edc);
    if(v.mir)em='<g transform="translate(740,0) scale(-1,1)">'+em+'</g>';
  }else if(v.emb==='star')em=star(370,372,230,paint(top,'gT',v.c2,dfs))+star(370,372,100,paint(bot,'gB',v.c1,dfs));
  else if(v.emb==='img'&&img)em='<image href="'+img+'" x="120" y="120" width="500" height="500" preserveAspectRatio="xMidYMid meet"/>';
  var k=R/277*(+v.fs/100);
  em='<g transform="translate('+(370+ +v.ex)+','+(372+ +v.ey)+') scale('+k.toFixed(3)+') rotate('+(+v.rot)+') translate(-370,-372)">'+em+'</g>';
  var ring='M4,370 a366,366 0 1,0 732,0 a366,366 0 1,0 -732,0 Z M'+(370-R)+',372 a'+R+','+R+' 0 1,0 '+(2*R)+',0 a'+R+','+R+' 0 1,0 '+(-2*R)+',0 Z';
  var s='<defs>'+dfs.join('')+'<clipPath id="cp"><circle cx="370" cy="372" r="'+R+'"/></clipPath>'+
   '<path id="at" d="M'+(370-rt)+',372 A'+rt+','+rt+' 0 0,1 '+(370+rt)+',372"/><path id="ab" d="M'+(370-rb)+',372 A'+rb+','+rb+' 0 0,0 '+(370+rb)+',372"/></defs>'+
   '<path d="'+ring+'" fill="'+pR+'" fill-rule="evenodd"/>';
  if(!v.tr)s+='<circle cx="370" cy="372" r="'+R+'" fill="'+v.bg+'"/>';
  s+='<g clip-path="url(#cp)">'+em+'</g>';
  if(v.ir)s+='<circle cx="370" cy="372" r="'+(R+9)+'" fill="none" stroke="'+v.irc+'" stroke-width="4"/>';
  if(v.orr)s+='<circle cx="370" cy="372" r="354" fill="none" stroke="'+v.irc+'" stroke-width="4"/>';
  if(v.sep!=='none'){var sr=Math.max(6,(366-R)*0.18);[370-mid,370+mid].forEach(function(x){s+=v.sep==='star'?star(x,372,sr*1.6,v.tc):'<circle cx="'+x+'" cy="372" r="'+sr+'" fill="'+v.tc+'"/>'})}
  var tcb=v.cb?v.tc2:v.tc,o=+v.to>0?' stroke="'+v.toc+'" stroke-width="'+v.to+'" paint-order="stroke" stroke-linejoin="round"':'';
  function a(c){return 'font-family="'+ff+'" font-weight="'+v.fw+'"'+(v.fi?' font-style="italic"':'')+' fill="'+c+'" text-anchor="middle" letter-spacing="'+ls+'"'+o}
  if(tt.trim())s+='<text '+a(v.tc)+' font-size="'+s1+'" transform="rotate('+(+v.tof)+' 370 372)"><textPath href="#at" startOffset="50%">'+tt+'</textPath></text>';
  if(bt.trim())s+='<text '+a(tcb)+' font-size="'+s2+'" transform="rotate('+(+v.tob)+' 370 372)"><textPath href="#ab" startOffset="50%">'+bt+'</textPath></text>';
  var lg=(v.ow?'<circle cx="370" cy="370" r="366" fill="'+v.oc+'"/>':'')+'<g transform="translate(370,370) scale('+(v.ow?0.94:1)+') translate(-370,-370)">'+s+'</g>';
  var D=dims(),W=D[0],H=D[1],cv=v.cv==='color'?'<rect width="'+W+'" height="'+H+'" fill="'+v.cvc+'"/>':'';
  var open='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'" width="'+W+'" height="'+H+'">'+cv;
  if(v.sm!=='flag')return open+lg+'</svg>';
  var bg='<rect width="'+W+'" height="'+H+'" fill="'+pM+'"/>';
  if(v.bd!=='n'){
    var tf={l:'',r:'translate('+W+',0) scale(-1,1)',bl:'translate(0,'+H+') scale(1,-1)',br:'rotate(180 '+(W/2)+' '+(H/2)+')'}[v.bd];
    bg+='<polygon transform="'+tf+'" points="0,'+(H*v.dp/100)+' '+W+',0 '+W+','+H+' 0,'+H+'" fill="'+v.bk+'"/>';
  }
  if(+v.bw>0)bg+='<rect x="'+(v.bw/2)+'" y="'+(v.bw/2)+'" width="'+(W-v.bw)+'" height="'+(H-v.bw)+'" fill="none" stroke="'+v.bcl+'" stroke-width="'+v.bw+'"/>';
  return open+bg+'<g transform="translate('+(W/2)+','+(H/2)+') scale('+(v.bs/100*Math.min(W,H)/800).toFixed(3)+') translate(-370,-370)">'+lg+'</g></svg>';
}
function store(){try{var o={};ids.concat(KD.map(function(x,i){return 'k'+i})).forEach(function(i){o[i]=get(i)});localStorage.setItem('logo-v5',JSON.stringify(o))}catch(e){}}
function render(){
  $('prev').innerHTML=build();
  var pv=get('pv');$('prev').style.background=pv==='chk'?'':pv;
  var t=document.querySelectorAll('.tile');for(var i=0;i<t.length;i++)t[i].classList.toggle('on',t[i].getAttribute('data-f')===get('fl'));
  store();
}
FL.forEach(function(f){
  var b=document.createElement('button');b.className='tile';b.setAttribute('data-f',f[0]);
  b.innerHTML='<div class="sw" style="background:'+css(f[0])+'"></div>'+f[1];
  b.onclick=function(){set('fl',f[0]);if(f[0]!=='solid'&&!get('aT')&&!get('aB')&&!get('aG')&&!get('aR'))set('aT',true);render()};
  $('gal').appendChild(b);
});
$('gal').className='f gal';$('kbox').className='f kb';$('presets').className='f chips';$('tools').className='f chips';$('models').className='f chips';
KD.forEach(function(c,q){var ki=document.createElement('input');ki.type='color';ki.id='k'+q;ki.value=c;$('kbox').appendChild(ki);ids.push('k'+q)});
ids.forEach(function(i){DEF[i]=get(i);$(i).addEventListener('input',render);$(i).addEventListener('change',render)});
ids=ids.slice(0,ids.length-9);
function allIds(){return ids.concat(KD.map(function(x,i){return 'k'+i}))}
function chip(box,html,fn){var b=document.createElement('button');b.className='chip';b.innerHTML=html;b.onclick=fn;$(box).appendChild(b)}
[["Classique","#000000","#ff0000","#ffffff","#000000","#ffffff"],["Inversé","#ff0000","#000000","#ffffff","#000000","#ffffff"],["Noir et blanc","#000000","#333333","#ffffff","#000000","#ffffff"],["Sombre","#ffffff","#ff0000","#111111","#c4161c","#ffffff"],["Bleu","#0a1a3a","#1e6bff","#ffffff","#0a1a3a","#ffffff"],["Vert","#0b3d1e","#1fa84a","#ffffff","#0b3d1e","#ffffff"],["Violet","#2a0a4a","#8a2be2","#ffffff","#2a0a4a","#ffffff"],["Or","#111111","#f2b705","#ffffff","#111111","#f2b705"]].forEach(function(p){
  chip('presets','<span class="dot" style="background:'+p[2]+'"></span><span class="dot" style="background:'+p[1]+'"></span>'+p[0],function(){set('c1',p[1]);set('c2',p[2]);set('bg',p[3]);set('rg',p[4]);set('tc',p[5]);render()});
});
function setAll(o){Object.keys(o).forEach(function(k){set(k,o[k])});render()}
function model(f,a,b,x){var o={sm:'flag',fl:f,mx:'none',aT:true,aB:false,aG:true,aR:false,c1:'#000000',c2:'#ff0000',rg:'#000000',bg:'#ffffff',tc:'#ffffff',ow:true,oc:'#ffffff',bk:'#000000',bd:'l',dp:78,bs:68,tr:false,txt:a,txt2:b};for(var k in x)o[k]=x[k];setAll(o)}
chip('models','Modèle trans',function(){model('trans','ANTI-TRANSPHOBE','ACTION')});
chip('models','Modèle arc-en-ciel',function(){model('pride','ANTI-HOMOPHOBE','ANTIFASCIST ACTION')});
chip('models','Modèle femboy',function(){model('femboy','FEMBOY','ANTI FASCISTE')});
chip('models','Femboy × trans (mélange)',function(){model('femboy','FEMBOY','TRANS',{mx:'blend',fl2:'trans'})});
chip('tools','⇄ Échanger',function(){var a=get('c1');set('c1',get('c2'));set('c2',a);render()});
chip('tools','🎲 Couleurs',function(){
  var h=Math.floor(Math.random()*360);
  function c(l,s){var x=document.createElement('canvas').getContext('2d');x.fillStyle='hsl('+h+','+s+'%,'+l+'%)';return x.fillStyle}
  set('c2',c(50,85));set('c1',c(12,60));set('rg',c(12,60));set('bg','#ffffff');set('tc','#ffffff');render();
});
chip('tools','🎲 Drapeau',function(){var l=FL.slice(3),p=l[Math.floor(Math.random()*l.length)][0];set('fl',p);if(!get('aT')&&!get('aB')&&!get('aG')&&!get('aR'))set('aT',true);render()});
chip('tools','↺ Réinitialiser',function(){allIds().forEach(function(i){set(i,DEF[i])});img=null;render()});
$('sm').addEventListener('change',function(){if(get('sm')==='flag'&&!get('ow'))set('ow',true);render()});
$('emb').addEventListener('change',function(){if(get('emb')==='img')$('file').click()});
$('file').addEventListener('change',function(e){
  var f=e.target.files[0];if(!f)return;var r=new FileReader();
  r.onload=function(){img=r.result;render()};r.readAsDataURL(f);
});
function say(t){$('msg').textContent=t}
function dl(name,data){
  var b=(data instanceof Blob)?data:new Blob([data],{type:'image/svg+xml'});
  var u=URL.createObjectURL(b),a=document.createElement('a');
  a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();
  setTimeout(function(){URL.revokeObjectURL(u)},4000);
}
async function save(name,data){
  var d=null;
  try{d=(typeof claude!=='undefined'&&claude&&claude.use)?await claude.use('downloads'):null}catch(e){d=null}
  if(d){
    try{await d.save({filename:name,data:data});say('Fichier enregistré.')}
    catch(e){say(e&&e.code==='declined'?'Téléchargement annulé.':'Échec : '+((e&&e.message)||e))}
    return;
  }
  try{dl(name,data);say('Téléchargement lancé.')}
  catch(e){say('Échec : '+((e&&e.message)||e))}
}
$('dsvg').onclick=function(){save('logo.svg',build())};
$('dcp').onclick=function(){
  try{navigator.clipboard.writeText(build()).then(function(){say('Code SVG copié.')},function(){say('Copie impossible : utilisez le téléchargement SVG.')})}
  catch(e){say('Copie impossible : utilisez le téléchargement SVG.')}
};
$('dpng').onclick=function(){
  var D=dims(),n=+get('px'),hh=Math.round(n*D[1]/D[0]),fx=get('fx'),im=new Image();
  var mt={png:'image/png',jpg:'image/jpeg',webp:'image/webp'}[fx];
  im.onload=function(){
    var c=document.createElement('canvas');c.width=n;c.height=hh;var x=c.getContext('2d');
    if(fx==='jpg'){x.fillStyle=get('cv')==='color'?get('cvc'):'#ffffff';x.fillRect(0,0,n,hh)}
    x.drawImage(im,0,0,n,hh);
    c.toBlob(function(b){b?save('logo-'+n+'.'+fx,b):say('Export impossible, utilisez SVG.')},mt,0.95);
  };
  im.onerror=function(){say('Export impossible, utilisez SVG.')};
  im.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(build());
};
try{var o=JSON.parse(localStorage.getItem('logo-v5')||'null');if(o)allIds().forEach(function(i){if(o[i]!==undefined&&i!=='emb')set(i,o[i])})}catch(e){}
render();