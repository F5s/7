/*
rbang vip

*/


var obj = JSON.parse($response.body);

obj.data = {"is_vip":"1","vip_expired":"4811209694","is_vip_now":true}

$done({body: JSON.stringify(obj)});
