/*
lya vip

*/



var obj = JSON.parse($response.body);

	obj.userGrade = 3,
	obj.isVip = true,
	obj.xiaoyaGrade = 3,
	obj.vipStatus = 5,
	obj.userTitle = "秀才",
	obj.vipLevel = 3,
	obj.vipExpireTime = 4811209694000

$done({body: JSON.stringify(obj)});
