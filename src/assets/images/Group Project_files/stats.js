google.maps.__gjsload__('stats', function(_){'use strict';var j3=function(a,b,c){var d=[];_.Ec(a,function(a,c){d.push(c+b+a)});return d.join(c)},k3=function(a,b,c,d){var e={};e.host=window.document.location&&window.document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},Jea=function(a){var b={};_.Ec(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return j3(b,":",",")},Kea=function(a,b,c,d){var e=_.P.b[23],f=_.P.b[22];this.D=a;this.G=
b;this.H=null!=e?e:500;this.l=null!=f?f:2;this.C=c;this.m=d;this.f=new _.jk;this.b=0;this.j=_.Ga();l3(this)},l3=function(a){window.setTimeout(function(){Lea(a);l3(a)},Math.min(a.H*Math.pow(a.l,a.b),2147483647))},m3=function(a,b,c){a.f.set(b,c)},Lea=function(a){var b=k3(a.G,a.C,a.m,void 0);b.t=a.b+"-"+(_.Ga()-a.j);a.f.forEach(function(a,d){a=a();0<a&&(b[d]=Number(a.toFixed(2))+(_.qm()?"-if":""))});a.D.b({ev:"api_snap"},b);++a.b},n3=function(a,b,c,d,e){this.m=a;this.D=b;this.l=c;this.f=d;this.j=e;this.b=
new _.jk;this.C=_.Ga()},o3=function(a,b,c){this.l=b;this.f=a+"/maps/gen_204";this.j=c},p3=function(){this.b=new _.jk},Mea=function(a){var b=0,c=0;a.b.forEach(function(a){b+=a.Dp;c+=a.ap});return c?b/c:0},q3=function(a,b,c,d,e){this.C=a;this.D=b;this.m=c;this.j=d;this.l=e;this.f={};this.b=[]},r3=function(a,b,c,d){this.j=a;_.B.bind(this.j,"set_at",this,this.l);_.B.bind(this.j,"insert_at",this,this.l);this.C=b;this.D=c;this.m=d;this.f=0;this.b={};this.l()},s3=function(){this.j=_.uf(_.P);var a;_.eg[35]?
(a=_.lf(_.P).b[11],a=null!=a?a:""):a=_.Hy;this.b=new o3(a,_.uj,window.document);new r3(_.qj,(0,_.u)(this.b.b,this.b),_.jg,!!this.j);a=_.qf(_.zf());this.D=a.split(".")[1]||a;this.G={};this.C={};this.m={};this.H={};this.I=_.tf();_.tj&&(this.l=new Kea(this.b,this.D,this.I,this.j))};
n3.prototype.G=function(a){var b=_.ra(void 0)?void 0:1;this.b.isEmpty()&&window.setTimeout((0,_.u)(function(){var a=k3(this.D,this.l,this.f,this.j);a.t=_.Ga()-this.C;var b=this.b;_.kk(b);for(var e={},f=0;f<b.b.length;f++){var g=b.b[f];e[g]=b.J[g]}_.rC(a,e);this.b.clear();this.m.b({ev:"api_maprft"},a)},this),500);b=this.b.get(a,0)+b;this.b.set(a,b)};
o3.prototype.b=function(a,b){b=b||{};var c=_.Vk().toString(36);b.src="apiv3";b.token=this.l;b.ts=c.substr(c.length-6);a.cad=Jea(b);a=j3(a,"=","&");a=this.f+"?target=api&"+a;this.j.createElement("img").src=a;(b=_.Jc.__gm_captureCSI)&&b(a)};p3.prototype.f=function(a,b,c){this.b.set(_.pb(a),{Dp:b,ap:c})};q3.prototype.G=function(a){this.f[a]||(this.f[a]=!0,this.b.push(a),2>this.b.length&&_.IC(this,this.H,500))};
q3.prototype.H=function(){for(var a=k3(this.D,this.m,this.j,this.l),b=0,c;c=this.b[b];++b)a[c]="1";a.hybrid=+((_.Kl()||!_.Jl())&&_.Jl());this.b.length=0;this.C.b({ev:"api_mapft"},a)};r3.prototype.l=function(){for(var a;a=this.j.removeAt(0);){var b=a.Eo;a=a.timestamp-this.D;++this.f;this.b[b]||(this.b[b]=0);++this.b[b];if(20<=this.f&&!(this.f%5)){var c={};c.s=b;c.sr=this.b[b];c.tr=this.f;c.te=a;c.hc=this.m?"1":"0";this.C({ev:"api_services"},c)}}};s3.prototype.U=function(a){a=_.pb(a);this.G[a]||(this.G[a]=new q3(this.b,this.D,this.I,this.j));return this.G[a]};s3.prototype.P=function(a){a=_.pb(a);this.C[a]||(this.C[a]=new n3(this.b,this.D,1,this.j));return this.C[a]};s3.prototype.f=function(a){if(this.l){this.m[a]||(this.m[a]=new _.JD,m3(this.l,a,function(){return b.pb()}));var b=this.m[a];return b}};s3.prototype.K=function(a){if(this.l){this.H[a]||(this.H[a]=new p3,m3(this.l,a,function(){return Mea(b)}));var b=this.H[a];return b}};
var Nea=new s3;_.lc("stats",Nea);});
