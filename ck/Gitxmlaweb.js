/*
/product/info/
/vip/check/user
*/

const path2 = "/check/user";

var obj = JSON.parse($response.body);

if ($request.url.indexOf(path2) != -1){
	obj.data.isVip = true
}else {
	obj.data.vipStatus = 3,
	obj.data.expireDate = 4811209694000,
	obj.data.expireDays = 9999,
	obj.data.autoRenew = true,
	obj.data.vipDescription = "已开通"
}

$done({body: JSON.stringify(obj)});