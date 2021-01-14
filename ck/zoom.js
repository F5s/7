/*
zoome vip

/v1/subscribers
/apiv2/v2/user/update
/apiv2/v2/user/profile
*/



var obj = JSON.parse($response.body);
var uurl = $request.url;
const path1 = "/user/update";
const path2 = "/user/profile";
const path2 = "/v1/subscribers";


if (uurl.indexOf(path1) != -1 ||
	uurl.indexOf(path2) != -1 ){
obj.result.is_pro = true,
obj.result.pro_expiry_date = "4811209694000",
}

if (uurl.indexOf(path3) != -1){
obj.subscriber.entitlements.pro.expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.entitlements.pro.grace_period_expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions.zoomerang.yearly.grace_period_expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions.zoomerang.yearly.expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions.zoomerang.yearly.period_type = "yearly",
}

$done({body: JSON.stringify(obj)});
