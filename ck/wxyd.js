/*
wxyd vip
/pay/memberCardSummary
*/


var obj = JSON.parse($response.body);
obj.startTime = 1611572535,
obj.expiredTime = 4769942399,
obj.expired = 0,
obj.isPaying = 0,
obj.permanent = 1,
obj.remainTime = 4769942399

$done({body: JSON.stringify(obj)});
