/*
qds
*/

var obj = JSON.parse($response.body);
obj.data.is_buy = 1,
obj.data.subscribe_price = "0.00",
obj.data.resource.is_free = 1

$done({body: JSON.stringify(obj)});

