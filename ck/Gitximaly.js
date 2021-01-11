/*
djxs vip

/mobile/homePage/?uid=
*/

var body = $response.body.replace(/"isVip":false/g,'"isVip":true').replace(/"vipExpireTime":\d*/,'"vipExpireTime":4811209694000').replace(/"vipStatus":\d/,'"vipStatus":5').replace(/"mobileLoginable":false/,'"mobileLoginable":true').replace(/"userGrade":\d/,'"userGrade":3');


$done({ body });
