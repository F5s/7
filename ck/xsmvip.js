/*
xsm vip
/cosleep/user/info
*/



var obj = JSON.parse($response.body);

obj.data.is_vip = 1,
obj.data.shell_count_total = 9999,
obj.data.status = 2,
obj.data.point_expires_time = 4811209694,
obj.data.vip_expires = 4811209694,
obj.data.have_vip = 1,
obj.data.visitor.is_vip = 1,
obj.data.visitor.vip_expires = 4811209694,
obj.data.visitor.shell_count_recharge = "9999.99",
obj.data.visitor.shell_count_total = "9999.99",

$done({body: JSON.stringify(obj)});
