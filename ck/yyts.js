/*
yyts vip
/user/GetUserInfo.json
/user/GetSitePackageOrderInfo.json
*/


const path1 = "/user/GetUserInfo";
var obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.userInfo.payType = 12,
	obj.userInfo.memberType = 1,
	obj.userInfo.endDate = "4769942399",
	obj.userInfo.startDate = "1611572535",
	obj.userInfo.isMember = true,
	obj.userInfo.professional = "1"
}else {
	obj.packageOrderStatus.validTime = "2121-01-01T00:00:00"
}
