/*
djxs vip

/mobile/homePage/?uid=
*/

var body = $response.body.replace(/"isVip":false/g,'"isVip":true').replace(/"vipExpireTime":\d*/g,'"vipExpireTime":4811209694000').replace(/"vipStatus":\d/g,'"vipStatus":3');


$done({ body });
