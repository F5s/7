/*
lya vip

*/


const path1 = "/mobile-user/homePage";
const path2 = "/vip/check/user";


var obj = JSON.parse($response.body);
if ($request.url.indexOf(path1) != -1){
	obj.userGrade = 3,
	obj.isVip = true,
	obj.xiaoyaGrade = 3,
	obj.vipStatus = 5,
	obj.userTitle = "秀才",
	obj.vipLevel = 3,
	obj.xiaoyaGradeName = "秀才1级",
	obj.vipExpireTime = 4811209694000
}

if ($request.url.indexOf(path2) != -1){
	obj.data.isVip = true
}

$done({body: JSON.stringify(obj)});