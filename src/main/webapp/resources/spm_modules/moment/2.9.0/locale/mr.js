define("moment/2.9.0/locale/mr",[],function(e,t,n){!function(s){"function"==typeof define&&define.amd?define(["moment"],s):"object"==typeof t?n.exports=s(e("moment/2.9.0/moment")):s(("undefined"!=typeof global?global:this).moment)}(function(e){var t={1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},n={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"};return e.defineLocale("mr",{months:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"),monthsShort:"\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"),weekdays:"\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),weekdaysShort:"\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),weekdaysMin:"\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),longDateFormat:{LT:"A h:mm \u0935\u093e\u091c\u0924\u093e",LTS:"A h:mm:ss \u0935\u093e\u091c\u0924\u093e",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u0909\u0926\u094d\u092f\u093e] LT",nextWeek:"dddd, LT",lastDay:"[\u0915\u093e\u0932] LT",lastWeek:"[\u092e\u093e\u0917\u0940\u0932] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0928\u0902\u0924\u0930",past:"%s \u092a\u0942\u0930\u094d\u0935\u0940",s:"\u0938\u0947\u0915\u0902\u0926",m:"\u090f\u0915 \u092e\u093f\u0928\u093f\u091f",mm:"%d \u092e\u093f\u0928\u093f\u091f\u0947",h:"\u090f\u0915 \u0924\u093e\u0938",hh:"%d \u0924\u093e\u0938",d:"\u090f\u0915 \u0926\u093f\u0935\u0938",dd:"%d \u0926\u093f\u0935\u0938",M:"\u090f\u0915 \u092e\u0939\u093f\u0928\u093e",MM:"%d \u092e\u0939\u093f\u0928\u0947",y:"\u090f\u0915 \u0935\u0930\u094d\u0937",yy:"%d \u0935\u0930\u094d\u0937\u0947"},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/,meridiemHour:function(e,t){return 12===e&&(e=0),"\u0930\u093e\u0924\u094d\u0930\u0940"===t?4>e?e:e+12:"\u0938\u0915\u093e\u0933\u0940"===t?e:"\u0926\u0941\u092a\u093e\u0930\u0940"===t?e>=10?e:e+12:"\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940"===t?e+12:void 0},meridiem:function(e){return 4>e?"\u0930\u093e\u0924\u094d\u0930\u0940":10>e?"\u0938\u0915\u093e\u0933\u0940":17>e?"\u0926\u0941\u092a\u093e\u0930\u0940":20>e?"\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940":"\u0930\u093e\u0924\u094d\u0930\u0940"},week:{dow:0,doy:6}})})}),define("moment/2.9.0/moment",[],function(e,t,n){(function(t){function s(e,t,n){switch(arguments.length){case 2:return null!=e?e:t;case 3:return null!=e?e:null!=t?t:n;default:throw new Error("Implement me")}}function a(e,t){return Ut.call(e,t)}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function r(e){vt.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function o(e,t){var n=!0;return y(function(){return n&&(r(e),n=!1),t.apply(this,arguments)},t)}function u(e,t){Yn[e]||(r(t),Yn[e]=!0)}function c(e,t){return function(n){return g(e.call(this,n),t)}}function d(e,t){return function(n){return this.localeData().ordinal(e.call(this,n),t)}}function l(e,t){var n,s,a=12*(t.year()-e.year())+(t.month()-e.month()),i=e.clone().add(a,"months");return 0>t-i?(n=e.clone().add(a-1,"months"),s=(t-i)/(i-n)):(n=e.clone().add(a+1,"months"),s=(t-i)/(n-i)),-(a+s)}function f(e,t,n){var s;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?(s=e.isPM(n),s&&12>t&&(t+=12),s||12!==t||(t=0),t):t}function h(){}function _(e,t){t!==!1&&P(e),p(this,e),this._d=new Date(+e._d),vn===!1&&(vn=!0,vt.updateOffset(this),vn=!1)}function m(e){var t=O(e),n=t.year||0,s=t.quarter||0,a=t.month||0,i=t.week||0,r=t.day||0,o=t.hour||0,u=t.minute||0,c=t.second||0,d=t.millisecond||0;this._milliseconds=+d+1e3*c+6e4*u+36e5*o,this._days=+r+7*i,this._months=+a+3*s+12*n,this._data={},this._locale=vt.localeData(),this._bubble()}function y(e,t){for(var n in t)a(t,n)&&(e[n]=t[n]);return a(t,"toString")&&(e.toString=t.toString),a(t,"valueOf")&&(e.valueOf=t.valueOf),e}function p(e,t){var n,s,a;if("undefined"!=typeof t._isAMomentObject&&(e._isAMomentObject=t._isAMomentObject),"undefined"!=typeof t._i&&(e._i=t._i),"undefined"!=typeof t._f&&(e._f=t._f),"undefined"!=typeof t._l&&(e._l=t._l),"undefined"!=typeof t._strict&&(e._strict=t._strict),"undefined"!=typeof t._tzm&&(e._tzm=t._tzm),"undefined"!=typeof t._isUTC&&(e._isUTC=t._isUTC),"undefined"!=typeof t._offset&&(e._offset=t._offset),"undefined"!=typeof t._pf&&(e._pf=t._pf),"undefined"!=typeof t._locale&&(e._locale=t._locale),It.length>0)for(n in It)s=It[n],a=t[s],"undefined"!=typeof a&&(e[s]=a);return e}function M(e){return 0>e?Math.ceil(e):Math.floor(e)}function g(e,t,n){for(var s=""+Math.abs(e),a=e>=0;s.length<t;)s="0"+s;return(a?n?"+":"":"-")+s}function D(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Y(e,t){var n;return t=z(t,e),e.isBefore(t)?n=D(e,t):(n=D(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n}function w(e,t){return function(n,s){var a,i;return null===s||isNaN(+s)||(u(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period)."),i=n,n=s,s=i),n="string"==typeof n?+n:n,a=vt.duration(n,s),v(this,a,e),this}}function v(e,t,n,s){var a=t._milliseconds,i=t._days,r=t._months;s=null==s?!0:s,a&&e._d.setTime(+e._d+a*n),i&&pt(e,"Date",yt(e,"Date")+i*n),r&&mt(e,yt(e,"Month")+r*n),s&&vt.updateOffset(e,i||r)}function k(e){return"[object Array]"===Object.prototype.toString.call(e)}function b(e){return"[object Date]"===Object.prototype.toString.call(e)||e instanceof Date}function T(e,t,n){var s,a=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),r=0;for(s=0;a>s;s++)(n&&e[s]!==t[s]||!n&&L(e[s])!==L(t[s]))&&r++;return r+i}function S(e){if(e){var t=e.toLowerCase().replace(/(.)s$/,"$1");e=_n[e]||mn[t]||t}return e}function O(e){var t,n,s={};for(n in e)a(e,n)&&(t=S(n),t&&(s[t]=e[n]));return s}function U(e){var n,s;if(0===e.indexOf("week"))n=7,s="day";else{if(0!==e.indexOf("month"))return;n=12,s="month"}vt[e]=function(a,i){var r,o,u=vt._locale[e],c=[];if("number"==typeof a&&(i=a,a=t),o=function(e){var t=vt().utc().set(s,e);return u.call(vt._locale,t,a||"")},null!=i)return o(i);for(r=0;n>r;r++)c.push(o(r));return c}}function L(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=t>=0?Math.floor(t):Math.ceil(t)),n}function W(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function C(e,t,n){return lt(vt([e,11,31+t-n]),t,n).week}function G(e){return F(e)?366:365}function F(e){return e%4===0&&e%100!==0||e%400===0}function P(e){var t;e._a&&-2===e._pf.overflow&&(t=e._a[Wt]<0||e._a[Wt]>11?Wt:e._a[Ct]<1||e._a[Ct]>W(e._a[Lt],e._a[Wt])?Ct:e._a[Gt]<0||e._a[Gt]>24||24===e._a[Gt]&&(0!==e._a[Ft]||0!==e._a[Pt]||0!==e._a[xt])?Gt:e._a[Ft]<0||e._a[Ft]>59?Ft:e._a[Pt]<0||e._a[Pt]>59?Pt:e._a[xt]<0||e._a[xt]>999?xt:-1,e._pf._overflowDayOfYear&&(Lt>t||t>Ct)&&(t=Ct),e._pf.overflow=t)}function x(e){return null==e._isValid&&(e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated,e._strict&&(e._isValid=e._isValid&&0===e._pf.charsLeftOver&&0===e._pf.unusedTokens.length&&e._pf.bigHour===t)),e._isValid}function H(e){return e?e.toLowerCase().replace("_","-"):e}function I(e){for(var t,n,s,a,i=0;i<e.length;){for(a=H(e[i]).split("-"),t=a.length,n=H(e[i+1]),n=n?n.split("-"):null;t>0;){if(s=A(a.slice(0,t).join("-")))return s;if(n&&n.length>=t&&T(a,n,!0)>=t-1)break;t--}i++}return null}function A(t){var n=null;if(!Ht[t]&&At)try{n=vt.locale(),e("./locale/"+t),vt.locale(n)}catch(s){}return Ht[t]}function z(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(vt.isMoment(e)||b(e)?+e:+vt(e))-+n,n._d.setTime(+n._d+s),vt.updateOffset(n,!1),n):vt(e).local()}function Z(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function E(e){var t,n,s=e.match(jt);for(t=0,n=s.length;n>t;t++)s[t]=Dn[s[t]]?Dn[s[t]]:Z(s[t]);return function(a){var i="";for(t=0;n>t;t++)i+=s[t]instanceof Function?s[t].call(a,e):s[t];return i}}function j(e,t){return e.isValid()?(t=N(t,e.localeData()),yn[t]||(yn[t]=E(t)),yn[t](e)):e.localeData().invalidDate()}function N(e,t){function n(e){return t.longDateFormat(e)||e}var s=5;for(Nt.lastIndex=0;s>=0&&Nt.test(e);)e=e.replace(Nt,n),Nt.lastIndex=0,s-=1;return e}function V(e,t){var n,s=t._strict;switch(e){case"Q":return tn;case"DDDD":return sn;case"YYYY":case"GGGG":case"gggg":return s?an:$t;case"Y":case"G":case"g":return on;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return s?rn:Jt;case"S":if(s)return tn;case"SS":if(s)return nn;case"SSS":if(s)return sn;case"DDD":return qt;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Bt;case"a":case"A":return t._locale._meridiemParse;case"x":return Kt;case"X":return en;case"Z":case"ZZ":return Qt;case"T":return Xt;case"SSSS":return Rt;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return s?nn:Vt;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Vt;case"Do":return s?t._locale._ordinalParse:t._locale._ordinalParseLenient;default:return n=new RegExp(et(K(e.replace("\\","")),"i"))}}function q(e){e=e||"";var t=e.match(Qt)||[],n=t[t.length-1]||[],s=(n+"").match(fn)||["-",0,0],a=+(60*s[1])+L(s[2]);return"+"===s[0]?a:-a}function $(e,t,n){var s,a=n._a;switch(e){case"Q":null!=t&&(a[Wt]=3*(L(t)-1));break;case"M":case"MM":null!=t&&(a[Wt]=L(t)-1);break;case"MMM":case"MMMM":s=n._locale.monthsParse(t,e,n._strict),null!=s?a[Wt]=s:n._pf.invalidMonth=t;break;case"D":case"DD":null!=t&&(a[Ct]=L(t));break;case"Do":null!=t&&(a[Ct]=L(parseInt(t.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=t&&(n._dayOfYear=L(t));break;case"YY":a[Lt]=vt.parseTwoDigitYear(t);break;case"YYYY":case"YYYYY":case"YYYYYY":a[Lt]=L(t);break;case"a":case"A":n._meridiem=t;break;case"h":case"hh":n._pf.bigHour=!0;case"H":case"HH":a[Gt]=L(t);break;case"m":case"mm":a[Ft]=L(t);break;case"s":case"ss":a[Pt]=L(t);break;case"S":case"SS":case"SSS":case"SSSS":a[xt]=L(1e3*("0."+t));break;case"x":n._d=new Date(L(t));break;case"X":n._d=new Date(1e3*parseFloat(t));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=q(t);break;case"dd":case"ddd":case"dddd":s=n._locale.weekdaysParse(t),null!=s?(n._w=n._w||{},n._w.d=s):n._pf.invalidWeekday=t;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":e=e.substr(0,1);case"gggg":case"GGGG":case"GGGGG":e=e.substr(0,2),t&&(n._w=n._w||{},n._w[e]=L(t));break;case"gg":case"GG":n._w=n._w||{},n._w[e]=vt.parseTwoDigitYear(t)}}function J(e){var t,n,a,i,r,o,u;t=e._w,null!=t.GG||null!=t.W||null!=t.E?(r=1,o=4,n=s(t.GG,e._a[Lt],lt(vt(),1,4).year),a=s(t.W,1),i=s(t.E,1)):(r=e._locale._week.dow,o=e._locale._week.doy,n=s(t.gg,e._a[Lt],lt(vt(),r,o).year),a=s(t.w,1),null!=t.d?(i=t.d,r>i&&++a):i=null!=t.e?t.e+r:r),u=ft(n,a,i,o,r),e._a[Lt]=u.year,e._dayOfYear=u.dayOfYear}function R(e){var t,n,a,i,r=[];if(!e._d){for(a=Q(e),e._w&&null==e._a[Ct]&&null==e._a[Wt]&&J(e),e._dayOfYear&&(i=s(e._a[Lt],a[Lt]),e._dayOfYear>G(i)&&(e._pf._overflowDayOfYear=!0),n=ot(i,0,e._dayOfYear),e._a[Wt]=n.getUTCMonth(),e._a[Ct]=n.getUTCDate()),t=0;3>t&&null==e._a[t];++t)e._a[t]=r[t]=a[t];for(;7>t;t++)e._a[t]=r[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[Gt]&&0===e._a[Ft]&&0===e._a[Pt]&&0===e._a[xt]&&(e._nextDay=!0,e._a[Gt]=0),e._d=(e._useUTC?ot:rt).apply(null,r),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Gt]=24)}}function B(e){var t;e._d||(t=O(e._i),e._a=[t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],R(e))}function Q(e){var t=new Date;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function X(e){if(e._f===vt.ISO_8601)return void nt(e);e._a=[],e._pf.empty=!0;var n,s,a,i,r,o=""+e._i,u=o.length,c=0;for(a=N(e._f,e._locale).match(jt)||[],n=0;n<a.length;n++)i=a[n],s=(o.match(V(i,e))||[])[0],s&&(r=o.substr(0,o.indexOf(s)),r.length>0&&e._pf.unusedInput.push(r),o=o.slice(o.indexOf(s)+s.length),c+=s.length),Dn[i]?(s?e._pf.empty=!1:e._pf.unusedTokens.push(i),$(i,s,e)):e._strict&&!s&&e._pf.unusedTokens.push(i);e._pf.charsLeftOver=u-c,o.length>0&&e._pf.unusedInput.push(o),e._pf.bigHour===!0&&e._a[Gt]<=12&&(e._pf.bigHour=t),e._a[Gt]=f(e._locale,e._a[Gt],e._meridiem),R(e),P(e)}function K(e){return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,a){return t||n||s||a})}function et(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function tt(e){var t,n,s,a,r;if(0===e._f.length)return e._pf.invalidFormat=!0,void(e._d=new Date(0/0));for(a=0;a<e._f.length;a++)r=0,t=p({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._pf=i(),t._f=e._f[a],X(t),x(t)&&(r+=t._pf.charsLeftOver,r+=10*t._pf.unusedTokens.length,t._pf.score=r,(null==s||s>r)&&(s=r,n=t));y(e,n||t)}function nt(e){var t,n,s=e._i,a=un.exec(s);if(a){for(e._pf.iso=!0,t=0,n=dn.length;n>t;t++)if(dn[t][1].exec(s)){e._f=dn[t][0]+(a[6]||" ");break}for(t=0,n=ln.length;n>t;t++)if(ln[t][1].exec(s)){e._f+=ln[t][0];break}s.match(Qt)&&(e._f+="Z"),X(e)}else e._isValid=!1}function st(e){nt(e),e._isValid===!1&&(delete e._isValid,vt.createFromInputFallback(e))}function at(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function it(e){var n,s=e._i;s===t?e._d=new Date:b(s)?e._d=new Date(+s):null!==(n=zt.exec(s))?e._d=new Date(+n[1]):"string"==typeof s?st(e):k(s)?(e._a=at(s.slice(0),function(e){return parseInt(e,10)}),R(e)):"object"==typeof s?B(e):"number"==typeof s?e._d=new Date(s):vt.createFromInputFallback(e)}function rt(e,t,n,s,a,i,r){var o=new Date(e,t,n,s,a,i,r);return 1970>e&&o.setFullYear(e),o}function ot(e){var t=new Date(Date.UTC.apply(null,arguments));return 1970>e&&t.setUTCFullYear(e),t}function ut(e,t){if("string"==typeof e)if(isNaN(e)){if(e=t.weekdaysParse(e),"number"!=typeof e)return null}else e=parseInt(e,10);return e}function ct(e,t,n,s,a){return a.relativeTime(t||1,!!n,e,s)}function dt(e,t,n){var s=vt.duration(e).abs(),a=Ot(s.as("s")),i=Ot(s.as("m")),r=Ot(s.as("h")),o=Ot(s.as("d")),u=Ot(s.as("M")),c=Ot(s.as("y")),d=a<pn.s&&["s",a]||1===i&&["m"]||i<pn.m&&["mm",i]||1===r&&["h"]||r<pn.h&&["hh",r]||1===o&&["d"]||o<pn.d&&["dd",o]||1===u&&["M"]||u<pn.M&&["MM",u]||1===c&&["y"]||["yy",c];return d[2]=t,d[3]=+e>0,d[4]=n,ct.apply({},d)}function lt(e,t,n){var s,a=n-t,i=n-e.day();return i>a&&(i-=7),a-7>i&&(i+=7),s=vt(e).add(i,"d"),{week:Math.ceil(s.dayOfYear()/7),year:s.year()}}function ft(e,t,n,s,a){var i,r,o=ot(e,0,1).getUTCDay();return o=0===o?7:o,n=null!=n?n:a,i=a-o+(o>s?7:0)-(a>o?7:0),r=7*(t-1)+(n-a)+i+1,{year:r>0?e:e-1,dayOfYear:r>0?r:G(e-1)+r}}function ht(e){var n,s=e._i,a=e._f;return e._locale=e._locale||vt.localeData(e._l),null===s||a===t&&""===s?vt.invalid({nullInput:!0}):("string"==typeof s&&(e._i=s=e._locale.preparse(s)),vt.isMoment(s)?new _(s,!0):(a?k(a)?tt(e):X(e):it(e),n=new _(e),n._nextDay&&(n.add(1,"d"),n._nextDay=t),n))}function _t(e,t){var n,s;if(1===t.length&&k(t[0])&&(t=t[0]),!t.length)return vt();for(n=t[0],s=1;s<t.length;++s)t[s][e](n)&&(n=t[s]);return n}function mt(e,t){var n;return"string"==typeof t&&(t=e.localeData().monthsParse(t),"number"!=typeof t)?e:(n=Math.min(e.date(),W(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e)}function yt(e,t){return e._d["get"+(e._isUTC?"UTC":"")+t]()}function pt(e,t,n){return"Month"===t?mt(e,n):e._d["set"+(e._isUTC?"UTC":"")+t](n)}function Mt(e,t){return function(n){return null!=n?(pt(this,e,n),vt.updateOffset(this,t),this):yt(this,e)}}function gt(e){return 400*e/146097}function Dt(e){return 146097*e/400}function Yt(e){vt.duration.fn[e]=function(){return this._data[e]}}function wt(e){"undefined"==typeof ender&&(kt=St.moment,St.moment=e?o("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",vt):vt)}for(var vt,kt,bt,Tt="2.9.0",St="undefined"==typeof global||"undefined"!=typeof window&&window!==global.window?this:global,Ot=Math.round,Ut=Object.prototype.hasOwnProperty,Lt=0,Wt=1,Ct=2,Gt=3,Ft=4,Pt=5,xt=6,Ht={},It=[],At="undefined"!=typeof n&&n&&n.exports,zt=/^\/?Date\((\-?\d+)/i,Zt=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Et=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,jt=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Nt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Vt=/\d\d?/,qt=/\d{1,3}/,$t=/\d{1,4}/,Jt=/[+\-]?\d{1,6}/,Rt=/\d+/,Bt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Qt=/Z|[\+\-]\d\d:?\d\d/gi,Xt=/T/i,Kt=/[\+\-]?\d+/,en=/[\+\-]?\d+(\.\d{1,3})?/,tn=/\d/,nn=/\d\d/,sn=/\d{3}/,an=/\d{4}/,rn=/[+-]?\d{6}/,on=/[+-]?\d+/,un=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,cn="YYYY-MM-DDTHH:mm:ssZ",dn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],ln=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],fn=/([\+\-]|\d\d)/gi,hn=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),_n={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},mn={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},yn={},pn={s:45,m:45,h:22,d:26,M:11},Mn="DDD w W M D d".split(" "),gn="M D H h m s w W".split(" "),Dn={M:function(){return this.month()+1},MMM:function(e){return this.localeData().monthsShort(this,e)},MMMM:function(e){return this.localeData().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.localeData().weekdaysMin(this,e)},ddd:function(e){return this.localeData().weekdaysShort(this,e)},dddd:function(e){return this.localeData().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return g(this.year()%100,2)},YYYY:function(){return g(this.year(),4)},YYYYY:function(){return g(this.year(),5)},YYYYYY:function(){var e=this.year(),t=e>=0?"+":"-";return t+g(Math.abs(e),6)},gg:function(){return g(this.weekYear()%100,2)},gggg:function(){return g(this.weekYear(),4)},ggggg:function(){return g(this.weekYear(),5)},GG:function(){return g(this.isoWeekYear()%100,2)},GGGG:function(){return g(this.isoWeekYear(),4)},GGGGG:function(){return g(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return L(this.milliseconds()/100)},SS:function(){return g(L(this.milliseconds()/10),2)},SSS:function(){return g(this.milliseconds(),3)},SSSS:function(){return g(this.milliseconds(),3)},Z:function(){var e=this.utcOffset(),t="+";return 0>e&&(e=-e,t="-"),t+g(L(e/60),2)+":"+g(L(e)%60,2)},ZZ:function(){var e=this.utcOffset(),t="+";return 0>e&&(e=-e,t="-"),t+g(L(e/60),2)+g(L(e)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},Yn={},wn=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"],vn=!1;Mn.length;)bt=Mn.pop(),Dn[bt+"o"]=d(Dn[bt],bt);for(;gn.length;)bt=gn.pop(),Dn[bt+bt]=c(Dn[bt],2);Dn.DDDD=c(Dn.DDD,3),y(h.prototype,{set:function(e){var t,n;for(n in e)t=e[n],"function"==typeof t?this[n]=t:this["_"+n]=t;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e,t,n){var s,a,i;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;12>s;s++){if(a=vt.utc([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(i="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[s]=new RegExp(i.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},weekdaysParse:function(e){var t,n,s;for(this._weekdaysParse||(this._weekdaysParse=[]),t=0;7>t;t++)if(this._weekdaysParse[t]||(n=vt([2e3,1]).day(t),s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),this._weekdaysParse[t].test(e))return t},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},isPM:function(e){return"p"===(e+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,t,n){var s=this._calendar[e];return"function"==typeof s?s.apply(t,[n]):s},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,s){var a=this._relativeTime[n];return"function"==typeof a?a(e,t,n,s):a.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return"function"==typeof n?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(e){return e},postformat:function(e){return e},week:function(e){return lt(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},firstDayOfWeek:function(){return this._week.dow},firstDayOfYear:function(){return this._week.doy},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),vt=function(e,n,s,a){var r;return"boolean"==typeof s&&(a=s,s=t),r={},r._isAMomentObject=!0,r._i=e,r._f=n,r._l=s,r._strict=a,r._isUTC=!1,r._pf=i(),ht(r)},vt.suppressDeprecationWarnings=!1,vt.createFromInputFallback=o("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),vt.min=function(){var e=[].slice.call(arguments,0);return _t("isBefore",e)},vt.max=function(){var e=[].slice.call(arguments,0);return _t("isAfter",e)},vt.utc=function(e,n,s,a){var r;return"boolean"==typeof s&&(a=s,s=t),r={},r._isAMomentObject=!0,r._useUTC=!0,r._isUTC=!0,r._l=s,r._i=e,r._f=n,r._strict=a,r._pf=i(),ht(r).utc()},vt.unix=function(e){return vt(1e3*e)},vt.duration=function(e,t){var n,s,i,r,o=e,u=null;return vt.isDuration(e)?o={ms:e._milliseconds,d:e._days,M:e._months}:"number"==typeof e?(o={},t?o[t]=e:o.milliseconds=e):(u=Zt.exec(e))?(n="-"===u[1]?-1:1,o={y:0,d:L(u[Ct])*n,h:L(u[Gt])*n,m:L(u[Ft])*n,s:L(u[Pt])*n,ms:L(u[xt])*n}):(u=Et.exec(e))?(n="-"===u[1]?-1:1,i=function(e){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*n},o={y:i(u[2]),M:i(u[3]),d:i(u[4]),h:i(u[5]),m:i(u[6]),s:i(u[7]),w:i(u[8])}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(r=Y(vt(o.from),vt(o.to)),o={},o.ms=r.milliseconds,o.M=r.months),s=new m(o),vt.isDuration(e)&&a(e,"_locale")&&(s._locale=e._locale),s},vt.version=Tt,vt.defaultFormat=cn,vt.ISO_8601=function(){},vt.momentProperties=It,vt.updateOffset=function(){},vt.relativeTimeThreshold=function(e,n){return pn[e]===t?!1:n===t?pn[e]:(pn[e]=n,!0)},vt.lang=o("moment.lang is deprecated. Use moment.locale instead.",function(e,t){return vt.locale(e,t)}),vt.locale=function(e,t){var n;return e&&(n="undefined"!=typeof t?vt.defineLocale(e,t):vt.localeData(e),n&&(vt.duration._locale=vt._locale=n)),vt._locale._abbr},vt.defineLocale=function(e,t){return null!==t?(t.abbr=e,Ht[e]||(Ht[e]=new h),Ht[e].set(t),vt.locale(e),Ht[e]):(delete Ht[e],null)},vt.langData=o("moment.langData is deprecated. Use moment.localeData instead.",function(e){return vt.localeData(e)}),vt.localeData=function(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return vt._locale;if(!k(e)){if(t=A(e))return t;e=[e]}return I(e)},vt.isMoment=function(e){return e instanceof _||null!=e&&a(e,"_isAMomentObject")},vt.isDuration=function(e){return e instanceof m};for(bt=wn.length-1;bt>=0;--bt)U(wn[bt]);vt.normalizeUnits=function(e){return S(e)},vt.invalid=function(e){var t=vt.utc(0/0);return null!=e?y(t._pf,e):t._pf.userInvalidated=!0,t},vt.parseZone=function(){return vt.apply(null,arguments).parseZone()},vt.parseTwoDigitYear=function(e){return L(e)+(L(e)>68?1900:2e3)},vt.isDate=b,y(vt.fn=_.prototype,{clone:function(){return vt(this)},valueOf:function(){return+this._d-6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var e=vt(this).utc();return 0<e.year()&&e.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():j(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):j(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return x(this)},isDSTShifted:function(){return this._a?this.isValid()&&T(this._a,(this._isUTC?vt.utc(this._a):vt(this._a)).toArray())>0:!1},parsingFlags:function(){return y({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(e){return this.utcOffset(0,e)},local:function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(this._dateUtcOffset(),"m")),this},format:function(e){var t=j(this,e||vt.defaultFormat);return this.localeData().postformat(t)},add:w(1,"add"),subtract:w(-1,"subtract"),diff:function(e,t,n){var s,a,i=z(e,this),r=6e4*(i.utcOffset()-this.utcOffset());return t=S(t),"year"===t||"month"===t||"quarter"===t?(a=l(this,i),"quarter"===t?a/=3:"year"===t&&(a/=12)):(s=this-i,a="second"===t?s/1e3:"minute"===t?s/6e4:"hour"===t?s/36e5:"day"===t?(s-r)/864e5:"week"===t?(s-r)/6048e5:s),n?a:M(a)},from:function(e,t){return vt.duration({to:this,from:e}).locale(this.locale()).humanize(!t)},fromNow:function(e){return this.from(vt(),e)},calendar:function(e){var t=e||vt(),n=z(t,this).startOf("day"),s=this.diff(n,"days",!0),a=-6>s?"sameElse":-1>s?"lastWeek":0>s?"lastDay":1>s?"sameDay":2>s?"nextDay":7>s?"nextWeek":"sameElse";return this.format(this.localeData().calendar(a,this,vt(t)))},isLeapYear:function(){return F(this.year())},isDST:function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=ut(e,this.localeData()),this.add(e-t,"d")):t},month:Mt("Month",!0),startOf:function(e){switch(e=S(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e?this.weekday(0):"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(e){return e=S(e),e===t||"millisecond"===e?this:this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms")},isAfter:function(e,t){var n;return t=S("undefined"!=typeof t?t:"millisecond"),"millisecond"===t?(e=vt.isMoment(e)?e:vt(e),+this>+e):(n=vt.isMoment(e)?+e:+vt(e),n<+this.clone().startOf(t))},isBefore:function(e,t){var n;return t=S("undefined"!=typeof t?t:"millisecond"),"millisecond"===t?(e=vt.isMoment(e)?e:vt(e),+e>+this):(n=vt.isMoment(e)?+e:+vt(e),+this.clone().endOf(t)<n)},isBetween:function(e,t,n){return this.isAfter(e,n)&&this.isBefore(t,n)},isSame:function(e,t){var n;return t=S(t||"millisecond"),"millisecond"===t?(e=vt.isMoment(e)?e:vt(e),+this===+e):(n=+vt(e),+this.clone().startOf(t)<=n&&n<=+this.clone().endOf(t))},min:o("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(e){return e=vt.apply(null,arguments),this>e?this:e}),max:o("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(e){return e=vt.apply(null,arguments),e>this?this:e}),zone:o("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),utcOffset:function(e,t){var n,s=this._offset||0;return null!=e?("string"==typeof e&&(e=q(e)),Math.abs(e)<16&&(e=60*e),!this._isUTC&&t&&(n=this._dateUtcOffset()),this._offset=e,this._isUTC=!0,null!=n&&this.add(n,"m"),s!==e&&(!t||this._changeInProgress?v(this,vt.duration(e-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,vt.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?s:this._dateUtcOffset()
},isLocal:function(){return!this._isUTC},isUtcOffset:function(){return this._isUTC},isUtc:function(){return this._isUTC&&0===this._offset},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(q(this._i)),this},hasAlignedHourOffset:function(e){return e=e?vt(e).utcOffset():0,(this.utcOffset()-e)%60===0},daysInMonth:function(){return W(this.year(),this.month())},dayOfYear:function(e){var t=Ot((vt(this).startOf("day")-vt(this).startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},quarter:function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},weekYear:function(e){var t=lt(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==e?t:this.add(e-t,"y")},isoWeekYear:function(e){var t=lt(this,1,4).year;return null==e?t:this.add(e-t,"y")},week:function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},isoWeek:function(e){var t=lt(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},weekday:function(e){var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},isoWeekday:function(e){return null==e?this.day()||7:this.day(this.day()%7?e:e-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var e=this.localeData()._week;return C(this.year(),e.dow,e.doy)},get:function(e){return e=S(e),this[e]()},set:function(e,t){var n;if("object"==typeof e)for(n in e)this.set(n,e[n]);else e=S(e),"function"==typeof this[e]&&this[e](t);return this},locale:function(e){var n;return e===t?this._locale._abbr:(n=vt.localeData(e),null!=n&&(this._locale=n),this)},lang:o("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===t?this.localeData():this.locale(e)}),localeData:function(){return this._locale},_dateUtcOffset:function(){return 15*-Math.round(this._d.getTimezoneOffset()/15)}}),vt.fn.millisecond=vt.fn.milliseconds=Mt("Milliseconds",!1),vt.fn.second=vt.fn.seconds=Mt("Seconds",!1),vt.fn.minute=vt.fn.minutes=Mt("Minutes",!1),vt.fn.hour=vt.fn.hours=Mt("Hours",!0),vt.fn.date=Mt("Date",!0),vt.fn.dates=o("dates accessor is deprecated. Use date instead.",Mt("Date",!0)),vt.fn.year=Mt("FullYear",!0),vt.fn.years=o("years accessor is deprecated. Use year instead.",Mt("FullYear",!0)),vt.fn.days=vt.fn.day,vt.fn.months=vt.fn.month,vt.fn.weeks=vt.fn.week,vt.fn.isoWeeks=vt.fn.isoWeek,vt.fn.quarters=vt.fn.quarter,vt.fn.toJSON=vt.fn.toISOString,vt.fn.isUTC=vt.fn.isUtc,y(vt.duration.fn=m.prototype,{_bubble:function(){var e,t,n,s=this._milliseconds,a=this._days,i=this._months,r=this._data,o=0;r.milliseconds=s%1e3,e=M(s/1e3),r.seconds=e%60,t=M(e/60),r.minutes=t%60,n=M(t/60),r.hours=n%24,a+=M(n/24),o=M(gt(a)),a-=M(Dt(o)),i+=M(a/30),a%=30,o+=M(i/12),i%=12,r.days=a,r.months=i,r.years=o},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return M(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*L(this._months/12)},humanize:function(e){var t=dt(this,!e,this.localeData());return e&&(t=this.localeData().pastFuture(+this,t)),this.localeData().postformat(t)},add:function(e,t){var n=vt.duration(e,t);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(e,t){var n=vt.duration(e,t);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(e){return e=S(e),this[e.toLowerCase()+"s"]()},as:function(e){var t,n;if(e=S(e),"month"===e||"year"===e)return t=this._days+this._milliseconds/864e5,n=this._months+12*gt(t),"month"===e?n:n/12;switch(t=this._days+Math.round(Dt(this._months/12)),e){case"week":return t/7+this._milliseconds/6048e5;case"day":return t+this._milliseconds/864e5;case"hour":return 24*t+this._milliseconds/36e5;case"minute":return 24*t*60+this._milliseconds/6e4;case"second":return 24*t*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*t*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+e)}},lang:vt.fn.lang,locale:vt.fn.locale,toIsoString:o("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var e=Math.abs(this.years()),t=Math.abs(this.months()),n=Math.abs(this.days()),s=Math.abs(this.hours()),a=Math.abs(this.minutes()),i=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(e?e+"Y":"")+(t?t+"M":"")+(n?n+"D":"")+(s||a||i?"T":"")+(s?s+"H":"")+(a?a+"M":"")+(i?i+"S":""):"P0D"},localeData:function(){return this._locale},toJSON:function(){return this.toISOString()}}),vt.duration.fn.toString=vt.duration.fn.toISOString;for(bt in hn)a(hn,bt)&&Yt(bt.toLowerCase());vt.duration.fn.asMilliseconds=function(){return this.as("ms")},vt.duration.fn.asSeconds=function(){return this.as("s")},vt.duration.fn.asMinutes=function(){return this.as("m")},vt.duration.fn.asHours=function(){return this.as("h")},vt.duration.fn.asDays=function(){return this.as("d")},vt.duration.fn.asWeeks=function(){return this.as("weeks")},vt.duration.fn.asMonths=function(){return this.as("M")},vt.duration.fn.asYears=function(){return this.as("y")},vt.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=1===L(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),At?n.exports=vt:"function"==typeof define&&define.amd?(define(function(e,t,n){return n.config&&n.config()&&n.config().noGlobal===!0&&(St.moment=kt),vt}),wt(!0)):wt()}).call(this)});