/*
lya vip
http://hybrid.ximalaya.com/adopt/api/*
*/



let obj = JSON.parse($response.body);
obj.context.currentUser["isVip"] = true,
$done({body: JSON.stringify(obj)});
