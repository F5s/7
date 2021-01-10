/*
djxs vip

/mobile/homePage
/mobile/playlist/
/mobile/track/pay
/mobile/track/v2/baseInfo/
*/


var body = $response.body;
var uurl = $request.url;
const path1 = "/homePage";
const path2 = "/mobile/playlist";
const path3 = "/track/pay";
const path4 = "/v2/baseInfo";


if (uurl.indexOf(path1) != -1){
body = body.replace(/"isVip":false/g,'"isVip":true').replace(/"vipExpireTime":\d*/g,'"vipExpireTime":4811209694000').replace(/"vipStatus":\d/g,'"vipStatus":5');
}
if (
	uurl.indexOf(path2) != -1 ||
	uurl.indexOf(path3) != -1 ||
	uurl.indexOf(path4) != -1 
	){
body = body.replace(/"isFree":false/g,'"isFree":true').replace(/rice":\d*.\d*/g,'rice":0.0').replace(/"isAutoBuy":false/g,'"isAutoBuy":true').replace(/"hqNeedVip":false/g,'"hqNeedVip":true').replace(/"isVipFree":false/g,'"isVipFree":true').replace(/"vipFreeType":\d/g,'"vipFreeType":1');
}
$done({ body });
