/*
https://api.rr.tv/user/profile
https://api.rr.tv/v3plus/medal/getAllMedalDetailWithPiece
https://api.rr.tv/v3plus/user/detail
https://api.rr.tv/user/privilege/list
https://api.rr.tv/ad/getAll
https://api.rr.tv/watch/v4/priority_video_quality/get_priority_video_quality_config?seasonId=34896
https://api.rr.tv/rrtv-video/v4plus/season/detail?seasonId=34896&token=rrtv-885a582ff8eecbc05718494cc7d3c39021595579
*/

const path1 = "/user/profile";
//const path2 = "/user/msgCount";
//const path3 = "/subscriptions/season";
const path4 = "/getAllMedalDetailWithPiece";
const path5 = "/user/detail";
const path6 = "/user/privilege/list";
const path7 = "/ad/getAll";
const path8 = "/get_priority_video_quality_config";
const path9 = "/rrtv-video/v4plus/season/detail";

var body = $response.body;
var url = $request.url;

if (url.indexOf(path1) != -1) {
	var obj = JSON.parse(body);
	obj.data.user.hasSignIn = true,
	obj.data.user.vipMedal = 30,
	obj.data.user.isConfirmed = true,
	obj.data.user.actorCount = 19,
	obj.data.user.achievementCount = 19,
	obj.data.user.newUser = true
	obj.data.user.privilegeList = [
	{
        "id": 1,
        "effectObject": "video",
        "action": "play",
        "function": "originalPainting",
        "func": "originalPainting",
        "description": "解锁原画",
        "icon": "jiesuoyuanhua",
        "endTime": 4811209694000
    },
    {
        "id": 4,
        "effectObject": "video",
        "action": "play",
        "function": "noLimit",
        "func": "noLimit",
        "description": "看剧无限制",
        "icon": "kanjuwuxianzhi",
        "endTime": 4811209694000
    },
    {
        "id": 23,
        "effectObject": "video",
        "action": "play",
        "function": "noAd",
        "func": "noAd",
        "description": "看剧无广告",
        "icon": "kanjuwuguanggao",
        "endTime": 4811209694000
    },
    {
        "id": 43,
        "effectObject": "danmu",
        "action": "send",
        "function": "superBarrageBlue",
        "func": "superBarrageBlue",
        "description": "超级弹幕",
        "icon": "chaojidanmu",
        "endTime": 4811209694000
    },
    {
        "id": 46,
        "effectObject": "video",
        "action": "play",
        "function": "vipVideo",
        "func": "vipVideo",
        "description": "勋章专享剧集",
        "icon": "zhuanxiangjuji",
        "endTime": 4811209694000
    },
    {
        "id": 45,
        "effectObject": "mall",
        "action": "sale",
        "function": "mallDiscount",
        "func": "mallDiscount",
        "description": "龙醇商城九折",
        "icon": "longchunshangcheng",
        "endTime": 4811209694000
    },
    {
        "id": 37,
        "effectObject": "growth",
        "action": "play",
        "function": "0.4",
        "func": "0.4",
        "description": "看剧经验+40%",
        "icon": "jingyanzhijiacheng",
        "endTime": 4811209694000
    },
    {
        "id": 25,
        "effectObject": "nickName",
        "action": "show",
        "function": "nameHighLight",
        "func": "nameHighLight",
        "description": "高亮昵称",
        "icon": "gaoliangnicheng",
        "endTime": 4811209694000
    },
    {
        "id": 24,
        "effectObject": "comment",
        "action": "write",
        "function": "highLight",
        "func": "highLight",
        "description": "高亮评论回复",
        "icon": "https://img.rr.tv/static/images/20170926/HighLigthComment@2x.png",
        "endTime": 4811209694000
    },
    {
        "id": 20,
        "effectObject": "article",
        "action": "write",
        "function": "highLight",
        "func": "highLight",
        "description": "高亮发帖",
        "icon": "gaoliangfatie",
        "endTime": 4811209694000
    }];
    body = JSON.stringify(obj);
}

