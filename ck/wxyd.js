/*
wxyd vip
/pay/memberCardSummary
*/

const path1 = "/user/profile";
var obj = JSON.parse($response.body);

obj.startTime = 1611572535,
obj.expiredTime = 4769942399,
obj.expired = 0,
obj.isPaying = 0,
obj.permanent = 1,
obj.remainTime = 4769942399
if ($request.url.indexOf(path1) != -1){
obj.isNewDevice = true,
obj.isSubscribing = 1
}
$done({body: JSON.stringify(obj)});
