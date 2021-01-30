/*
wxyd vip
/pay/memberCardSummary
/reader/tips
*/

const path1 = "/user/profile";
const path2 = "/pay/memberCardSummary";
const path3 = "/reader/tips";
var obj = JSON.parse($response.body);
var url = $request.url;

if (url.indexOf(path1) != -1){
obj.isNewDevice = true,
obj.isSubscribing = 1
}
if (url.indexOf(path2) != -1){
obj.startTime = 1611572535,
obj.expiredTime = 4769942399,
obj.payingRemainTime = 4769942399,
obj.isAutoRenewable = 1,
obj.autoRenewableChannel = 1,
obj.autoRenewableTime = 4769942399,
obj.totalFreeReadDay = 9999,
obj.expired = 0,
obj.isPaying = 1,
obj.permanent = 1,
obj.remainTime = 4769942399
};
if (url.indexOf(path3) != -1){
obj = {"canFreeRead":1,"readAfterPay":1,"showShareTips":0,"showLastPageShareTips":0,"vipButtonTitle":"SVIP","vipButtonSubtitle":"你正在使用终身会员"};
}
$done({body: JSON.stringify(obj)});
