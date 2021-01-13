/*
aiqiyyd vip

HTTPS	passport.iqiyi.com		/apis/user/info.action	
HTTP	i.vip.iqiyi.com			/client/store/ios/mixMultiProducts.action
HTTPS	api-yuedu-1.iqiyi.com	/book/monthly/popToast
HTTPS	api-yuedu-1.iqiyi.com	/book/member/userInfo
HTTPS	api-yuedu-1.iqiyi.com	/book/cloudStrategy
HTTPS	api-yuedu.iqiyi.com		/book/cloudStrategy

*/



var obj = JSON.parse($response.body);
var uurl = $request.url;
const path1 = "/user/info.action";
const path2 = "/client/store/ios/mixMultiProducts.action";
const path3 = "/monthly/popToast";
const path4 = "/member/userInfo";
const path5 = "/book/cloudStrategy";

if (uurl.indexOf(path1) != -1){
obj.data.vip_list[0].level = "1",
obj.data.vip_list[0].paidSign = 1,
obj.data.vip_list[0].vipType = "1",
obj.data.vip_list[0].payType = "0",
obj.data.vip_list[0].status = "1",
obj.data.vip_list[0].type = "1",
obj.data.vip_list[0].surplus = "1",
obj.data.vip_list[0].yearExpire = 1,
obj.data.vip_list[0].deadline.t = 4811209694000,
obj.data.vip_list[0].longestDeadline.t = 4811209694000
}

if (uurl.indexOf(path2) != -1){
obj.data.storeInfo[0].vipType = 1,
obj.data.storeInfo[0].isValidVip = true,
obj.data.userInfo.expire = 0,
obj.data.userInfo.vipDeadline = "2122-06-18 15:08:14",
obj.data.userInfo.isVipUser = true,
obj.data.userInfo.status = 1
}


if (uurl.indexOf(path3) != -1){
obj.data.topCapacityEndTime = 4811209694000,
obj.data.isDiamondMonthlyMember = "1",
obj.data.memberExpireGuideText = "终身会员",
obj.data.topCapacity = 2,
obj.data.showDiamondVipLabel = "0",
obj.data.monthlyEndTime = 4811209694000,
obj.data.isMonthlyMember = "1"
}

if (uurl.indexOf(path4) != -1){
obj.user_info.vip_info[0].vipType = 2,
obj.user_info.vip_info[0].startTime = 1610513251292,
obj.user_info.vip_info[0].endTime = 4811209694000,
obj.user_info.vip_info[0].text = "黄金会员至 2122-06-18",
obj.user_info.vip[0].vipType = "1",
obj.user_info.vip[0].startTime = 1610513251292,
obj.user_info.vip[0].endTime = 4811209694000,
obj.user_info.type = 1,
obj.user_info.deadline = "2122-06-18"
}

if (uurl.indexOf(path5) != -1){
obj.monthlyMemberEndTime = "4811209694000",
obj.isMonthlyMember = true,
obj.monthlyMember.baseVipType = 1,
obj.monthlyMember.baseVipEndTime = 4811209694000,
obj.monthlyMember.baseVipStartTime = 1610513251292,
obj.monthlyMember.isVipExpire = false,
obj.monthlyMember.lastEndTime = 4811209694000
}

$done({body: JSON.stringify(obj)});
