/*
mubu解锁Pro
/user/current_user
*/

let obj = JSON.parse($response.body);

obj.data.level = 2,
obj.data.vipEndDate = "21211230"
$done({body: JSON.stringify(obj)});
