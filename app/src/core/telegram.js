function a3_0x5260(){const _0x1ceddc=['https://major.glados.app/','serverAddress','\x20-\x20Webview\x20Connected','log','833636dFHSIC','\x0a\x20\x0aPlease\x20Enter\x20New\x20Query\x20','message','Your\x20Query\x20Account\x20List\x20:\x0a\x20\x0a','initWebView','\x0a\x20\x0a1.\x20Create\x20Account\x20\x0a2.\x20Reset\x20Account\x20\x0a3.\x20Start\x20Bot\x0a4.\x20Query\x20modification\x0a\x20\x0aInput\x20your\x20choice\x20:','accountName','init','bot','You\x20dont\x20have\x20any\x20Query\x20Account.','resetAccounts','Query\x20','length','4025565quJAKL','\x20-\x20Created,\x20Please\x20Restart\x20The\x20Bot\x20Again','<empty>','getEntity','useSession','Please\x20Enter\x20Telegram\x20Query\x20:\x20','\x20|\x20FloodWait\x20','query','url','delay','accountType','TELEGRAM_APP_HASH','@major','seconds','includes','saveQueryFile','\x0a\x20\x0aYou\x20already\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:','resolvePeer','Old\x20Query\x20:\x20','agent','getTelegramQuery','\x20-\x20Created','1310668KAvjPN','storeSession','client','5bkswqO','start','TELEGRAM_APP_ID','createDir','accounts','4186818esrrgC','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Account\x20Name\x20:','info','\x0a\x20\x0aPlease\x20Select\x20Query\x20Account\x20for\x20modification:','error','getSession','onBoarding','save','Your\x20Account\x20List\x20:\x0a\x20\x0a','sessions-','android','Invalid\x20input,\x20Please\x20try\x20again','1dJDDOK','proxy','indexOf','queryModificaiton','invoke','Session\x20','stringify','5381112uLzeIS','3020262YDnPqL','queryCreation','/query.txt','exit','Enter\x20your\x20Telegram\x20Verification\x20Code\x20?','Welcome\x20to\x20Fintopio\x20Bot\x20\x0aBy\x20:\x20Widiskel\x20\x0a\x20\x0aLets\x20getting\x20started.\x0a\x0aYour\x20Session\x20List:\x0a','query-','peer','destroy','text','742443GakFcK','session','disconnect'];a3_0x5260=function(){return _0x1ceddc;};return a3_0x5260();}const a3_0x397aa8=a3_0x3c53;(function(_0xe4eec5,_0x5cb9b3){const _0x2aa911=a3_0x3c53,_0x2cf38b=_0xe4eec5();while(!![]){try{const _0x263a96=-parseInt(_0x2aa911(0x1b3))/0x1*(parseInt(_0x2aa911(0x1cc))/0x2)+-parseInt(_0x2aa911(0x1c5))/0x3+-parseInt(_0x2aa911(0x19f))/0x4*(parseInt(_0x2aa911(0x1a2))/0x5)+parseInt(_0x2aa911(0x1a7))/0x6+-parseInt(_0x2aa911(0x1bb))/0x7+parseInt(_0x2aa911(0x1ba))/0x8+parseInt(_0x2aa911(0x189))/0x9;if(_0x263a96===_0x5cb9b3)break;else _0x2cf38b['push'](_0x2cf38b['shift']());}catch(_0x274ed1){_0x2cf38b['push'](_0x2cf38b['shift']());}}}(a3_0x5260,0x60437));import a3_0x264b76 from'input';import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';import{StoreSession}from'telegram/sessions/StoreSession.js';import a3_0x4065ed from'../utils/logger.js';import{FloodWaitError}from'telegram/errors/RPCErrorList.js';import{Config}from'../../config/config.js';import{HttpsProxyAgent}from'https-proxy-agent';function a3_0x3c53(_0xd2fe96,_0x4720d9){const _0x52605d=a3_0x5260();return a3_0x3c53=function(_0x3c53ce,_0x36fee9){_0x3c53ce=_0x3c53ce-0x17d;let _0x2f5ce8=_0x52605d[_0x3c53ce];return _0x2f5ce8;},a3_0x3c53(_0xd2fe96,_0x4720d9);}export class Telegram{[a3_0x397aa8(0x1a0)];constructor(){const _0x347c3f=a3_0x397aa8;this[_0x347c3f(0x182)]=_0x347c3f(0x1a6),this[_0x347c3f(0x191)]=_0x347c3f(0x1c8),this[_0x347c3f(0x184)]=_0x347c3f(0x195);}async[a3_0x397aa8(0x183)](){const _0x433704=a3_0x397aa8;try{await this['onBoarding']();}catch(_0x20221e){console[_0x433704(0x1cb)](_0x20221e),a3_0x4065ed[_0x433704(0x1ab)](''+JSON[_0x433704(0x1b9)](_0x20221e));throw _0x20221e;}}async['onBoarding'](){const _0x4c6038=a3_0x397aa8;try{let _0xc7c41d=_0x4c6038(0x1c0);const _0x536712=Helper['getSession'](_0x4c6038(0x1a6));if(_0x536712[_0x4c6038(0x188)]==0x0)_0xc7c41d+=_0x4c6038(0x18b);else for(const _0x4d621b of _0x536712){_0xc7c41d+='-\x20'+_0x4d621b+'\x0a';}_0xc7c41d+='\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a',_0xc7c41d+=_0x4c6038(0x181);const _0x3a8280=await a3_0x264b76[_0x4c6038(0x1c4)](_0xc7c41d);if(_0x3a8280==0x1)await this[_0x4c6038(0x193)]();else{if(_0x3a8280==0x2)Helper[_0x4c6038(0x186)](),await Helper[_0x4c6038(0x192)](0xbb8),await this[_0x4c6038(0x1ad)]();else{if(_0x3a8280==0x3)Helper[_0x4c6038(0x1ac)](this[_0x4c6038(0x182)])?.['length']==0x0&&(console['info']('You\x20don\x27t\x20have\x20any\x20Accounts,\x20please\x20create\x20first'),await this[_0x4c6038(0x1ad)]());else _0x3a8280==0x4?await this['queryModificaiton']():(console[_0x4c6038(0x1ab)](_0x4c6038(0x1b2)),await this['onBoarding']());}}}catch(_0x39e94b){throw _0x39e94b;}}async['queryModificaiton'](){const _0x305bfe=a3_0x397aa8;try{const _0x4c1f6e=Helper[_0x305bfe(0x1ac)](_0x305bfe(0x1a6)),_0x44e31d=_0x4c1f6e['filter'](_0xd4a40b=>_0xd4a40b[_0x305bfe(0x197)](_0x305bfe(0x190)));let _0x8ceeaf=_0x305bfe(0x17f);for(const _0x44e8c8 of _0x44e31d){_0x8ceeaf+=_0x4c1f6e[_0x305bfe(0x1b5)](_0x44e8c8)+0x1+'.\x20'+_0x44e8c8+'\x0a';}_0x44e31d['length']==0x0?(console[_0x305bfe(0x1cb)](_0x305bfe(0x185)),await this[_0x305bfe(0x1ad)]()):_0x8ceeaf+=_0x305bfe(0x1aa);const _0x290040=await a3_0x264b76[_0x305bfe(0x1c4)](_0x8ceeaf);if(_0x44e31d[_0x290040-0x1]!=undefined){const _0x44ce4f=_0x44e31d[_0x290040-0x1];this['accountName']='accounts/'+_0x44ce4f;const _0xdd180c=_0x305bfe(0x19b)+Helper['readQueryFile'](this[_0x305bfe(0x182)]+_0x305bfe(0x1bd))+_0x305bfe(0x17d),_0x5b3a5d=await a3_0x264b76[_0x305bfe(0x1c4)](_0xdd180c);await Helper['saveQueryFile'](this[_0x305bfe(0x182)],_0x5b3a5d),await Helper[_0x305bfe(0x192)](0xbb8),await this[_0x305bfe(0x1ad)]();}else console['error'](_0x305bfe(0x1b2)),await this[_0x305bfe(0x1b6)]();}catch(_0x2faaa3){throw _0x2faaa3;}}async['sessionCreation'](){const _0x2c86e9=a3_0x397aa8;try{if(Config['TELEGRAM_APP_ID']==undefined||Config[_0x2c86e9(0x194)]==undefined)throw new Error('Please\x20configure\x20your\x20TELEGRAM_APP_ID\x20and\x20TELEGRAM_APP_HASH\x20first');const _0x325e97=Helper[_0x2c86e9(0x1ac)](_0x2c86e9(0x1a6));let _0x317c61='Your\x20Account\x20List\x20:\x0a\x20\x0a';for(const _0x371998 of _0x325e97){_0x317c61+=_0x325e97[_0x2c86e9(0x1b5)](_0x371998)+0x1+'.\x20'+_0x371998+'\x0a';}_0x325e97[_0x2c86e9(0x188)]==0x0?_0x317c61+='<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:':_0x317c61+=_0x2c86e9(0x199);const _0xa62be1=await a3_0x264b76[_0x2c86e9(0x1c4)](_0x317c61);this[_0x2c86e9(0x182)]=Helper[_0x2c86e9(0x1a5)](_0x2c86e9(0x1b0)+_0xa62be1),await this[_0x2c86e9(0x18d)](this[_0x2c86e9(0x182)]),await this[_0x2c86e9(0x1c7)](),a3_0x4065ed[_0x2c86e9(0x1a9)](_0x2c86e9(0x1b8)+this['accountName']+_0x2c86e9(0x19e)),console['log'](_0x2c86e9(0x1b8)+_0xa62be1+_0x2c86e9(0x18a)),this[_0x2c86e9(0x1a0)][_0x2c86e9(0x1ae)](),await Helper['delay'](0xbb8),process[_0x2c86e9(0x1be)]();}catch(_0xe3610f){throw _0xe3610f;}}async[a3_0x397aa8(0x1bc)](){const _0x11d45f=a3_0x397aa8;try{const _0x1b2a5f=Helper['getSession'](_0x11d45f(0x1a6));let _0x5ae53c=_0x11d45f(0x1af);for(const _0x3ac37f of _0x1b2a5f){_0x5ae53c+=_0x1b2a5f['indexOf'](_0x3ac37f)+0x1+'.\x20'+_0x3ac37f+'\x0a';}_0x1b2a5f[_0x11d45f(0x188)]==0x0?_0x5ae53c+=_0x11d45f(0x1a8):_0x5ae53c+='\x0a\x20\x0aYou\x20already\x20have\x20Account,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Account\x20:';const _0x8afc94=await a3_0x264b76[_0x11d45f(0x1c4)](_0x5ae53c);this[_0x11d45f(0x182)]=Helper[_0x11d45f(0x1a5)](_0x11d45f(0x1c1)+_0x8afc94);let _0x61a3ab=_0x11d45f(0x18e);const _0x29d472=await a3_0x264b76['text'](_0x61a3ab);await Helper[_0x11d45f(0x198)](this[_0x11d45f(0x182)],_0x29d472),a3_0x4065ed[_0x11d45f(0x1a9)](_0x11d45f(0x187)+this['accountName']+_0x11d45f(0x19e)),console[_0x11d45f(0x1cb)](_0x11d45f(0x187)+_0x8afc94+_0x11d45f(0x18a)),await Helper['delay'](0xbb8),process[_0x11d45f(0x1be)]();}catch(_0x2d725f){throw _0x2d725f;}}async['accountType'](){const _0xf02552=a3_0x397aa8;try{const _0x23ce04=Helper[_0xf02552(0x1ac)]('accounts');let _0x564434=_0xf02552(0x1af);if(_0x23ce04[_0xf02552(0x188)]>0x0)for(const _0x1c5941 of _0x23ce04){_0x564434+=_0x23ce04[_0xf02552(0x1b5)](_0x1c5941)+0x1+'.\x20'+_0x1c5941+'\x0a';}else _0x564434+='<empty>\x0a';_0x564434+='\x0a\x20\x0aAvailable\x20Account\x20Type:\x20\x0a1.\x20Session\x20\x0a2.\x20Query\x0a\x20\x0aPlease\x20Entery\x20Your\x20Choice\x20:\x20';const _0x405f18=await a3_0x264b76[_0xf02552(0x1c4)](_0x564434);if(_0x405f18==0x1)await this['sessionCreation']();else _0x405f18==0x2?await this[_0xf02552(0x1bc)]():(console[_0xf02552(0x1cb)]('Invalid\x20Input'),await this[_0xf02552(0x193)]());}catch(_0x37688e){throw _0x37688e;}}async[a3_0x397aa8(0x18d)](_0x4620a4,_0x572fdb){const _0x3802c0=a3_0x397aa8;try{this[_0x3802c0(0x1b4)]=_0x572fdb;const _0x3799d2={'connectionRetries':0x5};this[_0x3802c0(0x1b4)]&&(_0x3799d2[_0x3802c0(0x19c)]=new HttpsProxyAgent(this[_0x3802c0(0x1b4)])),this[_0x3802c0(0x1a0)]=new StoreSession(_0x4620a4),this[_0x3802c0(0x1a1)]=new TelegramClient(this[_0x3802c0(0x1a0)],Config[_0x3802c0(0x1a4)],Config[_0x3802c0(0x194)],_0x3799d2),this['storeSession'][_0x3802c0(0x1ae)](),await this[_0x3802c0(0x1a1)][_0x3802c0(0x1a3)]({'phoneNumber':async()=>await a3_0x264b76[_0x3802c0(0x1c4)]('Enter\x20your\x20Telegram\x20Phone\x20Number\x20?'),'password':async()=>await a3_0x264b76[_0x3802c0(0x1c4)]('Enter\x20your\x20Telegram\x20Password?'),'phoneCode':async()=>await a3_0x264b76['text'](_0x3802c0(0x1bf)),'onError':_0x1a60cd=>{const _0x282f80=_0x3802c0;console[_0x282f80(0x1cb)](_0x1a60cd[_0x282f80(0x17e)]);}}),console[_0x3802c0(0x1cb)]();}catch(_0xcbad1b){throw _0xcbad1b;}}async[a3_0x397aa8(0x19a)](){const _0x221727=a3_0x397aa8;try{a3_0x4065ed['info'](_0x221727(0x1b8)+this[_0x221727(0x1c6)]+'\x20-\x20Resolving\x20Peer');while(this['peer']==undefined){try{this[_0x221727(0x1c2)]=await this[_0x221727(0x1a1)][_0x221727(0x18c)](this[_0x221727(0x184)]);break;}catch(_0x4f663c){if(_0x4f663c instanceof FloodWaitError){const _0x461c06=_0x4f663c[_0x221727(0x196)];a3_0x4065ed['warn'](this[_0x221727(0x1a1)][_0x221727(0x1c6)][_0x221727(0x1c9)]+_0x221727(0x18f)+_0x4f663c),a3_0x4065ed['info'](this[_0x221727(0x1a1)]['session'][_0x221727(0x1c9)]+'\x20|\x20Sleep\x20'+_0x461c06+'s'),await Helper[_0x221727(0x192)]((_0x461c06+0x3)*0x3e8);}else throw _0x4f663c;}}}catch(_0x3304d5){throw _0x3304d5;}}async[a3_0x397aa8(0x1c7)](){const _0x2f758f=a3_0x397aa8;await this['client'][_0x2f758f(0x1c7)](),await this['client'][_0x2f758f(0x1c3)](),this[_0x2f758f(0x1c2)]=undefined,this[_0x2f758f(0x182)]=undefined;}async[a3_0x397aa8(0x180)](){const _0x5d437b=a3_0x397aa8;try{const _0x476716=await this['client'][_0x5d437b(0x1b7)](new Api['messages']['RequestWebView']({'peer':this[_0x5d437b(0x1c2)],'bot':this[_0x5d437b(0x1c2)],'fromBotMenu':!![],'url':this[_0x5d437b(0x191)],'platform':_0x5d437b(0x1b1)}));a3_0x4065ed[_0x5d437b(0x1a9)](_0x5d437b(0x1b8)+this[_0x5d437b(0x1c6)]+_0x5d437b(0x1ca));const _0xddeb9=_0x476716[_0x5d437b(0x191)];return Helper[_0x5d437b(0x19d)](_0xddeb9,0x3);}catch(_0x269370){throw _0x269370;}}}