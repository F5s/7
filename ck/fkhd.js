/*
fkhd
*/

var obj = JSON.parse($response.body);
obj..result.planInfo.is_vip = 1,
obj.result.planInfo.buy_status = "1"

$done({body: JSON.stringify(obj)});
