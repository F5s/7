/*
yingtao vip

*/

var body = $response.body;
body = body.replace(/isAd\":\\w+/g,'isAd\":false');
body = body.replace(/"vipType\":\\w+/g,'vipType\":1');
body = body.replace(/"vipEndTime\":\\w+/g,'vipEndTime\":\"4811209694\"');
body = body.replace(/"userLevel\":\\d/g,'userLevel\":8');


$done({ body });
