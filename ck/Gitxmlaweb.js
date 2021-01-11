/*
/business-vip-presale-core-web/product/info/ts
/vip/v4/channel
*/


var obj = JSON.parse($response.body);
	obj.data.vipStatus = 3,
	obj.data.expireDate = 4811209694000,
	obj.data.expireDays = 9999,
	obj.data.autoRenew = true,
	obj.data.vipDescription = "已开通"

$done({body: JSON.stringify(obj)});
