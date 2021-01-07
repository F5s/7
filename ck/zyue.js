/*
zyue vip

*/


const path1 = "/user/mytab";
const path2 = "/free/userstatus";

const uurl = $request.url;

var obj = JSON.parse($response.body);

if (uurl.indexOf(path1) != -1){
	obj.body.userInfo.isSvip = true,
	obj.body.userInfo.isVip = true,
	obj.body.userInfo.vipDesc = "终身会员",
	obj.body.vip.expireTime = "2121-01-06 06:52:06",
	obj.body.vipGuide.svipStatus = 1,
	obj.body.vipGuide.vipStatus = 1
}
if (uurl.indexOf(path2) != -1){
	obj.body.vipInfo.vipType = 1,
	obj.body.vipInfo.vipExpire = 4811209694000,
	obj.body.vipInfo.expireDate = "2121-01-06 06:52:06"
}

$done({body: JSON.stringify(obj)});
