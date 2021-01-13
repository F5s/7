/*
aiqiyyd vip

HTTPS	passport.iqiyi.com	/apis/user/info.action	
HTTP	i.vip.iqiyi.com	/client/store
HTTPS	api-yuedu-1.iqiyi.com	/book/monthly/popToast
HTTPS	api-yuedu-1.iqiyi.com	/book/member/userInfo
HTTPS	api-yuedu-1.iqiyi.com	/book/cloudStrategy
HTTPS	api-yuedu.iqiyi.com		/book/cloudStrategy

*/



var obj = JSON.parse($response.body);
const path1 = "/user/info.action";
const path2 = "/client/store";
const path3 = "/monthly/popToast";
const path4 = "/member/userInfo";
const path5 = "/book/cloudStrategy";

if ($request.url.indexOf(path1) != -1){
obj.data.vip_list[0].level = 4,
obj.data.vip_list[0].paidSign = 4,
obj.data.vip_list[0].vipType = 4,
obj.data.vip_list[0].payType = 4,
obj.data.vip_list[0].status = 4,
obj.data.vip_list[0].type = 4,
obj.data.vip_list[0].surplus = 4,
obj.data.vip_list[0].yearExpire = 4,
obj.data.vip_list[0].deadline.t = 4811209694000,
obj.data.vip_list[0].longestDeadline.t = 4811209694000
}

if ($request.url.indexOf(path2) != -1){
obj.data.storeInfo[0].vipType = 4,
obj.data.storeInfo[0].isValidVip = true,
obj.data.userInfo.expire = 0,
obj.data.userInfo.vipDeadline = "2122-06-18 15:08:14",
obj.data.userInfo.isVipUser = true,
obj.data.userInfo.status = 4
}


if ($request.url.indexOf(path3) != -1){
obj.data.topCapacityEndTime = 4811209694000,
obj.data.isDiamondMonthlyMember = "4",
obj.data.memberExpireGuideText = "终身会员",
obj.data.topCapacity = 4,
obj.data.showDiamondVipLabel = "1",
obj.data.monthlyEndTime = 4811209694000,
obj.data.isMonthlyMember = "1"
}

if ($request.url.indexOf(path4) != -1){
obj.user_info.vip_info[0].vipType = 4,
obj.user_info.vip_info[0].startTime = 1610513251292,
obj.user_info.vip_info[0].endTime = 4811209694000,
obj.user_info.vip_info[0].text = "星钻会员至 2122-06-18",
obj.user_info.vip[0].vipType = "4",
obj.user_info.vip[0].startTime = 1610513251292,
obj.user_info.type = 4,
obj.user_info.deadline = "2122-06-18"
}

if ($request.url.indexOf(path5) != -1){
obj.monthlyMemberEndTime = 4811209694000,
obj.isMonthlyMember = true,
obj.monthlyMember.baseVipType = 4,
obj.monthlyMember.baseVipEndTime = 4811209694000,
obj.monthlyMember.baseVipStartTime = 1610513251292,
obj.monthlyMember.isVipExpire = false,
obj.monthlyMember.lastEndTime = 4811209694000
}

$done({body: JSON.stringify(obj)});
