/*
zoome vip

/v1/subscribers
/apiv2/v2/user/update
/apiv2/v2/user/profile
*/



var obj = JSON.parse($response.body);
const path1 = "/subscribers";


if ($request.url.indexOf(path1) != -1){
obj.subscriber.entitlements.pro.expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.entitlements.pro.grace_period_expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions["zoomerang.yearly"].grace_period_expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions["zoomerang.yearly"].expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions["zoomerang.yearly"].unsubscribe_detected_at = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions["zoomerang.yearly"].period_type = "yearly",
obj.subscriber.subscriptions["zoomerang.yearly.sale35"].billing_issues_detected_at = "2020-12-22T07:04:02Z",
obj.subscriber.subscriptions["zoomerang.yearly.sale35"].grace_period_expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions["zoomerang.yearly.sale35"].expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions["zoomerang.yearly.sale35"].unsubscribe_detected_at = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions["zoomerang.yearly.sale35"].period_type = "yearly"
} else {
obj.result.is_pro = true,
obj.result.pro_expiry_date = "4811209694000"
}

$done({body: JSON.stringify(obj)});
