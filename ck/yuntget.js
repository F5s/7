/*
yting vip

*/


const path1 = "/appUser/getUserInfo";

var obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.object.baseInfo.isVip = 1,
	obj.object.baseInfo.user_type = 3,
	obj.object.baseInfo.vipTime = "2122-06-18"
}else {
	obj.isSubscribe = 1,
	obj.isPurchased = 1,
	obj.isExpired = 0,
	obj.expireTime = 4811209694000,
	obj.expireDate = 4811209694000,
	obj.expire = 2,
	obj.isVip = 1,

	obj.songInfo.needPay = 0,
	obj.songInfo.isPurchased = 1,
	obj.songInfo.isExpired = 0,
	obj.songInfo.expireTime = 4811209694000,
	obj.songInfo.expireDate = 4811209694000,
	obj.songInfo.expire = 2,
	obj.songInfo.isVip = 1,
	obj.songInfo.songVirtualPrice = 0.00,
	obj.songInfo.songNeedPay = 0,
	obj.songInfo.isSongPurchased = 1
}

$done({body: JSON.stringify(obj)});
