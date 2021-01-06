/*
qim vip
const path1 = "/get-user-info";
const path2 = "/user/page";
const path3 = "/user/my-center";

const path3 = "/user/get-role-adv-vip-info";


*/


const path4 = "/get-role-adv-vip-info";

var obj = JSON.parse($response.body);

if ($request.url.indexOf(path4) != -1){
	obj.data.default_sex = "1",
	obj.data.on_line_type = "2",
	obj.data.rewardVideoConfig.noAdTime = "60",
	obj.data.users.isvip = "1",
	obj.data.users.time = "4811209694000",
	obj.data.users.isLifetimeVip = "1"
}else {
	obj.data.is_vip = "1"
}

$done({body: JSON.stringify(obj)});
