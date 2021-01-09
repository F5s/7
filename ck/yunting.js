/*
yting vip

*/

var body = $response.body.replace(/"isVip":\d*/g,'"isVip":1').replace(/"vipTime":"\d{4}-\d{2}-\d{2}"/g,'"vipTime":"2122-06-18"').replace(/"expireTime":\d*/g,'"expireTime":4811209694000').replace(/"expireDate":null/g,'"expireDate":4811209694000');
$done({ body });
