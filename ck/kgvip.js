/*
kg

*/

const path1 = "/v1/get_my_info";
const path2 = "/v5/login_by_token";
const path3 = "/v1/get_login_extend_info";
const path4 = "/overseas/check";
const path5 = "/v1/get_res_privilege";

var body = $response.body;
var url = $request.url;

if(url.indexOf(path1) != -1){
	var obj = JSON.parse(body);
	obj.data.vip_type = 1;
	obj.data.star_status = 1;
	obj.data.svip_score = 1;
	obj.data.bookvip_valid = 1;
	obj.data.svip_level = 4;
	obj.data.is_star = 1;
	obj.data.m_type = 1;
	obj.data.y_type = 1;
	body = JSON.stringify(obj);
}

if(url.indexOf(path2) != -1){
	var obj = JSON.parse(body);
	obj.data.is_vip = 1;
	obj.data.vip_type = 1;
	obj.data.m_type = 1;
	obj.data.y_type = 1;
	obj.data.vip_begin_time = "2020-06-18 15:08:14";
	obj.data.vip_end_time = "2122-06-18 15:08:14";
	body = JSON.stringify(obj);
}

if(url.indexOf(path3) != -1){
	var obj = JSON.parse(body);
	obj.data.user_label.val4 = 1;
	obj.data.vipinfo = {"vip_type":1,"svip_score":1,"m_type":1,"bookvip_valid":1,"bookvip_end_time":"2122-06-18 15:08:14","y_type":1,"svip_level":4};
	obj.data.auth.star_status = 1;
	obj.data.auth.status = 1;
	body = JSON.stringify(obj);
}

if(url.indexOf(path4) != -1){
	var obj = JSON.parse(body);
	obj.info.is_special_vip = 1;
	body = JSON.stringify(obj);
}

if(url.indexOf(path5) != -1){
	var obj = JSON.parse(body);
	obj.userinfo = {"vip_type":1,"m_type":1,"m_is_old":0,"quota_remain":9999};
	body = JSON.stringify(obj);
}

$done({
	body
});
