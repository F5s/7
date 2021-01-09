/*
yting vip

*/

var body = $response.body;
const path1 = "radio.cn/app";
const path2 = "radio.cn/ytsrv";
if ($request.url.indexOf(path1) != -1){
body = body.replace(/"isVip":\d*/g,'"isVip":0').replace(/"isPurchased":\d*/g,'"isPurchased":1').replace(/"isSongPurchased":\d*/g,'"isSongPurchased":1');
}
if ($request.url.indexOf(path2) != -1){
body = body.replace(/"isVip":\d*/g,'"isVip":1').replace(/"vipTime":"\d{4}-\d{2}-\d{2}"/g,'"vipTime":"2122-06-18"');
}
$done({ body });
