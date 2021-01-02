/*
lya vip
http://m.ximalaya.com/vip/check/user/284930554
*/



let obj = JSON.parse($response.body);
obj.data["isVip"] = true
$done({body: JSON.stringify(obj)});
