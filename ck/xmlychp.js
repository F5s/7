/*
djxs vip

*/


const path1 = "/others/ca/homePage";
const path2 = "/v1/homePage";
const path3 = "/payable/order";

const uurl = $request.url;

var obj = JSON.parse($response.body);

if (uurl.indexOf(path3) != -1){
	obj.price = 0.00,
	obj.discountedPrice = 0.00,
	obj.isFree = true,
	obj.balanceAmount = 99999.00,
	obj.albumIsAuthorized = true,
	obj.copyrightExpired = true
}

if (uurl.indexOf(path1) != -1){
	obj.vipExpireTime = 4811209694000
}

if (uurl.indexOf(path2) != -1){
	obj.isVerified = true,
	obj.isVip = true,
	obj.anchorGrade = 11,
	obj.userGrade = 5,
	obj.xiaoyaGrade = 5,
	obj.verifyType = 2,
	obj.vipExpireTime = 4811209694000
}

$done({body: JSON.stringify(obj)});
