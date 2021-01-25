/*
wxds vip
/pay/memberinfo
*/


const path1 = "/pay/memberinfo";

var obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.isMember = 1,
	obj.isAutoRenewable = 1,
	obj.startTime = 1611572535,
	obj.endTime = 4769942399,
	obj.expiresIn = 1611572535,
	obj.subscriptionPeriod = 1,
	obj.subscriptionPrice = 100,
	obj.hasPromoRight = true
}else {
	obj.userInfo.isV = 1,
	obj.type = 1,
	obj.timeWalletInfo = {"label":"你是会员·拥有无限时长","remainSeconds":0}
}

$done({body: JSON.stringify(obj)});
