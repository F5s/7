/*
aiqiyyd vip

/book/monthly/products
*/



let obj = JSON.parse($response.body);
const path1 = "/monthly/products";
const path5 = "/cloudStrategy";

const path2 = "/client/store/ios/mixMultiProducts.action";
const path3 = "/monthly/popToast";
const path4 = "/member/userInfo";
const path6 = "/multi-identity.action";


if ($request.url.indexOf(path5) != -1){
	obj.monthlyMemberEndTime = "4811209694000",
	obj.isMonthlyMember = true,
	obj.memberPromotionText = "已开通",
	obj["monthlyMember"] = {
	"baseVipType": 1,
	"baseVipEndTime": 4811209694000,
	"baseVipStartTime": 1529223007000,
	"isVipExpire": false,
	"lastEndTime": 4811209694000
}
}

if ($request.url.indexOf(path1) != -1){
obj.["data"]["userInfo"] = {
    "monthlyMemberEndTime": 4811209694000,
    "monthlyHalfPrice": false,
    "isVip": 1,
    "isDiamondMonthlyMember": 1,
    "uid": 2221963779,
    "hasDutContract": false,
    "diamondVipEndTime": 4811209694000,
    "memberType": 2,
    "isMonthlyMember": 1
}
}

if ($request.url.indexOf(path2) != -1){
obj.data = "storeInfo":[{"vipType":1,"isValidVip":true,}],"userInfo":{"vipSuperscript":"http://m.iqiyipic.com/common/lego/20200507/985a0a8e8f1f4a6ea699b1b600860c2e.png","expire":0,"vipDeadline":"2122-06-18 15:08:14","isVipUser":true,"status":1}
}


if ($request.url.indexOf(path3) != -1){
obj.data.topCapacityStartTime = 1529223007000,
obj.data.monthlyStartTime = 1529223007000,
obj.data.topCapacityEndTime = 4811209694000,
obj.data.isDiamondMonthlyMember = "1",
obj.data.topCapacity = 2,
obj.data.showDiamondVipLabel = "0",
obj.data.monthlyEndTime = 4811209694000,
obj.data.isMonthlyMember = "1"
}

if ($request.url.indexOf(path4) != -1){
obj.user_info.vip_info = [{"vipType":2,"startTime":1610589472012,"endTime":4811209694000,"text":"黄金会员至 2122-06-18","order":3}],
obj.user_info.vip = [{"vipType":"1","startTime":1529223007000,"endTime":4811209694000}],
obj.user_info.type = 1,
obj.user_info.deadline = "2122-06-18"
}



if (uurl.indexOf(path6) != -1){
obj.data.vipTypeGroups = [{"numericalOrder":1,"name":"VIP会员","vipTypes":"4,1,16,","effectAll":false,"datas":[{"start":null,"expire":"2122-06-18","using":true,"autoRenew":0,"vipType":1,"iconUrl":"http://pic0.iqiyipic.com/common/lego/20200522/98b19293d84d41a580f610f61c6c7fb3.png","vipTypeName":"正在享用黄金会员权益"}]}]
}

$done({body: JSON.stringify(obj)});
