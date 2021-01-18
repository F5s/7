/*
lpds


*/

var obj = JSON.parse($response.body);
obj.result.vip_type = 1,
obj.result.vip_grade = 1,
obj.result.vip_end_time = "2121-01-01",
obj.result.is_vip = 1,
obj.result.permanent_vip = 1

$done({body: JSON.stringify(obj)});
