/*
很皮语音包

QuanX:       
https://api3.henpi.vip/app/user/get_userinfo

hostname: api3.henpi.vip
*/


var obj = JSON.parse($response.body);
obj.data.userinfo.vip_type = 1,
obj.data.userinfo.earnings = 9999,
obj.data.userinfo.vip_endtime = 4769942399,
obj.data.userinfo.money = 9199,
obj.data.userInfo.is_music_pay_member = "yes",

$done({body: JSON.stringify(obj)});