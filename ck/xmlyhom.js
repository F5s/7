/*
lya vip
https://mobile.ximalaya.com/mobile-user/homePage?uid=284930554&date=20210102&playDuration=0&timestamp=1609602027000&coinSwitch1=false
*/



let obj = JSON.parse($response.body);
obj.isVip = true,
obj.userTitle = "大圣人",
obj.vipLevel = 5,
obj.xiaoyaGradeName = "大圣人99级",
obj.vipExpireTime = 4811209694000
$done({body: JSON.stringify(obj)});
