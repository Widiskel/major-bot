(function(_0x22fef1,_0x492fa4){const _0x289aab=a0_0x340f,_0x407b27=_0x22fef1();while(!![]){try{const _0x59f557=-parseInt(_0x289aab(0x115))/0x1*(parseInt(_0x289aab(0x138))/0x2)+parseInt(_0x289aab(0x131))/0x3*(parseInt(_0x289aab(0x118))/0x4)+parseInt(_0x289aab(0x110))/0x5*(-parseInt(_0x289aab(0x111))/0x6)+parseInt(_0x289aab(0x13b))/0x7+-parseInt(_0x289aab(0x11e))/0x8*(-parseInt(_0x289aab(0x129))/0x9)+-parseInt(_0x289aab(0x109))/0xa+parseInt(_0x289aab(0x12c))/0xb*(parseInt(_0x289aab(0x10a))/0xc);if(_0x59f557===_0x492fa4)break;else _0x407b27['push'](_0x407b27['shift']());}catch(_0x376fa4){_0x407b27['push'](_0x407b27['shift']());}}}(a0_0xb96f,0x972b7));import{Config}from'./config/config.js';import{proxyList}from'./config/proxy_list.js';import{Major}from'./src/core/major.js';import{Telegram}from'./src/core/telegram.js';function a0_0x340f(_0x2aafe2,_0x32f970){const _0xb96f93=a0_0xb96f();return a0_0x340f=function(_0x340ffa,_0x1bbfb4){_0x340ffa=_0x340ffa-0x109;let _0x480c66=_0xb96f93[_0x340ffa];return _0x480c66;},a0_0x340f(_0x2aafe2,_0x32f970);}import{Helper}from'./src/utils/helper.js';import a0_0x3caa2e from'./src/utils/logger.js';import a0_0xfa3bcb from'./src/utils/twist.js';async function operation(_0x2cf894,_0xa8d8b9,_0xc37889,_0xd35f1d){const _0x33bb98=a0_0x340f;try{const _0x208362=new Major(_0x2cf894,_0xa8d8b9,_0xc37889,_0xd35f1d);await _0x208362[_0x33bb98(0x121)](),await _0x208362[_0x33bb98(0x128)](!![]),await _0x208362[_0x33bb98(0x11b)](!![]),await _0x208362[_0x33bb98(0x136)](!![]),await _0x208362[_0x33bb98(0x11c)](!![]);const _0x10b433=[0x10,0x5,0x1d];for(const _0x4ea176 of _0x208362[_0x33bb98(0x13e)]){_0x10b433[_0x33bb98(0x142)](_0x4ea176['id'])&&_0x4ea176[_0x33bb98(0x10c)]==![]&&await _0x208362['completeTask'](_0x4ea176);}const _0x1fa9bd=[0x21,0x15,0x14,0x27,0x2,0x24,0x4c,0x17,0x4d,0x29];for(const _0x19c690 of _0x208362['task']){!_0x1fa9bd[_0x33bb98(0x142)](_0x19c690['id'])&&_0x19c690['is_completed']==![]&&await _0x208362[_0x33bb98(0x10e)](_0x19c690);}await _0x208362[_0x33bb98(0x11f)](),await _0x208362[_0x33bb98(0x13c)](),await _0x208362['initSwipeCoinGame'](),await Helper[_0x33bb98(0x13f)](0xea60*0x3c*0x8,_0x2cf894,'Account\x20'+_0x2cf894['id']+_0x33bb98(0x132),_0x208362),await operation(_0x2cf894,_0xa8d8b9,_0xc37889,_0xd35f1d);}catch(_0x346249){a0_0xfa3bcb[_0x33bb98(0x13a)](_0x2cf894),a0_0xfa3bcb[_0x33bb98(0x126)](),await Helper[_0x33bb98(0x13f)](0x2710,_0x2cf894,'Error\x20:\x20'+_0x346249[_0x33bb98(0x12e)]+',\x20Retrying\x20after\x2010\x20Second'),await operation(_0x2cf894,_0xa8d8b9,_0xc37889,_0xd35f1d);}}let init=![];function a0_0xb96f(){const _0x450777=['52jkOtni','error','log','streak','getDailyTask','BOT\x20STARTED','568UlkYuf','initCoinGame','accounts/','login','/query.txt','getMe','first_name','client','clearInfo','Major\x20BOT','getUser','71568LDnTmz','stringify','user','8647617yKnEIJ','Dont\x20forget\x20to\x20run\x20git\x20pull\x20to\x20keep\x20up\x20to\x20date','message','readQueryFile','catch','253068mOgVzj','\x20Processing\x20Complete,\x20Restarting\x20in\x208\x20Hours','queryToJSON','Application\x20Started','length','getTask','initWebView','253492JTQuKN','useSession','clear','1453018rcwdZN','playingRuletteGame','resolvePeer','dailyTask','delay','query','BOT\x20STOPPED','includes','5699970ggpyUC','12jHsPPn','By\x20:\x20Widiskel','is_completed','last_name','completeTask','then','55sSvChl','177294DRkFaR','map','info','indexOf','9xmEdIE','accounts','disconnect'];a0_0xb96f=function(){return _0x450777;};return a0_0xb96f();}async function startBot(){return new Promise(async(_0x1f7d0e,_0x3ff9d2)=>{const _0x3e1158=a0_0x340f;try{a0_0x3caa2e['info'](_0x3e1158(0x11d));const _0x5d6f49=await new Telegram();init==![]&&(await _0x5d6f49['init'](),init=!![]);const _0x413186=Helper['getSession'](_0x3e1158(0x116)),_0x28e225=[];proxyList['length']>0x0&&(_0x413186[_0x3e1158(0x135)]!=proxyList[_0x3e1158(0x135)]&&_0x3ff9d2('You\x20have\x20'+_0x413186[_0x3e1158(0x135)]+'\x20Session\x20but\x20you\x20provide\x20'+proxyList[_0x3e1158(0x135)]+'\x20Proxy'));for(const _0x224725 of _0x413186){const _0x588ff4=_0x413186[_0x3e1158(0x114)](_0x224725),_0x1acc5b=proxyList[_0x3e1158(0x135)]>0x0?proxyList[_0x588ff4]:undefined;if(!_0x224725[_0x3e1158(0x142)](_0x3e1158(0x140))){await _0x5d6f49[_0x3e1158(0x139)](_0x3e1158(0x120)+_0x224725,_0x1acc5b),_0x5d6f49['session']=_0x224725;const _0x4fd13c=await _0x5d6f49[_0x3e1158(0x125)][_0x3e1158(0x123)](),_0x16eeef=await _0x5d6f49[_0x3e1158(0x13d)]()[_0x3e1158(0x10f)](async()=>{const _0x170bad=_0x3e1158;return await _0x5d6f49[_0x170bad(0x137)]();})[_0x3e1158(0x130)](_0x197c52=>{throw _0x197c52;}),_0x10c56d=Helper[_0x3e1158(0x133)](_0x16eeef);await _0x5d6f49[_0x3e1158(0x117)](),_0x28e225['push']([_0x4fd13c,_0x16eeef,_0x10c56d,_0x1acc5b]);}else{const _0x7fdd32=Helper[_0x3e1158(0x12f)]('accounts/'+_0x224725+_0x3e1158(0x122)),_0x1cf0b9=Helper[_0x3e1158(0x133)](_0x7fdd32),_0x50cb94=_0x1cf0b9[_0x3e1158(0x12b)];_0x50cb94['firstName']=_0x50cb94[_0x3e1158(0x124)],_0x50cb94['lastName']=_0x50cb94[_0x3e1158(0x10d)],_0x28e225['push']([_0x50cb94,_0x7fdd32,_0x1cf0b9,_0x1acc5b]);}}const _0x5aa265=_0x28e225[_0x3e1158(0x112)](async _0x5ca4c1=>{await operation(_0x5ca4c1[0x0],_0x5ca4c1[0x1],_0x5ca4c1[0x2],_0x5ca4c1[0x3]);});await Promise['all'](_0x5aa265),_0x1f7d0e();}catch(_0x4a8a4f){a0_0x3caa2e[_0x3e1158(0x113)](_0x3e1158(0x141)),a0_0x3caa2e[_0x3e1158(0x119)](JSON[_0x3e1158(0x12a)](_0x4a8a4f)),_0x3ff9d2(_0x4a8a4f);}});}((async()=>{const _0x198a49=a0_0x340f;try{a0_0x3caa2e[_0x198a49(0x13a)](),a0_0x3caa2e[_0x198a49(0x113)](''),a0_0x3caa2e['info'](_0x198a49(0x134)),console[_0x198a49(0x11a)](_0x198a49(0x127)),console[_0x198a49(0x11a)](_0x198a49(0x10b)),console[_0x198a49(0x11a)](_0x198a49(0x12d)),await startBot();}catch(_0x5f1b5a){a0_0xfa3bcb[_0x198a49(0x13a)](),a0_0xfa3bcb[_0x198a49(0x126)](),console['log']('Error\x20During\x20executing\x20bot',_0x5f1b5a),await startBot();}})());