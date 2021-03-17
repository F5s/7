/*
qds
*/

var obj = JSON.parse($response.body);
if (obj.data.is_buy != 1) {
obj.data.is_buy = 1,
obj.data.subscribe_price = "0.00",
obj.data.resource.is_free = 1,
obj.data.resource.detail[0].content = obj.data.resource.detail[0].sub_content
}


$done({body: JSON.stringify(obj)});

