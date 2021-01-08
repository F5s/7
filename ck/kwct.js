/*
quanmin vip


*/

var ubody = $response.body;
const uurl = $request.url;
const path1 = "/kuwo.cn/a.p";
const path2 = "/user/info";
const path3 = "/a.p?";
const path4 = "/user/isBuyVip";
const path5 = "/user/vip";

if (uurl.indexOf(path3) != -1){
ubody = $response.body.replace(/packs\":\\{.*?\\}/g, "packs\":{\"type\":2,\"end\":4811209694,\"period\":111,\"bought_vip\":1,\"bought_vip_end\":4811209694}");
} else if (uurl.indexOf(path1) != -1){
ubody = $response.body.replace(/info\":\\{.*?\\}/g, "info\":{\"limitfree\":1,\"playable\":1,\"downable\":1,\"playright\":1,\"downright\":1,\"policytype\":1,\"policy\":1}");
} else {

var obj = JSON.parse(ubody);

if (uurl.indexOf(path2) != -1){
obj.data.vipType = 1,
obj.data.vipExpires = 4811209694,
obj.data.autoRenewal = true
}

if (uurl.indexOf(path4) != -1){
obj.data.isbuyVip= 1
}

if (uurl.indexOf(path5) != -1){
obj.data.luxAutoPayUser = 1,
obj.data.vipExpire = 4811209694,
obj.data.vipOverSeasExpire = 4811209694,
obj.data.vipLuxuryExpire = 4811209694,
obj.data.isYearUser = 1,
obj.data.vip3Expire = 4811209694,
obj.data.vipmAutoPayUser = 1,
obj.data.experienceExpire = 4811209694,
obj.data.vip3Expire = 4811209694
}

ubody=JSON.stringify(obj);
}
$done({ubody});
