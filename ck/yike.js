/*
yike

*/

var body = $response.body;
var obj = JSON.parse(body);
obj.has_purchased = 1,
obj.has_received_7dfree = 1,
obj.product_tag = 1,
obj.sign_status = 1,
obj.sign_infos[0].status = 1,
obj.product_infos[0].end_time = 4811209694,
obj.vip_infos[0].end_time = 4811209694,
body = JSON.stringify(obj);

$done({
    body
});
