/*
lya vip

*/


const path1 = "/mobile-user/homePage";
const path2 = "/vip/check/user";


let obj = JSON.parse($response.body);
if ($request.url.indexOf(path1) != -1){
	obj.isVip = true,
	obj.vipExpireTime = 4811209694000
}

if ($request.url.indexOf(path2) != -1){
	obj.data.isVip = true
}

$done({body: JSON.stringify(obj)});