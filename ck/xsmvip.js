/*
xsm vip
/cosleep/user/info
*/



var obj = JSON.parse($response.body);

obj.data.is_vip = 1,
obj.data.point_expires_time = 4811209694,
obj.data.vip_expires = 4811209694,
obj.data.have_vip = 1,
obj.data.visitor.is_vip = 1,
obj.data.visitor.vip_expires = 4811209694,

$done({body: JSON.stringify(obj)});
