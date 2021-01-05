/*
qim vip
https://xiaoshuo.wtzw.com/api/v1/user/get-user-info
https://xiaoshuo.wtzw.com/api/v1/user/page?

https://xiaoshuo.wtzw.com/api/v1/user/get-role-adv-vip-info

*/

const path1 = "/get-user-info";
const path2 = "/user/page";
const path3 = "/get-role-adv-vip-info";

const url = $request.url;

var obj = JSON.parse($response.body);

if (
	url.indexOf(path1) != -1 ||
	url.indexOf(path2) != -1 
	){
	obj.data.is_vip = 1
}

if ($request.url.indexOf(path3) != -1){
	obj.data.users.isvip = 1,
	obj.data.users.time = 4811209694000,
	obj.data.users.isLifetimeVip = 1
}

$done({body: JSON.stringify(obj)});