if (url.indexOf(path4) != -1) {
	body = body.replace(/durationDays":\d+/g,'durationDays":9999');
	body = body.replace(/activity":false/g,'activity":true');
	body = body.replace(/beginTime":null/g,'beginTime":1612085725541');
	body = body.replace(/endTime":null/g,'endTime":4811209694000');
	body = body.replace(/assembly":false/g,'assembly":true');
}

if (url.indexOf(path5) != -1) {
	var obj = JSON.parse(body);
	obj.data.user.userType = 1;
	body = JSON.stringify(obj);
}

if (url.indexOf(path6) != -1) {
	var obj = JSON.parse(body);
	obj.data = [
	{
        "id": 1,
        "effectObject": "video",
        "action": "play",
        "function": "originalPainting",
        "func": "originalPainting",
        "description": "解锁原画",
        "icon": "jiesuoyuanhua",
        "endTime": 4811209694000
    },
    {
        "id": 4,
        "effectObject": "video",
        "action": "play",
        "function": "noLimit",
        "func": "noLimit",
        "description": "看剧无限制",
        "icon": "kanjuwuxianzhi",
        "endTime": 4811209694000
    },
    {
        "id": 23,
        "effectObject": "video",
        "action": "play",
        "function": "noAd",
        "func": "noAd",
        "description": "看剧无广告",
        "icon": "kanjuwuguanggao",
        "endTime": 4811209694000
    },
    {
        "id": 43,
        "effectObject": "danmu",
        "action": "send",
        "function": "superBarrageBlue",
        "func": "superBarrageBlue",
        "description": "超级弹幕",
        "icon": "chaojidanmu",
        "endTime": 4811209694000
    },
    {
        "id": 46,
        "effectObject": "video",
        "action": "play",
        "function": "vipVideo",
        "func": "vipVideo",
        "description": "勋章专享剧集",
        "icon": "zhuanxiangjuji",
        "endTime": 4811209694000
    },
    {
        "id": 45,
        "effectObject": "mall",
        "action": "sale",
        "function": "mallDiscount",
        "func": "mallDiscount",
        "description": "龙醇商城九折",
        "icon": "longchunshangcheng",
        "endTime": 4811209694000
    },
    {
        "id": 37,
        "effectObject": "growth",
        "action": "play",
        "function": "0.4",
        "func": "0.4",
        "description": "看剧经验+40%",
        "icon": "jingyanzhijiacheng",
        "endTime": 4811209694000
    },
    {
        "id": 25,
        "effectObject": "nickName",
        "action": "show",
        "function": "nameHighLight",
        "func": "nameHighLight",
        "description": "高亮昵称",
        "icon": "gaoliangnicheng",
        "endTime": 4811209694000
    },
    {
        "id": 24,
        "effectObject": "comment",
        "action": "write",
        "function": "highLight",
        "func": "highLight",
        "description": "高亮评论回复",
        "icon": "https://img.rr.tv/static/images/20170926/HighLigthComment@2x.png",
        "endTime": 4811209694000
    },
    {
        "id": 20,
        "effectObject": "article",
        "action": "write",
        "function": "highLight",
        "func": "highLight",
        "description": "高亮发帖",
        "icon": "gaoliangfatie",
        "endTime": 4811209694000
    }];
	body = JSON.stringify(obj);
}

if (url.indexOf(path7) != -1) {
	var obj = JSON.parse(body);
	obj.data.adList = [];
	body = JSON.stringify(obj);
}

if (url.indexOf(path8) != -1) {
	body = body.replace(/canPlay":false/g,'canPlay":true');
	body = body.replace(/canShowVip":true/g,'canShowVip":false');
}

if(url.indexOf(path9) != -1){
	var obj = JSON.parse(body);
	obj.data['season']['feeMode'] = 'restriction';
	body = JSON.stringify(obj);
}


$done({
	body
});
