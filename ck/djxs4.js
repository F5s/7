/*
djxs vip

/zyuc/api/user/accountInfo

*/



var obj = JSON.parse($response.body);

obj.body.userInfo.vipInfo.vipType = 1,
obj.body.userInfo.vipInfo.vipExpire = 4811209694000,
obj.body.userInfo.vipInfo.expireDate = "2122-06-18",
obj.body.userInfo.vipInfo.content = "终身会员",
obj.body.userInfo.vipInfo.description = "2122-06-18"


$done({body: JSON.stringify(obj)});
