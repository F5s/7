/*
rbang vip

*/


var obj = JSON.parse($response.body);

	obj.data.is_vip_now = true,
	obj.data.vip_expired = 4811209694,
	obj.data.is_vip = 1

$done({body: JSON.stringify(obj)});