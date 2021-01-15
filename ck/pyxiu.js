/*
pyxiu

https://iosapi.peiyinxiu.com/Api/User/GetTools
*/

const path1 = "/GetMyInfo";

var obj = JSON.parse($response.body);
obj.data.is_vip = 1
if ($request.url.indexOf(path1) != -1){
obj.data.gold = 99999,
obj.data.gold2 = 99999
} else {
obj.data.end_time = "2122-06-18 15:08:14",
obj.data.vipLevel = 1,
obj.data.eventEndText = "2122-06-18"
}

$done({body: JSON.stringify(obj)});
