/*
趣视频制作VIP
https://cm.szsszykj.com/interface/GetVip.php
*/


let obj = JSON.parse($response.body);

obj.Content.end_time = "4828057694000",
obj.Content.type = 2
$done({body: JSON.stringify(obj)});
