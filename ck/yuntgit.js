/*
yting vip

*/

const path1 = "/appUser/getUserInfo";

var body = $response.body.replace(/"isVip":\d*/g,'"isVip":0').replace(/"isPurchased":\d*/g,'"isPurchased":1').replace(/"isSongPurchased":\d*/g,'"isSongPurchased":1');

if ($request.url.indexOf(path1) != -1){
var obj = JSON.parse($response.body);
	obj.object.baseInfo.isVip = 1,
	obj.object.baseInfo.user_type = 3,
	obj.object.baseInfo.vipTime = "2122-06-18"
body = JSON.stringify(obj);
}
$done({ body });