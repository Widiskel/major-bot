const a1_0xbddec2=a1_0x43a4;function a1_0x1afc(){const _0x116d97=['Authorization','application/json','statusText','cors','187VnCoAV','url','Response\x20Data\x20:\x20','agent','body','query','30dLfrIo','Bearer\x20','message','Response\x20:\x20','proxy','content-type','en-US,en;q=0.9,id;q=0.8','3528652nEyyhf','status','Request\x20Body\x20:\x20','get','includes','127870CDFqhn','origin','empty','188150OoZJwE','\x20:\x20','host','same-site','3sUmAGY','3355335ayEfqT','24vWwusk','2582853rGUiFn','application/json,\x20text/plain,\x20*/*','json','7432516GvjKqa','476535MyVqqq','info','headers','fetch','randomUserAgent','generateHeaders','text','Request\x20Header\x20:\x20','stringify','error'];a1_0x1afc=function(){return _0x116d97;};return a1_0x1afc();}(function(_0x305889,_0x56bdd8){const _0x3bbc14=a1_0x43a4,_0x2484be=_0x305889();while(!![]){try{const _0x4bd421=parseInt(_0x3bbc14(0x120))/0x1+-parseInt(_0x3bbc14(0x118))/0x2*(-parseInt(_0x3bbc14(0x124))/0x3)+-parseInt(_0x3bbc14(0x12a))/0x4+-parseInt(_0x3bbc14(0x12b))/0x5+-parseInt(_0x3bbc14(0x111))/0x6*(-parseInt(_0x3bbc14(0x127))/0x7)+parseInt(_0x3bbc14(0x126))/0x8*(-parseInt(_0x3bbc14(0x125))/0x9)+parseInt(_0x3bbc14(0x11d))/0xa*(parseInt(_0x3bbc14(0x10b))/0xb);if(_0x4bd421===_0x56bdd8)break;else _0x2484be['push'](_0x2484be['shift']());}catch(_0xc1a6d2){_0x2484be['push'](_0x2484be['shift']());}}}(a1_0x1afc,0xe6315));function a1_0x43a4(_0x59d3c6,_0x2977d4){const _0x1afcee=a1_0x1afc();return a1_0x43a4=function(_0x43a4f0,_0x5cbd23){_0x43a4f0=_0x43a4f0-0x10b;let _0x446e79=_0x1afcee[_0x43a4f0];return _0x446e79;},a1_0x43a4(_0x59d3c6,_0x2977d4);}import{HttpsProxyAgent}from'https-proxy-agent';import{Helper}from'../utils/helper.js';import a1_0xd2136f from'../utils/logger.js';export class API{constructor(_0x50b13f,_0x125130,_0x440b8b){const _0x41b922=a1_0x43a4;this[_0x41b922(0x10c)]=_0x125130,this[_0x41b922(0x11e)]=_0x125130,this['ua']=Helper[_0x41b922(0x12f)](),this[_0x41b922(0x110)]=_0x50b13f,this[_0x41b922(0x115)]=_0x440b8b;}[a1_0xbddec2(0x130)](_0x72edc9){const _0x28f573=a1_0xbddec2,_0x37c2a7={'Accept':_0x28f573(0x128),'Accept-Language':_0x28f573(0x117),'Content-Type':_0x28f573(0x136),'Sec-Fetch-Dest':_0x28f573(0x11f),'Sec-Fetch-Site':_0x28f573(0x123),'Sec-Fetch-Mode':_0x28f573(0x138),'Host':this[_0x28f573(0x122)],'Origin':this['origin'],'Referer':this[_0x28f573(0x11e)]+'/'};return _0x72edc9&&(_0x37c2a7[_0x28f573(0x135)]=_0x28f573(0x112)+_0x72edc9),_0x37c2a7;}async[a1_0xbddec2(0x12e)](_0x2259c0,_0xd07f7d,_0x78d36a,_0x5bd3b6={},_0x53dea9={}){const _0x570eb9=a1_0xbddec2;try{const _0x522130=''+this[_0x570eb9(0x10c)]+_0x2259c0,_0xaa3d47={..._0x53dea9,...this[_0x570eb9(0x130)](_0x78d36a)},_0x669c00={'headers':_0xaa3d47,'method':_0xd07f7d};this[_0x570eb9(0x115)]&&(_0x669c00[_0x570eb9(0x10e)]=new HttpsProxyAgent(this[_0x570eb9(0x115)]));a1_0xd2136f['info'](_0xd07f7d+_0x570eb9(0x121)+_0x522130+'\x20'+(this['proxy']?this[_0x570eb9(0x115)]:'')),a1_0xd2136f[_0x570eb9(0x12c)](_0x570eb9(0x132)+JSON[_0x570eb9(0x133)](_0xaa3d47));_0xd07f7d!=='GET'&&(_0x669c00['body']=''+JSON[_0x570eb9(0x133)](_0x5bd3b6),a1_0xd2136f[_0x570eb9(0x12c)](_0x570eb9(0x11a)+_0x669c00[_0x570eb9(0x10f)]));const _0x5d710e=await fetch(_0x522130,_0x669c00);a1_0xd2136f[_0x570eb9(0x12c)](_0x570eb9(0x114)+_0x5d710e[_0x570eb9(0x119)]+'\x20'+_0x5d710e[_0x570eb9(0x137)]);if(_0x5d710e['ok']||_0x5d710e[_0x570eb9(0x119)]==0x190||_0x5d710e['status']==0x193){const _0x39d91a=_0x5d710e[_0x570eb9(0x12d)][_0x570eb9(0x11b)](_0x570eb9(0x116));let _0x5afeca;_0x39d91a&&_0x39d91a[_0x570eb9(0x11c)](_0x570eb9(0x136))?(_0x5afeca=await _0x5d710e[_0x570eb9(0x129)](),_0x5afeca['status']=_0x5d710e[_0x570eb9(0x119)]):_0x5afeca={'status':_0x5d710e[_0x570eb9(0x119)],'message':await _0x5d710e[_0x570eb9(0x131)]()};if(_0x5d710e['ok'])_0x5afeca[_0x570eb9(0x119)]=0xc8;return a1_0xd2136f['info'](_0x570eb9(0x10d)+JSON[_0x570eb9(0x133)](_0x5afeca)),_0x5afeca;}else throw new Error(_0x5d710e['status']+'\x20-\x20'+_0x5d710e['statusText']);}catch(_0x226489){a1_0xd2136f[_0x570eb9(0x134)]('Error\x20:\x20'+_0x226489[_0x570eb9(0x113)]);throw _0x226489;}}}