/****************************************

脚本功能：fandeng

使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[mitm]

hostname = *dushu*


[rewrite_local]

^http[s]?:\/\/.+dushu.+(v101|v100|program\/v100)\/(content|play\/duration|index|list|userInfo|vipInfo|info|ceiltip|mainList|getMarketInfoByType|share).*$ url script-response-body FD.js
^http[s]?:\/\/.+dushu.+(v101\/content|book\/v100\/info|\/play\/duration|\/v100\/index|lilei-talk-orch\/program\/v100\/info).*$ url script-request-body FDTK.js
^http[s]?:\/\/.*dushu365\.com\/resource-orchestration-system\/play\/duration url reject-200

***************************************/

/*20230215晚上2.0
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', elqcz = '__0xf53f2',  __0xf53f2=['w5pkVcK8w6bCpMO8wpHDkMO6wrpzw4wQwq/DsnN1ZwMiw4Qvw7nDiQ==','w4F5w5HDiHZSw5nCvGTCi8OEwqjCrMK6w5XCjMOGwq7CmXzDgF3DtsKxw55YwolwwoTDgMKyc8OIBA==','cxs/LU3DrcOU','w5HCqsKEKA==','w5fDn8OtdA==','w6g3TcKsw6oyLhhQ','wq9ow57Dt8OlZsK/','w77DpkrDnQ==','wrfCm8OQOsOwXw==','wrhPwrjCoA==','WQbCrcKV','wqPCjUTClw==','wqjCqA/CmHvCrB3DjcOc','wq3CrzXDrsK9QMOn','P8OWwrTDrMKOF3PDtsKXZMKb','VMOww7vCoA==','RcO/w6PCrhnCrw==','w5HCkx05','woJvZXc=','w6s0bhh0TUk=','XMO4w5c1','V8Khw4nCo0E=','wpLDngJDw77CosOSwoTDqA==','UMKxwqlF','woAHMX7Cn8OQwrBRH8OTw7g=','woXDvCJuFyI=','VsO+NTA=','Ej9lNnfCvcO9esKGwpJb','VsOjw6rCpA==','CyzDhMOn','w4TDg8OkfsKlIA==','wod7w5zDgWt0wpI=','DMKUAhZ+wqbDtsOOwrHDt8Oc','w7nDrTQABw==','IsKJwpfCtBccw4lnw60=','w6jDkWMK','V8KbaBwkwqo=','wpFzEMOt','RsKrw5DCq18hw6LDiMKTLMKR','w5MdcA4=','w7vDsV/DiMKPLH3ClcOw','OsKeYBDCpsKiwqVVTsOkwpxZwpt6fzrDo38xwrhncMOXwoYiaMOEw6QJeMK2w6/DicOKCkZ+w5TCr8KxfC/CqsOAw4wiw4LDvcK1G8O3eQUPIGfDuSTDmcOcwqHDoMOIEsOIesKsw6RfJ1V+T8KeFMOQemDDp0ZgMsOSRDA=','w57DjVLCrUTDpifCmQ==','wpdrGuS+k+S5rA==','VhrCrMKVwpjDgCs=','w4/Dn0PCvg==','wqHCrzXDn8KsYsOk','RcOiw6rCsynCsMKjb3HCjg==','wrzDiB46b8OlwpE=','wrBLwq3CswHClTZgSsKxwphf','wqjCtBzCg3DCnxHDk8OR','5p6m6K2j56mT5bab6KaQ6ZSs5omK5YqjwrU=','wo5vYlTCncKRNEzCgA==','OMKTwoHCuAE0w4Y=','NsKLYAE=','BFTDjWh4wqrDhg==','6IW65pyd55aPK+S8s+S5ucKW5Ya06LWL5o6t5L2k77yn56ac5q6R6La45Y2W772FQRvpo7LpgIsWB8KPwqoqw6vDvMKQwpHCvkDDhRPDicKiLRwFwoYuw73ClMOt','wroBw5hqwrbCmBIewo0=','WxXCvMKR','ByLDhMOSfzTDkDdiw6PDk0ZU','S8K8w5TCgUIxw4/Dj8Kf','w78iS8Kk','w7bCmMK5FMKXw5xoLxTDhjzCnVg=','wrPCswnCsnrCvgbDmMOA','S8Kyw5PCjVoqw5jDmA==','wpgaKk3CgsOBwp5yA8OSw79Zw4I=','XMK/wqlnDcK/fFrDkw==','w5rCrcKWGsOKwpbDtMOR','wqJnw47Dsw==','wp19EMOYwrnDu8OYwpvDkcOFwqhkw5Q=','wqHDiQoceMOfwoVBMg==','woJaQFlhw7Q=','w5/CjgwIT8OrwpgjCWTDu8Okw6k=','wrDCriHDiMKqesOzw4zDgw==','XMKxwq5rFcKka00=','WsOwNQVWUMKEw7wawpvCglYQ','w5/DkUfCnEXDsjjCjxo=','w4TDmFHCjELDoibCmg==','S8Otw5E9T8KGw4UhQw==','wrNAIcOww7ASNg==','PsKPegfCocOw','w6YoKFU=','w5nDjMO7U8KzMg==','wqlaN8O8w6Y6OcKZwoY=','wrLCshnClG3ChBI=','w7jDuCgFEk4/','cETCkcKnwp0fRsOvU8Ojw5UsPQcOw6HCtuiHvOaem+eWv8OO5L6u5LmZHOWEiui1p+aOtuS/gu+8heekiOasoui0p+WPre+8hw==','QMO6MT1YQ8Ki','w7nDg3IZwq5tVX7ChMKPw7R8w5M=','TRHCuMKcwoHDrCg=','w4Rrf3LCpsKNPkHDlkjDrj5Ew73Dq8KqfibDrXLChgtx','w7AiXAFsS0g=','w5ITLHzCiMKTw6dpBMOVw6k=','w5LCkww=','wpzDtyhsBSMqwpDCuQ==','w50PbgZHKiLCu8Kqw5nDslrDi8KL','wolXw6s=','54uX5p2R5YyQ77++ICHkvJvlrpjmnoPlvYDnqYHvvYDovZ/oro3mlJrmjKbmiKHku6Xnma7lta/kv5s=','5Yu76Zq454i15p+d5Y+i77+HHsOY5L6/5ay45p6l5b6s56mc','ScKuUgcv','wrJbBcOiwrM=','w7kubsKuw4M=','wrp4w4nDjF0=','wpt9J8OjwpA=','wq7CrzbCqHY=','wowXw7BQwog=','XxcBG2U=','GsKtwqvChwE=','w74aQz1q','wppWHMO4wro=','w73DhcObYsKP','w50cwq8=','VMKEw5o=','GghV','wrl4wrQ=','GhR6','wprDrT5gDS0=','woJww5bDg2dT','w60VTsKcw6c=','csKYbjMK','woVBaFrCvg==','wpduw5DDhsOc','wrkPw4dLwro=','w6w0TQ==','wrzCrsOVCcOc','w6jDpsOpQ8KD','bcKbwrx2Jw==','wprDnAtAAQ==','w6zDkU/DpcKN','wrdBQXvCoQ==','w6rDmU3CsHI=','woXDhDgubw==','woFTHMOtwoA=','wrlHKsOaw58=','csKcwrZ2DA==','wo9PXlJs','wrZ0N8OZw4Q=','XsOdw4oRVg==','wpNWDcOJwqE=','JjzCknF5','w43Dl1Qxwo8=','wq7DvgZFw5s=','w6kNasKBw4w=','F8K6QCnCoQ==','LTTCqHo=','w6omKGAxwpEKwrsIBBVLwp4=','w77DsigqHFgoT8Ox','w7LDpk3Ds8KZME3Cgw==','wr/Cn8OKPA==','wqzCriXDn8Kqf8OCw5DDk0o5WnA=','wq5BNcOWw6coIsKMwpo=','w7TDq3F/NsOYFnw=','w4rDjkfCs1M=','DgDDkcOIVQ==','w43Di1nCvF7DriXCkl8mwqnDp8Ojw5DCjDM=','VsKBw5nCu8KcQWjCtcKdR8KfQsOFDFUsw7FzwrXDmcK6asOJdcOJXj5LccKdfXRKZh/DmcOLw7lTZDgHwrZtwpLCocO4w4zDvsOew6XDtsKpw5jDnCclFcKlw6wmw7s=','w6snNUA=','MsKVwoTCtBc=','w6spXBh5','wqzDlT1rOg==','w53Dk1XChWU=','GQrDkl/DtQ==','PXHCocK4wpI=','w7gEWMKJw7c=','w4PChAso','wrbCusOYC8Ov','wp5AEMOww58=','wrJjw4nDpg==','U8KsUTwm','w7/CpsK5OMOp','w5nDllAiwow=','HUfCn8KYwrc=','wqRdwrU=','UcKRw60=','wrtPLsObw6Y=','wrx9dEzCqg==','w4QGTQdF','wrDClMOU','JhRf','w4/DqC49Ng==','AgB1w6zClA==','UMKlw5jCm0g=','wpEFLnXClA==','w7DClDETSQ==','V8K7w5LCqWo=','OlTCiSc=','w53DiMOmdsKyIw==','wopeWl8=','w70xWsKg','w7/DrGNN','wpzDtyBmACE=','w4bCv8KCIMOMwpTDscORVQ==','woUbOnzCi8OYwrN4Eg==','dRcxLVbDlg==','fAA1K0HDi8OddA==','w4YJa2XDnsONw69hR8OcwrxAwoU=','woU7w4xZwp0=','BnDCiMKawp8=','w5LDqBU8Gg==','w6TCtTUkUw==','ClPCrQrCqQ==','w4o7wqbCkCg=','BsKMRCzCuQ==','wqZGKcO0wqU=','w7jDonlfMcORHw==','V8K/wrNXDcKmaw==','wpoUCQ==','w78Jwpt/w6jCg0kEw4MBwrzCmH9zw6DDgnM=','BsOtwrrCvUnCuMOyZzPCgcOGwobDpsODw50Gwp8=','c8OnOwN8','OxzDvsOfUQ==','wr3DiAJQIg==','Z8KtZD0p','w4QMaAZS','R8Oww73Crw==','w7bDqFk=','LTDCvm52','wqLClFPCk8OHDk3Dk8Ob','wr9cN8O6w7o=','UcO3w4U7','wpJ8cHXClw==','Gl/CmS/CsQ==','wqbDlhY2Yw==','wr5LJ8Ogw68=','w77Dv2VDLA==','wqzCn8OMMw==','fw04LUXDlsObdcKx','w6bDsj8=','cxs9Jw==','wppNT11w','woFnC8Ovwp8=','ET1mOHE=','wqfCrj/DuMKqY8Ok','RsKrw4PCp10ww5TDk8KU','McKFehPCusO0w68=','b8OYw7fDv8OO','w6nDsjYaHEE/','OMKTwoPCsg==','worDtiJ6DCYh','NcKYwofCqB4=','QMK8w47CsUIow5g=','wqHDlBs8cg==','XBvCpsKDwo/Doyg=','w5FAeUM=','w7csWA==','M8KSwoHCpA==','wpN8fQ==','wrZnw4jDocO4','w6jCmgHDhsKGVUfDk8ObMWLCn2o=','wpgKNV8WaCfDvMK6w4I=','IUjCk8KhwoBEQMOpScOfwp8kO0pTwrPDtcKLwpjDuMOfwoHDkxMuMAA2','wqPDhiZbw4w2QXnClMKOwp8owoQG','w7TCiMKPbcK0GMORw6DCpUo9VVk=','w4F2w5fDkWFIwpHDp3PDlsKfwrXDrMKhw5jCgsKG','w4bDr305U2UnwpDCtCBwdsKG','w4FJHw4lwrNzwpwnw5UoRANe'];(function(_0x51b53e,_0x2b10b6){var _0x214c5e=function(_0xc9045b){while(--_0xc9045b){_0x51b53e['push'](_0x51b53e['shift']());}};var _0x1f89aa=function(){var _0x171499={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x337167,_0x56abd5,_0x1ce52c,_0x4c8204){_0x4c8204=_0x4c8204||{};var _0x593882=_0x56abd5+'='+_0x1ce52c;var _0x1f2dc4=0x0;for(var _0x1f2dc4=0x0,_0xe34b7d=_0x337167['length'];_0x1f2dc4<_0xe34b7d;_0x1f2dc4++){var _0x2ed574=_0x337167[_0x1f2dc4];_0x593882+=';\x20'+_0x2ed574;var _0x568894=_0x337167[_0x2ed574];_0x337167['push'](_0x568894);_0xe34b7d=_0x337167['length'];if(_0x568894!==!![]){_0x593882+='='+_0x568894;}}_0x4c8204['cookie']=_0x593882;},'removeCookie':function(){return'dev';},'getCookie':function(_0x16768c,_0x336353){_0x16768c=_0x16768c||function(_0x252329){return _0x252329;};var _0x1291ba=_0x16768c(new RegExp('(?:^|;\x20)'+_0x336353['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x931e81=function(_0x4105b3,_0x510814){_0x4105b3(++_0x510814);};_0x931e81(_0x214c5e,_0x2b10b6);return _0x1291ba?decodeURIComponent(_0x1291ba[0x1]):undefined;}};var _0x8655c5=function(){var _0x4f2c37=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4f2c37['test'](_0x171499['removeCookie']['toString']());};_0x171499['updateCookie']=_0x8655c5;var _0x5b4f74='';var _0x49f2f3=_0x171499['updateCookie']();if(!_0x49f2f3){_0x171499['setCookie'](['*'],'counter',0x1);}else if(_0x49f2f3){_0x5b4f74=_0x171499['getCookie'](null,'counter');}else{_0x171499['removeCookie']();}};_0x1f89aa();}(__0xf53f2,0x198));var _0x44da=function(_0x30a9ea,_0x514f3f){_0x30a9ea=_0x30a9ea-0x0;var _0x1449e0=__0xf53f2[_0x30a9ea];if(_0x44da['initialized']===undefined){(function(){var _0x44519c=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xdd7bf4='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x44519c['atob']||(_0x44519c['atob']=function(_0x398319){var _0x5c59ac=String(_0x398319)['replace'](/=+$/,'');for(var _0x400b66=0x0,_0x45977a,_0x1ca35f,_0x27cfe5=0x0,_0x26a3dc='';_0x1ca35f=_0x5c59ac['charAt'](_0x27cfe5++);~_0x1ca35f&&(_0x45977a=_0x400b66%0x4?_0x45977a*0x40+_0x1ca35f:_0x1ca35f,_0x400b66++%0x4)?_0x26a3dc+=String['fromCharCode'](0xff&_0x45977a>>(-0x2*_0x400b66&0x6)):0x0){_0x1ca35f=_0xdd7bf4['indexOf'](_0x1ca35f);}return _0x26a3dc;});}());var _0x176a7c=function(_0x3562b9,_0xc89855){var _0x1081fd=[],_0x4c0952=0x0,_0x5f4f01,_0x1ea70b='',_0x20d46b='';_0x3562b9=atob(_0x3562b9);for(var _0x47be81=0x0,_0x39fcbf=_0x3562b9['length'];_0x47be81<_0x39fcbf;_0x47be81++){_0x20d46b+='%'+('00'+_0x3562b9['charCodeAt'](_0x47be81)['toString'](0x10))['slice'](-0x2);}_0x3562b9=decodeURIComponent(_0x20d46b);for(var _0x2562a5=0x0;_0x2562a5<0x100;_0x2562a5++){_0x1081fd[_0x2562a5]=_0x2562a5;}for(_0x2562a5=0x0;_0x2562a5<0x100;_0x2562a5++){_0x4c0952=(_0x4c0952+_0x1081fd[_0x2562a5]+_0xc89855['charCodeAt'](_0x2562a5%_0xc89855['length']))%0x100;_0x5f4f01=_0x1081fd[_0x2562a5];_0x1081fd[_0x2562a5]=_0x1081fd[_0x4c0952];_0x1081fd[_0x4c0952]=_0x5f4f01;}_0x2562a5=0x0;_0x4c0952=0x0;for(var _0x412ade=0x0;_0x412ade<_0x3562b9['length'];_0x412ade++){_0x2562a5=(_0x2562a5+0x1)%0x100;_0x4c0952=(_0x4c0952+_0x1081fd[_0x2562a5])%0x100;_0x5f4f01=_0x1081fd[_0x2562a5];_0x1081fd[_0x2562a5]=_0x1081fd[_0x4c0952];_0x1081fd[_0x4c0952]=_0x5f4f01;_0x1ea70b+=String['fromCharCode'](_0x3562b9['charCodeAt'](_0x412ade)^_0x1081fd[(_0x1081fd[_0x2562a5]+_0x1081fd[_0x4c0952])%0x100]);}return _0x1ea70b;};_0x44da['rc4']=_0x176a7c;_0x44da['data']={};_0x44da['initialized']=!![];}var _0x1d3cd9=_0x44da['data'][_0x30a9ea];if(_0x1d3cd9===undefined){if(_0x44da['once']===undefined){var _0x13de9a=function(_0x2d4ae0){this['rc4Bytes']=_0x2d4ae0;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x13de9a['prototype']['checkState']=function(){var _0x24b4c8=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x24b4c8['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x13de9a['prototype']['runState']=function(_0x197386){if(!Boolean(~_0x197386)){return _0x197386;}return this['getState'](this['rc4Bytes']);};_0x13de9a['prototype']['getState']=function(_0x4376e7){for(var _0x4cb389=0x0,_0xaa930a=this['states']['length'];_0x4cb389<_0xaa930a;_0x4cb389++){this['states']['push'](Math['round'](Math['random']()));_0xaa930a=this['states']['length'];}return _0x4376e7(this['states'][0x0]);};new _0x13de9a(_0x44da)['checkState']();_0x44da['once']=!![];}_0x1449e0=_0x44da['rc4'](_0x1449e0,_0x514f3f);_0x44da['data'][_0x30a9ea]=_0x1449e0;}else{_0x1449e0=_0x1d3cd9;}return _0x1449e0;};var _0x2476b3=function(){var _0x5d8128=!![];return function(_0x16a009,_0x4efee2){var _0x48d08c=_0x5d8128?function(){if(_0x4efee2){var _0x29227d=_0x4efee2['apply'](_0x16a009,arguments);_0x4efee2=null;return _0x29227d;}}:function(){};_0x5d8128=![];return _0x48d08c;};}();var _0x38498e=_0x2476b3(this,function(){var _0x20b825=function(){return'\x64\x65\x76';},_0x37fd0a=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x209f39=function(){var _0x578ed4=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x578ed4['\x74\x65\x73\x74'](_0x20b825['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x54431a=function(){var _0x427485=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x427485['\x74\x65\x73\x74'](_0x37fd0a['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x81a0db=function(_0x45031c){var _0x23f329=~-0x1>>0x1+0xff%0x0;if(_0x45031c['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x23f329)){_0x2cf380(_0x45031c);}};var _0x2cf380=function(_0x2392b7){var _0x5ddf1f=~-0x4>>0x1+0xff%0x0;if(_0x2392b7['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x5ddf1f){_0x81a0db(_0x2392b7);}};if(!_0x209f39()){if(!_0x54431a()){_0x81a0db('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x81a0db('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x81a0db('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x38498e();var _0x4cf540=function(){var _0x3b81e3=!![];return function(_0x5cad7d,_0x31f13f){var _0x262b63=_0x3b81e3?function(){if(_0x31f13f){var _0x53a8d2=_0x31f13f[_0x44da('0x0','2p0F')](_0x5cad7d,arguments);_0x31f13f=null;return _0x53a8d2;}}:function(){};_0x3b81e3=![];return _0x262b63;};}();setInterval(function(){var _0x342314={'aMaNE':function _0x1fec80(_0xb554de){return _0xb554de();}};_0x342314[_0x44da('0x1','Rm]x')](_0x127d90);},0xfa0);(function(){var _0x46d657={'vmbZO':_0x44da('0x2','2p0F'),'PdPvT':_0x44da('0x3','N]Hq'),'oTSkf':function _0xada85d(_0xc09d6,_0x4e187){return _0xc09d6(_0x4e187);},'cGgLs':_0x44da('0x4','DnAM'),'mDfVk':function _0x54ef59(_0x4b8be6,_0x1700f3){return _0x4b8be6+_0x1700f3;},'DnUeW':_0x44da('0x5','%m7t'),'JmIqK':_0x44da('0x6','@Y9O'),'UfGIq':function _0xe66649(_0x517bbc,_0x27226f){return _0x517bbc(_0x27226f);},'ObmKC':function _0x531854(_0x18db77){return _0x18db77();},'ELqbY':function _0x3c3f0b(_0x109f45,_0x3ff3ff,_0x4d6dbf){return _0x109f45(_0x3ff3ff,_0x4d6dbf);}};_0x46d657[_0x44da('0x7','6vyT')](_0x4cf540,this,function(){var _0x5f0b00=new RegExp(_0x46d657[_0x44da('0x8','2p0F')]);var _0x53278e=new RegExp(_0x46d657[_0x44da('0x9','AZvU')],'i');var _0x3c8354=_0x46d657[_0x44da('0xa','98Xq')](_0x127d90,_0x46d657[_0x44da('0xb','1UR7')]);if(!_0x5f0b00[_0x44da('0xc','Cx2E')](_0x46d657[_0x44da('0xd','^O6D')](_0x3c8354,_0x46d657[_0x44da('0xe','S2Xd')]))||!_0x53278e[_0x44da('0xf','ksFA')](_0x46d657[_0x44da('0x10','BuRC')](_0x3c8354,_0x46d657[_0x44da('0x11','gECG')]))){_0x46d657[_0x44da('0x12','$m[d')](_0x3c8354,'0');}else{_0x46d657[_0x44da('0x13','98Xq')](_0x127d90);}})();}());var _0x26fae3=function(){var _0x447d30=!![];return function(_0x19914a,_0x47fa17){var _0x1a1056={'aakNn':function _0xe2422e(_0x542a65,_0xdca2fe){return _0x542a65!==_0xdca2fe;},'ZseZX':_0x44da('0x14','%uxS'),'szIhc':_0x44da('0x15','S44B'),'thrkG':function _0x2ffdd7(_0x3b178b,_0x70d1a5){return _0x3b178b<_0x70d1a5;}};if(_0x1a1056[_0x44da('0x16','S2Xd')](_0x1a1056[_0x44da('0x17',')1H]')],_0x1a1056[_0x44da('0x18','#&LA')])){var _0x28ae9e=_0x447d30?function(){var _0x20cefa={'EuvTE':function _0x1aed71(_0x38c81e,_0x394295){return _0x38c81e!==_0x394295;},'qFmxK':_0x44da('0x19','^O6D'),'svxYe':_0x44da('0x1a','Md]w'),'GuIOi':function _0x260f4b(_0x4d01aa,_0x4c2f2d){return _0x4d01aa(_0x4c2f2d);}};if(_0x20cefa[_0x44da('0x1b','UjcO')](_0x20cefa[_0x44da('0x1c','3RnZ')],_0x20cefa[_0x44da('0x1d','S44B')])){if(_0x47fa17){var _0xc1d33b=_0x47fa17[_0x44da('0x1e','[Sp3')](_0x19914a,arguments);_0x47fa17=null;return _0xc1d33b;}}else{_0x20cefa[_0x44da('0x1f','Cx2E')](result,'0');}}:function(){};_0x447d30=![];return _0x28ae9e;}else{for(var _0x56f35c=0x0;_0x1a1056[_0x44da('0x20','S44B')](_0x56f35c,_0x13e85e[_0x44da('0x21','iodi')][_0x44da('0x22',')OGC')]);_0x56f35c++){_0x13e85e[_0x44da('0x23','%sq3')][_0x56f35c][_0x44da('0x24','1UR7')]=!![];_0x13e85e[_0x44da('0x25','Qq![')][_0x56f35c][_0x44da('0x26','6vyT')]=!![];}_0xaa4c3d=JSON[_0x44da('0x27','gECG')](_0x13e85e);}};}();var _0x456316=_0x26fae3(this,function(){var _0x564f0c={'LNfZE':function _0x51e878(_0x337971,_0x1d0816){return _0x337971!==_0x1d0816;},'TUzIk':_0x44da('0x28','[Sp3'),'XuMUi':function _0x2f9902(_0x398a4a,_0x54009a){return _0x398a4a===_0x54009a;},'STMxs':_0x44da('0x29','B7zr'),'TfPLl':function _0x5eca7c(_0x83cd22,_0x182fb1){return _0x83cd22===_0x182fb1;},'UFAbb':_0x44da('0x2a','B7zr'),'tuocI':_0x44da('0x2b','[Sp3')};var _0xfba00f=function(){};var _0x499750=_0x564f0c[_0x44da('0x2c','9an7')](typeof window,_0x564f0c[_0x44da('0x2d','98Xq')])?window:_0x564f0c[_0x44da('0x2e','UjcO')](typeof process,_0x564f0c[_0x44da('0x2f','Cx2E')])&&_0x564f0c[_0x44da('0x30','iodi')](typeof require,_0x564f0c[_0x44da('0x31','Dr*U')])&&_0x564f0c[_0x44da('0x32','0esI')](typeof global,_0x564f0c[_0x44da('0x33','jy%O')])?global:this;if(!_0x499750[_0x44da('0x34','Qq![')]){_0x499750[_0x44da('0x35','d)Wc')]=function(_0x356584){var _0x3d8c56={'AxzRE':function _0x368f9c(_0x25b7fd,_0x41b453){return _0x25b7fd===_0x41b453;},'TQNYA':_0x44da('0x36','[Sp3'),'YESWd':_0x44da('0x37','9an7'),'Djdit':_0x44da('0x38','0b$v')};if(_0x3d8c56[_0x44da('0x39','UqLI')](_0x3d8c56[_0x44da('0x3a','Rm]x')],_0x3d8c56[_0x44da('0x3b','6vyT')])){var _0x319064=_0x3d8c56[_0x44da('0x3c','BuRC')][_0x44da('0x3d','#&LA')]('|'),_0x40a8ca=0x0;while(!![]){switch(_0x319064[_0x40a8ca++]){case'0':_0x5f5543[_0x44da('0x3e','0b$v')]=_0x356584;continue;case'1':_0x5f5543[_0x44da('0x3f','bu$1')]=_0x356584;continue;case'2':_0x5f5543[_0x44da('0x40','MwDH')]=_0x356584;continue;case'3':_0x5f5543[_0x44da('0x41','oo]r')]=_0x356584;continue;case'4':_0x5f5543[_0x44da('0x42','S2Xd')]=_0x356584;continue;case'5':return _0x5f5543;case'6':var _0x5f5543={};continue;case'7':_0x5f5543[_0x44da('0x43','Cs5d')]=_0x356584;continue;case'8':_0x5f5543[_0x44da('0x44',')1H]')]=_0x356584;continue;}break;}}else{var _0x3758e7=_0x3d8c56[_0x44da('0x45','iodi')][_0x44da('0x46','epGU')]('|'),_0x56437d=0x0;while(!![]){switch(_0x3758e7[_0x56437d++]){case'0':_0x5e68fe[_0x44da('0x47','S2Xd')]=_0x356584;continue;case'1':_0x5e68fe[_0x44da('0x48','Qq![')]=_0x356584;continue;case'2':return _0x5e68fe;case'3':_0x5e68fe[_0x44da('0x49','^O6D')]=_0x356584;continue;case'4':_0x5e68fe[_0x44da('0x4a','B7zr')]=_0x356584;continue;case'5':_0x5e68fe[_0x44da('0x4b','UjcO')]=_0x356584;continue;case'6':var _0x5e68fe={};continue;case'7':_0x5e68fe[_0x44da('0x4c','B7zr')]=_0x356584;continue;case'8':_0x5e68fe[_0x44da('0x4d','%sq3')]=_0x356584;continue;}break;}}}(_0xfba00f);}else{var _0x5df3a8=_0x564f0c[_0x44da('0x4e','jy%O')][_0x44da('0x4f','Md]w')]('|'),_0x35911b=0x0;while(!![]){switch(_0x5df3a8[_0x35911b++]){case'0':_0x499750[_0x44da('0x50','eAW#')][_0x44da('0x51','S44B')]=_0xfba00f;continue;case'1':_0x499750[_0x44da('0x52','0esI')][_0x44da('0x53','N]Hq')]=_0xfba00f;continue;case'2':_0x499750[_0x44da('0x54','UjcO')][_0x44da('0x55','%m7t')]=_0xfba00f;continue;case'3':_0x499750[_0x44da('0x56','6vyT')][_0x44da('0x57','%m7t')]=_0xfba00f;continue;case'4':_0x499750[_0x44da('0x58','S44B')][_0x44da('0x59','epGU')]=_0xfba00f;continue;case'5':_0x499750[_0x44da('0x5a','4r3*')][_0x44da('0x5b','C5UF')]=_0xfba00f;continue;case'6':_0x499750[_0x44da('0x56','6vyT')][_0x44da('0x5c','1UR7')]=_0xfba00f;continue;}break;}}});_0x456316();var _0xaa4c3d=$response[_0x44da('0x5d','%m7t')];var _0x452a91=$request[_0x44da('0x5e',')1H]')];var _0x13e85e=JSON[_0x44da('0x5f','ksFA')](_0xaa4c3d);const _0x5b6c9c=_0x44da('0x60','oo]r');const _0x4bfc89=_0x44da('0x61','#&LA');const _0x3a11c0=_0x44da('0x62','98Xq');const _0x279ef5=_0x44da('0x63','$m[d');const _0x318476=_0x44da('0x64','^O6D');const _0xa75aba=_0x44da('0x65','g[Wf');const _0x254bad=_0x44da('0x66','6vyT');const _0x43495a=_0x44da('0x67','%sq3');const _0xb2b9da=_0x44da('0x68','jy%O');const _0x370205=_0x44da('0x69','g[Wf');if(_0x452a91[_0x44da('0x6a','B7zr')](_0x5b6c9c)!=-0x1){_0x13e85e[_0x44da('0x6b','gECG')][_0x44da('0x6c',')OGC')]=!![];_0xaa4c3d=JSON[_0x44da('0x6d','1UR7')](_0x13e85e);}if(_0x452a91[_0x44da('0x6e','ksFA')](_0x4bfc89)!=-0x1){for(var _0x1e2979=0x0;_0x1e2979<_0x13e85e[_0x44da('0x6f','bu$1')][_0x44da('0x70','^O6D')];_0x1e2979++){_0x13e85e[_0x44da('0x71','%uxS')][_0x1e2979][_0x44da('0x72','4r3*')]=!![];_0x13e85e[_0x44da('0x73','oo]r')][_0x1e2979][_0x44da('0x26','6vyT')]=!![];}_0xaa4c3d=JSON[_0x44da('0x74','lZkF')](_0x13e85e);}if(_0x452a91[_0x44da('0x75','eAW#')](_0x3a11c0)!=-0x1){var _0x1c5b10=_0x44da('0x76','N]Hq')[_0x44da('0x4f','Md]w')]('|'),_0x4cd6bf=0x0;while(!![]){switch(_0x1c5b10[_0x4cd6bf++]){case'0':_0x13e85e[_0x44da('0x77','0b$v')][_0x44da('0x78','0b$v')]=!![];continue;case'1':_0x13e85e[_0x44da('0x21','iodi')][_0x44da('0x79','Cx2E')]=!![];continue;case'2':_0x13e85e[_0x44da('0x7a',')1H]')][_0x44da('0x7b','@Y9O')]=!![];continue;case'3':_0x13e85e[_0x44da('0x7c','Cs5d')][_0x44da('0x7d','S44B')]=!![];continue;case'4':_0xaa4c3d=JSON[_0x44da('0x7e','#1Yl')](_0x13e85e);continue;case'5':for(var _0x4a5ec3=0x0;_0x4a5ec3<_0x13e85e[_0x44da('0x7f','d)Wc')][_0x44da('0x80','[Sp3')][_0x44da('0x81','6vyT')];_0x4a5ec3++){_0x13e85e[_0x44da('0x82','UqLI')][_0x44da('0x83','Md]w')][_0x4a5ec3][_0x44da('0x84','0b$v')]=!![];_0x13e85e[_0x44da('0x85','Rm]x')][_0x44da('0x80','[Sp3')][_0x4a5ec3][_0x44da('0x86',')OGC')]=!![];}continue;}break;}}if(_0x452a91[_0x44da('0x87','g[Wf')](_0x279ef5)!=-0x1){var _0x1eb00c=_0x44da('0x88','BuRC')[_0x44da('0x89','UjcO')]('|'),_0xf884b7=0x0;while(!![]){switch(_0x1eb00c[_0xf884b7++]){case'0':_0x13e85e[_0x44da('0x6b','gECG')][_0x44da('0x24','1UR7')]=!![];continue;case'1':_0xaa4c3d=JSON[_0x44da('0x8a','%m7t')](_0x13e85e);continue;case'2':_0x13e85e[_0x44da('0x8b','$m[d')][_0x44da('0x8c','BuRC')]=!![];continue;case'3':_0x13e85e[_0x44da('0x8d','jy%O')][_0x44da('0x8e','S44B')]=0x1d8d8f773708;continue;case'4':_0x13e85e[_0x44da('0x8f','#&LA')][_0x44da('0x90','bu$1')]=_0x44da('0x91','0esI');continue;case'5':_0x13e85e[_0x44da('0x6b','gECG')][_0x44da('0x92','2p0F')]=_0x44da('0x93','jy%O');continue;}break;}}if(_0x452a91[_0x44da('0x94','4r3*')](_0x318476)!=-0x1){_0x13e85e[_0x44da('0x95','2p0F')][_0x44da('0x96','eAW#')]=0x1d8d8f773708;_0x13e85e[_0x44da('0x8f','#&LA')][_0x44da('0x97','0b$v')]=0x1;_0xaa4c3d=JSON[_0x44da('0x7e','#1Yl')](_0x13e85e);}if(_0x452a91[_0x44da('0x98','epGU')](_0xa75aba)!=-0x1){_0x13e85e[_0x44da('0x7c','Cs5d')][_0x44da('0x99','%uxS')][_0x44da('0x9a','lZkF')]=_0x44da('0x9b','UjcO');_0x13e85e[_0x44da('0x71','%uxS')][_0x44da('0x9c',')1H]')]=!![];_0xaa4c3d=JSON[_0x44da('0x74','lZkF')](_0x13e85e);}if(_0x452a91[_0x44da('0x9d','%m7t')](_0x254bad)!=-0x1){_0x13e85e[_0x44da('0x9e','0esI')][_0x44da('0x9f','pjtT')]=_0x44da('0xa0','pjtT');_0xaa4c3d=JSON[_0x44da('0xa1','9an7')](_0x13e85e);}if(_0x452a91[_0x44da('0x87','g[Wf')](_0x43495a)!=-0x1){for(var _0x1e2979=0x0;_0x1e2979<_0x13e85e[_0x44da('0xa2','4r3*')][_0x44da('0xa3','Rm]x')][_0x44da('0xa4','S44B')][_0x44da('0x70','^O6D')];_0x1e2979++){_0x13e85e[_0x44da('0xa5','1UR7')][_0x44da('0xa6','bI]B')][_0x44da('0xa7','lZkF')][_0x1e2979][_0x44da('0xa8','S44B')]=!![];_0x13e85e[_0x44da('0x85','Rm]x')][_0x44da('0xa9','[Sp3')][_0x44da('0xaa','d)Wc')][_0x1e2979][_0x44da('0xab','gECG')]=!![];}for(var _0x1e2979=0x0;_0x1e2979<_0x13e85e[_0x44da('0xac','ksFA')][_0x44da('0xad','jy%O')][_0x44da('0xae','epGU')][_0x44da('0xaf','%sq3')];_0x1e2979++){_0x13e85e[_0x44da('0x21','iodi')][_0x44da('0xb0','Cx2E')][_0x44da('0xb1','eAW#')][_0x1e2979][_0x44da('0xb2','d)Wc')]=!![];_0x13e85e[_0x44da('0x9e','0esI')][_0x44da('0xb3','UqLI')][_0x44da('0xb4','2p0F')][_0x1e2979][_0x44da('0xb5','2p0F')]=!![];}_0xaa4c3d=JSON[_0x44da('0xb6','Cs5d')](_0x13e85e);}if(_0x452a91[_0x44da('0xb7','S2Xd')](_0xb2b9da)!=-0x1){for(var _0x1e2979=0x0;_0x1e2979<_0x13e85e[_0x44da('0x7c','Cs5d')][_0x44da('0xb8','0esI')];_0x1e2979++){_0x13e85e[_0x44da('0xb9','DnAM')][_0x1e2979][_0x44da('0xba',')OGC')]=0x1;}_0xaa4c3d=JSON[_0x44da('0xbb','S2Xd')](_0x13e85e);}if(_0x452a91[_0x44da('0xbc','lZkF')](_0x370205)!=-0x1){_0xaa4c3d=_0xaa4c3d[_0x44da('0xbd','UjcO')](/"activityText":"[^"]+/g,_0x44da('0xbe','98Xq'))[_0x44da('0xbf','UqLI')](/userStatus":2/g,_0x44da('0xc0','$m[d'))[_0x44da('0xc1','4r3*')](/"endTime":\d+/g,_0x44da('0xc2',')1H]'))[_0x44da('0xc3','@Y9O')](/"free":\w+/g,_0x44da('0xc4','[Sp3'));;}$done({'body':_0xaa4c3d});;(function(_0x245955,_0x240867,_0x786614){var _0x2594b8={'wFemb':_0x44da('0xc5','Cx2E'),'GIane':function _0x423e8c(_0x446438,_0xd29e7c){return _0x446438!==_0xd29e7c;},'bmQkG':_0x44da('0xc6','6vyT'),'TmqhN':function _0x2d7962(_0x174653,_0x58055a){return _0x174653===_0x58055a;},'noCoF':_0x44da('0xc7','#&LA'),'usKYc':function _0x10d4e2(_0x165465,_0x191197){return _0x165465===_0x191197;},'EbZSP':_0x44da('0xc8','g[Wf'),'KPNZx':function _0x4c2c76(_0x5a222f,_0x253ceb){return _0x5a222f+_0x253ceb;},'IfGRL':_0x44da('0xc9','Dr*U'),'oDxtl':function _0x1bad2c(_0x4a59a3){return _0x4a59a3();},'LhSsI':_0x44da('0xca','lZkF')};_0x786614='al';try{_0x786614+=_0x2594b8[_0x44da('0xcb','BuRC')];_0x240867=encode_version;if(!(_0x2594b8[_0x44da('0xcc','jy%O')](typeof _0x240867,_0x2594b8[_0x44da('0xcd','1UR7')])&&_0x2594b8[_0x44da('0xce','g[Wf')](_0x240867,_0x2594b8[_0x44da('0xcf','jy%O')]))){if(_0x2594b8[_0x44da('0xd0','lZkF')](_0x2594b8[_0x44da('0xd1','9an7')],_0x2594b8[_0x44da('0xd2','B7zr')])){_0x245955[_0x786614](_0x2594b8[_0x44da('0xd3','%m7t')]('删除',_0x2594b8[_0x44da('0xd4','#&LA')]));}else{_0x2594b8[_0x44da('0xd5','jy%O')](_0x127d90);}}}catch(_0x1af81e){_0x245955[_0x786614](_0x2594b8[_0x44da('0xd6',')OGC')]);}}(window));function _0x127d90(_0x3793e7){var _0xd7d09f={'lZrLL':function _0x25df59(_0x33428e,_0x4689d7){return _0x33428e!==_0x4689d7;},'fDiEw':_0x44da('0xd7','Dr*U'),'oiNjh':function _0x240062(_0x4f0dda,_0x1d3d5c){return _0x4f0dda(_0x1d3d5c);},'AgCZr':function _0x1aa459(_0x5c2d3d,_0x585ca2){return _0x5c2d3d(_0x585ca2);},'OTvoK':function _0x680912(_0x4d7cc4,_0x4c2837){return _0x4d7cc4!==_0x4c2837;},'rNUDH':_0x44da('0xd8','S44B'),'EPTIt':_0x44da('0xd9','3RnZ')};function _0x5693e8(_0x52b041){var _0x32fc2a={'vVqYc':function _0x3b6fe7(_0x20ab2c,_0x390127){return _0x20ab2c!==_0x390127;},'LpYYG':_0x44da('0xda','%uxS'),'cOyLL':_0x44da('0xdb','Md]w'),'QhjTA':function _0x255cea(_0x3f69ca,_0x156567){return _0x3f69ca===_0x156567;},'pzmHb':_0x44da('0xdc','6vyT'),'sEGIb':function _0xbc31cc(_0x3450fa){return _0x3450fa();},'QOPmS':function _0x2e2707(_0x12ce3e,_0x4ef9ea){return _0x12ce3e+_0x4ef9ea;},'AgzoX':function _0x193e25(_0x4193df,_0x404926){return _0x4193df/_0x404926;},'PbBqx':_0x44da('0xdd','g[Wf'),'tAxaV':function _0x1a5959(_0x3bfd89,_0x153ccd){return _0x3bfd89===_0x153ccd;},'cioOW':function _0x5ad0f5(_0x4f4634,_0x23374){return _0x4f4634%_0x23374;},'FLkRn':function _0x2ffbb9(_0x3bf0c6,_0x7a4ee8){return _0x3bf0c6(_0x7a4ee8);}};if(_0x32fc2a[_0x44da('0xde','1UR7')](_0x32fc2a[_0x44da('0xdf','BuRC')],_0x32fc2a[_0x44da('0xe0',')1H]')])){if(_0x32fc2a[_0x44da('0xe1','ksFA')](typeof _0x52b041,_0x32fc2a[_0x44da('0xe2','9an7')])){var _0x30e428=function(){var _0x43184b={'gPkTX':function _0x243ce6(_0x25cffe,_0x3d4f60){return _0x25cffe!==_0x3d4f60;},'YKaRE':_0x44da('0xe3','1UR7')};while(!![]){if(_0x43184b[_0x44da('0xe4','^O6D')](_0x43184b[_0x44da('0xe5',')OGC')],_0x43184b[_0x44da('0xe6','d)Wc')])){debugger;}else{}}};return _0x32fc2a[_0x44da('0xe7','6vyT')](_0x30e428);}else{if(_0x32fc2a[_0x44da('0xe8','bu$1')](_0x32fc2a[_0x44da('0xe9',')1H]')]('',_0x32fc2a[_0x44da('0xea','2p0F')](_0x52b041,_0x52b041))[_0x32fc2a[_0x44da('0xeb','epGU')]],0x1)||_0x32fc2a[_0x44da('0xec','jy%O')](_0x32fc2a[_0x44da('0xed','S2Xd')](_0x52b041,0x14),0x0)){debugger;}else{debugger;}}_0x32fc2a[_0x44da('0xee','d)Wc')](_0x5693e8,++_0x52b041);}else{if(fn){var _0x3b73a5=fn[_0x44da('0xef','%sq3')](context,arguments);fn=null;return _0x3b73a5;}}}try{if(_0x3793e7){if(_0xd7d09f[_0x44da('0xf0','S2Xd')](_0xd7d09f[_0x44da('0xf1','Cs5d')],_0xd7d09f[_0x44da('0xf2','jy%O')])){_0xd7d09f[_0x44da('0xf3','MwDH')](_0x5693e8,0x0);}else{return _0x5693e8;}}else{_0xd7d09f[_0x44da('0xf4','$m[d')](_0x5693e8,0x0);}}catch(_0x15377d){if(_0xd7d09f[_0x44da('0xf5','#1Yl')](_0xd7d09f[_0x44da('0xf6','1UR7')],_0xd7d09f[_0x44da('0xf7','0esI')])){}else{_0x13e85e[_0x44da('0xf8','MwDH')][_0x44da('0xf9','DnAM')][_0x44da('0xfa','UjcO')][_0x1e2979][_0x44da('0xfb','bu$1')]=!![];_0x13e85e[_0x44da('0xfc','^O6D')][_0x44da('0xfd','eAW#')][_0x44da('0xfe','S2Xd')][_0x1e2979][_0x44da('0xff','Qq![')]=!![];}}};encode_version = 'jsjiami.com.v5';
