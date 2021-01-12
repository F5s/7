/*
pyxiu

*/

const path1 = "/GetMyInfo";

var obj = JSON.parse($response.body);
obj.data.is_vip = 1
if ($request.url.indexOf(path1) != -1){
obj.data.gold = 9999,
obj.data.gold2 = 9999
} else {
obj.data.end_time = 4811209694000,
obj.data.vipLevel = 3,
obj.data.eventEndText = "2122-06-18"
}

$done({body: JSON.stringify(obj)});
