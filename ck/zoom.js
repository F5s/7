/*
zoome vip

/v1/subscribers
/apiv2/v2/user/update
/apiv2/v2/user/profile
*/



var obj = JSON.parse($response.body);
const path1 = "receipts";


if ($request.url.indexOf(path1) != -1){
obj.subscriber.entitlements.pro.expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.entitlements.pro.grace_period_expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions["blocker.ios.subscription.yearly"].grace_period_expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions["blocker.ios.subscription.yearly"].expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions["blocker.ios.subscription.yearly"].unsubscribe_detected_at = "2122-06-18T15:08:14Z",
obj.subscriber.subscriptions["blocker.ios.subscription.yearly"].period_type = "yearly",
obj.subscriber.subscriptions["blocker.ios.subscription.yearly"].is_sandbox = true,
obj.subscriber.entitlements.premium.grace_period_expires_date = "2122-06-18T15:08:14Z",
obj.subscriber.entitlements.premium.expires_date = "2122-06-18T15:08:14Z"
} else {
obj.result.is_pro = true,
obj.is_promocode_active : true,
obj.result.pro_expiry_date = "4811209694000"
}

$done({body: JSON.stringify(obj)});
