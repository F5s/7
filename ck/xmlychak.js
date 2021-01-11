/*
djxs vip

/starwar/task/listen/serverTime
/vip/check/user/287169847

*/
var body = $response.body.replace(/"isVip":false/g,'"isVip":true');
$done({ body });
