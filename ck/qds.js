/*
qds
*/

var obj = JSON.parse($response.body);
obj.data.is_buy = 1

$done({body: JSON.stringify(obj)});
