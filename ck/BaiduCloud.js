/*
Baidu netdisc unlocks online video play speed.
Key data from thor filter

*/

const path1 = "/user/info";
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1) {
    obj.user_info.is_vip = 0,
    obj.user_info.is_svip = 1,
    obj.user_info.is_first_charge_svip = 1,
} else {
    obj.product_infos = [{"product_id":"","start_time":1613591733,"end_time":4811209694,"buy_time":0,"cluster":"svip","detail_cluster":"svip","auto_upgrade_to_svip":0,"product_name":"vip2_1y","status":0,"function_num":0,"buy_description":"","product_description":"超级会员"}],
    obj.reminder = {"reminderWithContent":{},"advertiseContent":{}},
    obj.reminder.vip.nextState = "normal",
    obj.current_product = {"cluster":"svip","detail_cluster":"svip","product_type":"svip2_nd"},
    obj.level_info = {"current_value":0,"current_level":1,"history_value":0,"history_level":0},
    obj.current_product_v2 = {"cluster":"svip","detail_cluster":"svip","product_type":"svip2_nd"},
}
$done({body: JSON.stringify(obj)});
