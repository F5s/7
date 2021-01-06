/*
djxs vip


*/


const path4 = "/public/index";

var obj = JSON.parse($response.body);

if ($request.url.indexOf(path4) != -1){
	obj.body.cardInfo.title = "特权生效中",
	obj.body.cardInfo.desc = "2121-01-06 06:52:06到期",
	obj.body.vipInfo.vipType = 1,
	obj.body.vipInfo.vipExpire = 4811209694000
}else {
	obj.body.userInfo.vipInfo.vipType = 1,
	obj.body.userInfo.vipInfo.vipExpire = 4811209694.000,
	obj.body.userInfo.vipInfo.expireDate = "2122-06-18",
	obj.body.userInfo.vipInfo.content = "特权到期：2122-06-18",
	obj.body.vipBanner.desc = "2122-06-18到期"
}

$done({body: JSON.stringify(obj)});
