/*
quanmin vip

*/


const path1 = "/center/index";

var obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.data.ad.ad_style = 1,
	obj.data.ad.ad_state = 1,
	obj.data.ad.ad_end_datetime = "2122-01-01 23:59:59",
	obj.data.ad.ad_tips = "已开通"
}else {
	obj.data.ad_style = 1,
	obj.data.ad_state = 1,
	obj.data.ad_end_datetime = "2122-01-01 23:59:59",
	obj.data.ad_tips = "已开通"
}

$done({body: JSON.stringify(obj)});
