/*
CaiYun Weather (ColorWeather) unlock Vip

QX 1.0.0:
^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name\=weather url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/ColorWeather.js

MitM = biz.caiyunapp.com
let obj = JSON.parse($response.body);

    obj.result.vip_expired_at = 4075798974,
    obj.result.is_xy_vip = true,
    obj.result.xy_vip_expire = 0,
    obj.result.is_vip = true

$done({body: JSON.stringify(obj)});
*/

var _0xe0e0=["\x62\x6F\x64\x79","\x70\x61\x72\x73\x65","\x78\x79\x5F\x76\x69\x70\x5F\x65\x78\x70\x69\x72\x65","\x72\x65\x73\x75\x6C\x74","\x69\x73\x5F\x76\x69\x70","\x76\x69\x70\x5F\x65\x78\x70\x69\x72\x65\x64\x5F\x61\x74","\x69\x73\x5F\x78\x79\x5F\x76\x69\x70","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];var body=$response[_0xe0e0[0]];var obj=JSON[_0xe0e0[1]](body);obj[_0xe0e0[3]][_0xe0e0[2]]= 4828057694000;obj[_0xe0e0[3]][_0xe0e0[4]]= true;obj[_0xe0e0[3]][_0xe0e0[5]]= 4828057694000;obj[_0xe0e0[3]][_0xe0e0[6]]= true;body= JSON[_0xe0e0[7]](obj);$done({body})
