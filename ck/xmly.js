/*
lya vip

*/



let obj = JSON.parse($response.body);
obj.userGrade = 3,
obj.vipExpireTime = 4811209694000,
obj.isVip = true,
obj.xiaoyaGrade = 3,
obj.vipStatus = 5
$done({body: JSON.stringify(obj)});
