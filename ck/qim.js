/*
qim vip
const path1 = "/get-user-info";
const path2 = "/user/page";
const path3 = "/user/my-center";

https://xiaoshuo.wtzw.com/api/v1/user/get-role-adv-vip-info

if (
	url.indexOf(path1) != -1 ||
	url.indexOf(path2) != -1 ||
	url.indexOf(path3) != -1 
	){
	obj.data.is_vip = 1
}
*/


const path4 = "/get-role-adv-vip-info";

var obj = JSON.parse($response.body);

if ($request.url.indexOf(path4) != -1){
	obj.data.users.isvip = 1,
	obj.data.users.time = 4811209694000,
	obj.data.users.isLifetimeVip = 1
}else {
	obj.data.is_vip = 1
}

$done({body: JSON.stringify(obj)});
