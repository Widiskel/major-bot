const a1_0x4cb676=a1_0x4411;(function(_0x1802c3,_0x3f702c){const _0x22053f=a1_0x4411,_0x52737b=_0x1802c3();while(!![]){try{const _0x45d1ab=-parseInt(_0x22053f(0xe8))/0x1*(parseInt(_0x22053f(0xf1))/0x2)+-parseInt(_0x22053f(0xde))/0x3*(parseInt(_0x22053f(0xdd))/0x4)+-parseInt(_0x22053f(0xf2))/0x5*(parseInt(_0x22053f(0xf4))/0x6)+parseInt(_0x22053f(0xfa))/0x7*(parseInt(_0x22053f(0xff))/0x8)+-parseInt(_0x22053f(0xec))/0x9*(-parseInt(_0x22053f(0xfe))/0xa)+parseInt(_0x22053f(0xe9))/0xb*(parseInt(_0x22053f(0xe5))/0xc)+-parseInt(_0x22053f(0x108))/0xd;if(_0x45d1ab===_0x3f702c)break;else _0x52737b['push'](_0x52737b['shift']());}catch(_0x36e460){_0x52737b['push'](_0x52737b['shift']());}}}(a1_0x206f,0x75f2a));import{HttpsProxyAgent}from'https-proxy-agent';function a1_0x4411(_0xa8a84,_0x1ea390){const _0x206f00=a1_0x206f();return a1_0x4411=function(_0x4411d8,_0xa5402d){_0x4411d8=_0x4411d8-0xdc;let _0x3a3195=_0x206f00[_0x4411d8];return _0x3a3195;},a1_0x4411(_0xa8a84,_0x1ea390);}function a1_0x206f(){const _0xf9038a=['104HfhSnI','Request\x20Header\x20:\x20','agent','empty','Response\x20:\x20','info','Response\x20Data\x20:\x20','Bearer\x20','generateHeaders','5272995zmJNuY','text','8lusQkO','75561yjWyGP','content-type','application/json,\x20text/plain,\x20*/*','error','url','includes','GET','12jCitkf','cors','headers','1JAQWXC','379401jUZfAT','\x20-\x20','status','16479StAjPY','same-site','Request\x20Body\x20:\x20','application/json','origin','239654GLhbSE','71285pUwzKA','json','150CFRLgj','stringify','randomUserAgent','\x20:\x20','proxy','statusText','425089cSXMQG','Error\x20:\x20','body','en-US,en;q=0.9,id;q=0.8','3230shUlMg'];a1_0x206f=function(){return _0xf9038a;};return a1_0x206f();}import{Helper}from'../utils/helper.js';import a1_0xb29783 from'../utils/logger.js';export class API{constructor(_0x380dc3,_0x1eda21,_0x1e3288){const _0x37f5c6=a1_0x4411;this['url']=_0x1eda21,this[_0x37f5c6(0xf0)]=_0x1eda21,this['ua']=Helper[_0x37f5c6(0xf6)](),this['query']=_0x380dc3,this[_0x37f5c6(0xf8)]=_0x1e3288;}[a1_0x4cb676(0x107)](_0x376e74){const _0x102101=a1_0x4cb676,_0x5cb11f={'Accept':_0x102101(0xe0),'Accept-Language':_0x102101(0xfd),'Content-Type':_0x102101(0xef),'Sec-Fetch-Dest':_0x102101(0x102),'Sec-Fetch-Site':_0x102101(0xed),'Sec-Fetch-Mode':_0x102101(0xe6),'Host':this['host'],'Origin':this[_0x102101(0xf0)],'Referer':this[_0x102101(0xf0)]+'/'};return _0x376e74&&(_0x5cb11f['Authorization']=_0x102101(0x106)+_0x376e74),_0x5cb11f;}async['fetch'](_0xfef6dd,_0x4e19ab,_0x1d9a9a,_0x594974={},_0x264cb2={}){const _0x16aa41=a1_0x4cb676;try{const _0x978d04=''+this[_0x16aa41(0xe2)]+_0xfef6dd,_0x1dabf1={..._0x264cb2,...this[_0x16aa41(0x107)](_0x1d9a9a)},_0x40b794={'headers':_0x1dabf1,'method':_0x4e19ab};this[_0x16aa41(0xf8)]&&(_0x40b794[_0x16aa41(0x101)]=new HttpsProxyAgent(this[_0x16aa41(0xf8)]));a1_0xb29783['info'](_0x4e19ab+_0x16aa41(0xf7)+_0x978d04+'\x20'+(this[_0x16aa41(0xf8)]?this['proxy']:'')),a1_0xb29783[_0x16aa41(0x104)](_0x16aa41(0x100)+JSON['stringify'](_0x1dabf1));_0x4e19ab!==_0x16aa41(0xe4)&&(_0x40b794[_0x16aa41(0xfc)]=''+JSON[_0x16aa41(0xf5)](_0x594974),a1_0xb29783[_0x16aa41(0x104)](_0x16aa41(0xee)+_0x40b794[_0x16aa41(0xfc)]));const _0x4260c9=await fetch(_0x978d04,_0x40b794);a1_0xb29783[_0x16aa41(0x104)](_0x16aa41(0x103)+_0x4260c9[_0x16aa41(0xeb)]+'\x20'+_0x4260c9[_0x16aa41(0xf9)]);if(_0x4260c9['ok']||_0x4260c9[_0x16aa41(0xeb)]==0x190||_0x4260c9[_0x16aa41(0xeb)]==0x193){const _0x4669f4=_0x4260c9[_0x16aa41(0xe7)]['get'](_0x16aa41(0xdf));let _0x50cf85;_0x4669f4&&_0x4669f4[_0x16aa41(0xe3)](_0x16aa41(0xef))?(_0x50cf85=await _0x4260c9[_0x16aa41(0xf3)](),_0x50cf85[_0x16aa41(0xeb)]=_0x4260c9[_0x16aa41(0xeb)]):_0x50cf85={'status':_0x4260c9['status'],'message':await _0x4260c9[_0x16aa41(0xdc)]()};if(_0x4260c9['ok'])_0x50cf85[_0x16aa41(0xeb)]=0xc8;return a1_0xb29783[_0x16aa41(0x104)](_0x16aa41(0x105)+JSON['stringify'](_0x50cf85)),_0x50cf85;}else throw new Error(_0x4260c9['status']+_0x16aa41(0xea)+_0x4260c9[_0x16aa41(0xf9)]);}catch(_0x34324b){a1_0xb29783[_0x16aa41(0xe1)](_0x16aa41(0xfb)+_0x34324b['message']);throw _0x34324b;}}}