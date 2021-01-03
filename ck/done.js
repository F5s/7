/*
Unlocks by Cuttlefish 公众号：墨鱼手记

*/
var body = $response.body.replace(/"uvip":"0"/g, '"uvip":"2"').replace(/totime":"\d{4}/g, 'totime":"2129')
$done({ body });
