import{_ as Z}from"./nuxt-link.5d9bcad0.js";import{m as U,o as m,e as h,h as s,D as re,A as D,a as R,b as oe,E as ie,i as Y,u as d,z as p,c as J,t as x,s as w,f as b,F as S,y as k}from"./entry.ab0ca42c.js";import{_ as se}from"./Close.ba90426a.js";import{d as j}from"./dummy.99150ef3.js";const ue={},le={width:"100%",height:"100%",viewBox:"0 0 48 48",fill:"currentColor"},ce=s("path",{d:"M24,36C20.767,36 18,34.9 15.7,32.7C13.4,30.5 12.167,27.783 12,24.55L15.15,25.55C15.517,27.683 16.517,29.458 18.15,30.875C19.783,32.292 21.733,33 24,33C26.5,33 28.625,32.125 30.375,30.375C32.125,28.625 33,26.5 33,24C33,21.767 32.292,19.825 30.875,18.175C29.458,16.525 27.683,15.517 25.55,15.15L24.6,12C27.8,12.167 30.5,13.4 32.7,15.7C34.9,18 36,20.767 36,24C36,27.333 34.833,30.167 32.5,32.5C30.167,34.833 27.333,36 24,36ZM24,44C21.233,44 18.633,43.475 16.2,42.425C13.767,41.375 11.65,39.95 9.85,38.15C8.05,36.35 6.625,34.233 5.575,31.8C4.525,29.367 4,26.767 4,24C4,23.7 4.008,23.4 4.025,23.1C4.042,22.8 4.067,22.5 4.1,22.2L7,23.1L7,24C7,28.733 8.65,32.75 11.95,36.05C15.25,39.35 19.267,41 24,41C28.733,41 32.75,39.35 36.05,36.05C39.35,32.75 41,28.733 41,24C41,19.267 39.35,15.25 36.05,11.95C32.75,8.65 28.733,7 24,7L23.1,7L22.2,4.1C22.5,4.067 22.8,4.042 23.1,4.025C23.4,4.008 23.7,4 24,4C26.767,4 29.367,4.525 31.8,5.575C34.233,6.625 36.35,8.05 38.15,9.85C39.95,11.65 41.375,13.767 42.425,16.2C43.475,18.633 44,21.233 44,24C44,26.767 43.475,29.367 42.425,31.8C41.375,34.233 39.95,36.35 38.15,38.15C36.35,39.95 34.233,41.375 31.8,42.425C29.367,43.475 26.767,44 24,44ZM21.05,25L12.5,16.45L10,24L4,4L24,10L16.45,12.5L25,21.05L21.05,25Z"},null,-1),de=[ce];function fe(e,t){return m(),h("svg",le,de)}const me=U(ue,[["render",fe]]),he={},ve={type:"button",class:"relative inline-flex items-center justify-center space-x-1 rounded-full outline-none flex-nowrap shrink-0 disabled:opacity-40 bg-gray-700 enabled:hover:bg-gray-600 enabled:active:bg-gray-700"};function ge(e,t){return m(),h("button",ve,[re(e.$slots,"default",{},()=>[D(" Click Me ")])])}const B=U(he,[["render",ge]]),_e={},pe={width:"100%",height:"100%",viewBox:"0 0 48 48",fill:"currentColor"},ye=s("path",{d:"M11 40q-1.2 0-2.1-.9Q8 38.2 8 37v-7.15h3V37h26v-7.15h3V37q0 1.2-.9 2.1-.9.9-2.1.9Zm13-7.65-9.65-9.65 2.15-2.15 6 6V8h3v18.55l6-6 2.15 2.15Z"},null,-1),be=[ye];function xe(e,t){return m(),h("svg",pe,be)}const we=U(_e,[["render",xe]]),Me={key:0,class:"p-6 border-b border-b-gray-700"},De={class:"flex items-center"},Ce={class:"grow"},Ne={class:"flex items-center gap-6"},Te={class:"flex-shrink-0"},Se={class:"relative"},ke=["src"],Pe={class:"space-y-0.5"},$e={class:"text-2xl font-bold text-gray-100"},We={class:"text-sm font-medium text-gray-400"},Oe={class:"gap-2 items-center flex pt-1.5"},Fe=s("span",{class:"text-gray-400"},"(Click+Drag)",-1),Ia=R({__name:"Header",props:{id:{required:!0,type:Number}},setup(e){const t=e,a=oe(),n=ie();Number(a.params.id);function r(){n.back()}const o=Y(()=>t.id>=0?j.find(i=>i.id===t.id)||null:{});return(i,c)=>{const l=Z,u=me,f=B,v=we,P=se;return d(o)?(m(),h("div",Me,[s("div",De,[s("div",Ce,[s("div",Ne,[s("div",Te,[s("div",Se,[s("img",{class:"h-20 w-20 object-cover rounded-full",src:d(o).thumbnail},null,8,ke)])]),s("div",Pe,[s("h1",$e,p(d(o).name),1),s("p",We,[D(" by "),d(o)&&d(o).creator?(m(),J(l,{key:0,to:{path:"/assets",query:{authors:d(o).creator||""}},class:"text-blue-400 hover:underline"},{default:x(()=>[D(p(d(o).creator),1)]),_:1},8,["to"])):w("",!0)]),s("div",Oe,[b(f,{class:"px-3 py-1 text-sm gap-1"},{default:x(()=>[b(u,{class:"w-5 h-5"}),D(" Use "),Fe]),_:1}),b(f,{class:"px-3 py-1 text-sm gap-1"},{default:x(()=>[b(v,{class:"w-5 h-5"}),D(" Download ")]),_:1})])])])]),s("div",null,[b(f,{class:"bg-transparent dark:bg-transparent p-1.5",onClick:r},{default:x(()=>[b(P,{class:"w-6 h-6"})]),_:1})])])])):w("",!0)}}}),Ie={class:"p-6"},Le={key:0,class:"flex justify-center grow"},Ae={class:"grid grid-cols-1 gap-8"},Ue=["src"],Re=["autoplay","src"],La=R({__name:"Gallery",props:{id:{required:!0,type:Number}},setup(e){const t=e,a=Y(()=>t.id>=0?j.find(n=>n.id===t.id)||null:{});return(n,r)=>(m(),h("div",Ie,[d(a).gallery_files&&d(a).gallery_files.length===0?(m(),h("div",Le," There are no gallery images here :( Add some! ")):w("",!0),s("div",Ae,[(m(!0),h(S,null,k(d(a).gallery_files,(o,i)=>(m(),h("div",{key:i,class:"flex flex-col items-center"},[o.type.startsWith("image/")?(m(),h("img",{key:0,class:"flex-shrink-0 object-cover max-h-[85vh] max-width-screen",src:o.path},null,8,Ue)):o.type.startsWith("video/")?(m(),h("video",{key:1,controls:"",autoplay:i===0,muted:"",loop:"",src:o.path,class:"object-cover max-h-[85vh] max-width-screen"},null,8,Re)):w("",!0)]))),128))])]))}});function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}function Ye(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function y(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function g(e){y(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||A(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var je={};function ze(){return je}function E(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function W(e,t){y(2,arguments);var a=g(e),n=g(t),r=a.getTime()-n.getTime();return r<0?-1:r>0?1:r}var Q=6e4,G=36e5;function Ee(e,t){y(2,arguments);var a=g(e),n=g(t),r=a.getFullYear()-n.getFullYear(),o=a.getMonth()-n.getMonth();return r*12+o}function Xe(e,t){return y(2,arguments),g(e).getTime()-g(t).getTime()}var X={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},qe="trunc";function Ve(e){return e?X[e]:X[qe]}function He(e){y(1,arguments);var t=g(e);return t.setHours(23,59,59,999),t}function Ze(e){y(1,arguments);var t=g(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function Je(e){y(1,arguments);var t=g(e);return He(t).getTime()===Ze(t).getTime()}function Be(e,t){y(2,arguments);var a=g(e),n=g(t),r=W(a,n),o=Math.abs(Ee(a,n)),i;if(o<1)i=0;else{a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-r*o);var c=W(a,n)===-r;Je(g(e))&&o===1&&W(e,n)===1&&(c=!1),i=r*(o-Number(c))}return i===0?0:i}function Qe(e,t,a){y(2,arguments);var n=Xe(e,t)/1e3;return Ve(a==null?void 0:a.roundingMethod)(n)}var Ge={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ke=function(t,a,n){var r,o=Ge[t];return typeof o=="string"?r=o:a===1?r=o.one:r=o.other.replace("{{count}}",a.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};const et=Ke;function F(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}}var tt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},at={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},nt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},rt={date:F({formats:tt,defaultWidth:"full"}),time:F({formats:at,defaultWidth:"full"}),dateTime:F({formats:nt,defaultWidth:"full"})};const ot=rt;var it={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},st=function(t,a,n,r){return it[t]};const ut=st;function C(e){return function(t,a){var n=a!=null&&a.context?String(a.context):"standalone",r;if(n==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a!=null&&a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var c=e.defaultWidth,l=a!=null&&a.width?String(a.width):e.defaultWidth;r=e.values[l]||e.values[c]}var u=e.argumentCallback?e.argumentCallback(t):t;return r[u]}}var lt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ct={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},dt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ft={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},mt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ht={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},vt=function(t,a){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},gt={ordinalNumber:vt,era:C({values:lt,defaultWidth:"wide"}),quarter:C({values:ct,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:C({values:dt,defaultWidth:"wide"}),day:C({values:ft,defaultWidth:"wide"}),dayPeriod:C({values:mt,defaultWidth:"wide",formattingValues:ht,defaultFormattingWidth:"wide"})};const _t=gt;function N(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;var i=o[0],c=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(c)?yt(c,function(v){return v.test(i)}):pt(c,function(v){return v.test(i)}),u;u=e.valueCallback?e.valueCallback(l):l,u=a.valueCallback?a.valueCallback(u):u;var f=t.slice(i.length);return{value:u,rest:f}}}function pt(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function yt(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}function bt(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],o=t.match(e.parsePattern);if(!o)return null;var i=e.valueCallback?e.valueCallback(o[0]):o[0];i=a.valueCallback?a.valueCallback(i):i;var c=t.slice(r.length);return{value:i,rest:c}}}var xt=/^(\d+)(th|st|nd|rd)?/i,wt=/\d+/i,Mt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Dt={any:[/^b/i,/^(a|c)/i]},Ct={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Nt={any:[/1/i,/2/i,/3/i,/4/i]},Tt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},St={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},kt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Pt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$t={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Wt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ot={ordinalNumber:bt({matchPattern:xt,parsePattern:wt,valueCallback:function(t){return parseInt(t,10)}}),era:N({matchPatterns:Mt,defaultMatchWidth:"wide",parsePatterns:Dt,defaultParseWidth:"any"}),quarter:N({matchPatterns:Ct,defaultMatchWidth:"wide",parsePatterns:Nt,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:N({matchPatterns:Tt,defaultMatchWidth:"wide",parsePatterns:St,defaultParseWidth:"any"}),day:N({matchPatterns:kt,defaultMatchWidth:"wide",parsePatterns:Pt,defaultParseWidth:"any"}),dayPeriod:N({matchPatterns:$t,defaultMatchWidth:"any",parsePatterns:Wt,defaultParseWidth:"any"})};const Ft=Ot;var It={code:"en-US",formatDistance:et,formatLong:ot,formatRelative:ut,localize:_t,match:Ft,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Lt=It;function K(e,t){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}function At(e){return K({},e)}var q=1440,Ut=2520,I=43200,Rt=86400;function V(e,t,a){var n,r;y(2,arguments);var o=ze(),i=(n=(r=a==null?void 0:a.locale)!==null&&r!==void 0?r:o.locale)!==null&&n!==void 0?n:Lt;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var c=W(e,t);if(isNaN(c))throw new RangeError("Invalid time value");var l=K(At(a),{addSuffix:!!(a!=null&&a.addSuffix),comparison:c}),u,f;c>0?(u=g(t),f=g(e)):(u=g(e),f=g(t));var v=Qe(f,u),P=(E(f)-E(u))/1e3,_=Math.round((v-P)/60),M;if(_<2)return a!=null&&a.includeSeconds?v<5?i.formatDistance("lessThanXSeconds",5,l):v<10?i.formatDistance("lessThanXSeconds",10,l):v<20?i.formatDistance("lessThanXSeconds",20,l):v<40?i.formatDistance("halfAMinute",0,l):v<60?i.formatDistance("lessThanXMinutes",1,l):i.formatDistance("xMinutes",1,l):_===0?i.formatDistance("lessThanXMinutes",1,l):i.formatDistance("xMinutes",_,l);if(_<45)return i.formatDistance("xMinutes",_,l);if(_<90)return i.formatDistance("aboutXHours",1,l);if(_<q){var te=Math.round(_/60);return i.formatDistance("aboutXHours",te,l)}else{if(_<Ut)return i.formatDistance("xDays",1,l);if(_<I){var ae=Math.round(_/q);return i.formatDistance("xDays",ae,l)}else if(_<Rt)return M=Math.round(_/I),i.formatDistance("aboutXMonths",M,l)}if(M=Be(f,u),M<12){var ne=Math.round(_/I);return i.formatDistance("xMonths",ne,l)}else{var z=M%12,O=Math.floor(M/12);return z<3?i.formatDistance("aboutXYears",O,l):z<9?i.formatDistance("overXYears",O,l):i.formatDistance("almostXYears",O+1,l)}}function H(e,t){var a;y(1,arguments);var n=Ye((a=t==null?void 0:t.additionalDigits)!==null&&a!==void 0?a:2);if(n!==2&&n!==1&&n!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"))return new Date(NaN);var r=Et(e),o;if(r.date){var i=Xt(r.date,n);o=qt(i.restDateString,i.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var c=o.getTime(),l=0,u;if(r.time&&(l=Vt(r.time),isNaN(l)))return new Date(NaN);if(r.timezone){if(u=Ht(r.timezone),isNaN(u))return new Date(NaN)}else{var f=new Date(c+l),v=new Date(0);return v.setFullYear(f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate()),v.setHours(f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds(),f.getUTCMilliseconds()),v}return new Date(c+l+u)}var $={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Yt=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,jt=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,zt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Et(e){var t={},a=e.split($.dateTimeDelimiter),n;if(a.length>2)return t;if(/:/.test(a[0])?n=a[0]:(t.date=a[0],n=a[1],$.timeZoneDelimiter.test(t.date)&&(t.date=e.split($.timeZoneDelimiter)[0],n=e.substr(t.date.length,e.length))),n){var r=$.timezone.exec(n);r?(t.time=n.replace(r[1],""),t.timezone=r[1]):t.time=n}return t}function Xt(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(a);if(!n)return{year:NaN,restDateString:""};var r=n[1]?parseInt(n[1]):null,o=n[2]?parseInt(n[2]):null;return{year:o===null?r:o*100,restDateString:e.slice((n[1]||n[2]).length)}}function qt(e,t){if(t===null)return new Date(NaN);var a=e.match(Yt);if(!a)return new Date(NaN);var n=!!a[4],r=T(a[1]),o=T(a[2])-1,i=T(a[3]),c=T(a[4]),l=T(a[5])-1;if(n)return Gt(t,c,l)?Zt(t,c,l):new Date(NaN);var u=new Date(0);return!Bt(t,o,i)||!Qt(t,r)?new Date(NaN):(u.setUTCFullYear(t,o,Math.max(r,i)),u)}function T(e){return e?parseInt(e):1}function Vt(e){var t=e.match(jt);if(!t)return NaN;var a=L(t[1]),n=L(t[2]),r=L(t[3]);return Kt(a,n,r)?a*G+n*Q+r*1e3:NaN}function L(e){return e&&parseFloat(e.replace(",","."))||0}function Ht(e){if(e==="Z")return 0;var t=e.match(zt);if(!t)return 0;var a=t[1]==="+"?-1:1,n=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return ea(n,r)?a*(n*G+r*Q):NaN}function Zt(e,t,a){var n=new Date(0);n.setUTCFullYear(e,0,4);var r=n.getUTCDay()||7,o=(t-1)*7+a+1-r;return n.setUTCDate(n.getUTCDate()+o),n}var Jt=[31,null,31,30,31,30,31,31,30,31,30,31];function ee(e){return e%400===0||e%4===0&&e%100!==0}function Bt(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(Jt[t]||(ee(e)?29:28))}function Qt(e,t){return t>=1&&t<=(ee(e)?366:365)}function Gt(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}function Kt(e,t,a){return e===24?t===0&&a===0:a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}function ea(e,t){return t>=0&&t<=59}const ta={key:0,class:"space-y-4 p-4"},aa={class:"px-4 space-y-2"},na=s("div",{class:"text-xs text-gray-400"},"Description",-1),ra={class:"text-sm text-gray-200 flex gap-2"},oa=s("hr",{class:"border-gray-700"},null,-1),ia={class:"px-4 space-y-2"},sa=s("div",{class:"text-xs text-gray-400"},"Components",-1),ua={class:"text-sm text-gray-200 space-y-2"},la={class:"flex items-center gap-2"},ca={class:"font-semibold"},da={class:"text-gray-400 border border-gray-500 rounded-full px-1.5 text-xs py-0.5"},fa=s("hr",{class:"border-gray-700"},null,-1),ma={class:"px-4 space-y-2"},ha=s("div",{class:"text-xs text-gray-400"},"Attributes",-1),va={class:"text-sm text-gray-200 space-y-1"},ga={class:"flex flex-nowrap gap-2 items-center group"},_a={class:"font-semibold group-hover:text-blue-400"},pa={class:"text-gray-300 group-hover:text-blue-400"},ya=s("hr",{class:"border-gray-700"},null,-1),ba={class:"px-4 space-y-2"},xa=s("div",{class:"text-xs text-gray-400"},"Tags",-1),wa={class:"text-sm text-gray-200 flex flex-wrap gap-2"},Ma=s("hr",{class:"border-gray-700"},null,-1),Da={class:"px-4 space-y-2"},Ca=s("div",{class:"text-xs text-gray-400"},"Date Created",-1),Na={key:0,class:"text-sm text-gray-200"},Ta=s("hr",{class:"border-gray-700"},null,-1),Sa={class:"px-4 space-y-2"},ka=s("div",{class:"text-xs text-gray-400"},"Date Updated",-1),Pa={key:0,class:"text-sm text-gray-200"},Aa=R({__name:"Details",props:{id:{required:!0,type:Number}},setup(e){const t=e,a=Y(()=>t.id>=0?j.find(n=>n.id===t.id)||null:{});return(n,r)=>{var c,l;const o=Z,i=B;return d(a)?(m(),h("div",ta,[s("div",aa,[na,s("div",ra,p(d(a).description),1)]),oa,s("div",ia,[sa,s("div",ua,[(m(!0),h(S,null,k(d(a).components,(u,f)=>(m(),h("div",{key:u.id},[s("div",la,[s("div",ca,p(u.name),1),s("div",da,p(u.type),1)]),(m(!0),h(S,null,k(u.files,(v,P)=>(m(),h("div",{key:v.id,class:"pl-3 text-xs text-gray-300"}," - "+p(v.name),1))),128))]))),128))])]),fa,s("div",ma,[ha,s("div",va,[(m(!0),h(S,null,k(d(a).attributes,(u,f)=>(m(),h("div",{class:"flex flex-nowrap",key:u},[b(o,{to:{path:"/assets",query:{[u.key]:[u.value]}}},{default:x(()=>[s("div",ga,[s("span",_a,p(u.key)+": ",1),s("span",pa,p(u.value),1)])]),_:2},1032,["to"])]))),128))])]),ya,s("div",ba,[xa,s("div",wa,[(m(!0),h(S,null,k(d(a).tags,(u,f)=>(m(),J(i,{key:u,class:"px-2 py-0.5"},{default:x(()=>[b(o,{to:{path:"/assets",query:{tags:[u]}}},{default:x(()=>[D(p(u),1)]),_:2},1032,["to"])]),_:2},1024))),128))])]),Ma,s("div",Da,[Ca,d(a).created_at?(m(),h("div",Na,p(d(V)(d(H)((c=d(a))==null?void 0:c.created_at),new Date,{addSuffix:!0})),1)):w("",!0)]),Ta,s("div",Sa,[ka,d(a).updated_at?(m(),h("div",Pa,p(d(V)(d(H)((l=d(a))==null?void 0:l.updated_at),new Date,{addSuffix:!0})),1)):w("",!0)])])):w("",!0)}}});export{Ia as _,La as a,Aa as b};
