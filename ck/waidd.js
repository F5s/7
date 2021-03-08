/*
waidd
*/

const path1 = "/user/member";
var obj = JSON.parse($response.body);
if ($request.url.indexOf(path1) != -1) {
obj.data.recharge_level = 99,
obj.data.customer_type = 3,
obj.data.is_agent = 1,
obj.data.is_member = 1,
obj.data.expire_at = "2122-06-18 15:08:14",
obj.data.remaining_days = 9999,
obj.data.if_is_agent = true
}else{
obj.data.expire = 4811209694,
obj.data.is_member = true
}

$done({body: JSON.stringify(obj)});
