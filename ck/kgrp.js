/*
kg

*/

const path1 = "/v1/get_goods";
const path2 = "/v1/get_res_privilege";
const path3 = "/v3/mobile_splash_sort";

var body = $request.body;
var url = $request.url;


if (url.indexOf(path1) != -1 ||
	url.indexOf(path2) != -1 ) {
	body = body.replace(/vip":\d/,'vip":1');
}

if (url.indexOf(path3) != -1 ) {
	body = body.replace(/val4":\d/,'val4":1');
	body = body.replace(/vip_type":\d/g,'vip_type":1');
	body = body.replace(/m_type":\d/g,'m_type":1');
}

$done({
	body
});
