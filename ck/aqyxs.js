/*
aiqiyyd vip

http://paopao.iqiyi.com/apis/e/paopao/list_improve.action
https://api-yuedu.iqiyi.com/book/cloudStrategy
*/



let obj = JSON.parse($response.body);
const path1 = "list_improve.action";
const path2 = "cloudStrategy";


if ($request.url.indexOf(path1) != -1){
	obj.data.userinfo.isvip = 1,
	obj.data.userinfo.realVip = 1,
	obj.data.userinfo.vipLevel = 2
}

if ($request.url.indexOf(path2) != -1){
	obj.monthlyMemberEndTime = "4811209694000",
	obj.isMonthlyMember = true,
	obj.monthlyMember = {
	"baseVipType": 2,
	"baseVipEndTime": 4811209694000,
	"baseVipStartTime": 1529223007000,
	"isVipExpire": true,
	"lastEndTime": 4811209694000
	}
}

$done({body: JSON.stringify(obj)});
