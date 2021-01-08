/*
quting vip

*/



var obj = JSON.parse($response.body);
obj.Data.VipStatus = 1,
obj.Data.VipDeadline = "2121-11-11"
$done({body: JSON.stringify(obj)});
