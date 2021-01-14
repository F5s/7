/*
zoome vip

/v1/subscribers
/apiv2/v2/user/update
/apiv2/v2/user/profile
*/



var obj = JSON.parse($response.body);

obj.subscriber = {"first_seen":"2020-01-01T01:01:01Z","original_application_version":"900","management_url":"itms-apps://apps.apple.com/account/subscriptions","subscriptions":{"blocker.ios.subscription.yearly":{"is_sandbox":true,"period_type":"yearly","expires_date":"2122-06-18T15:08:14Z","grace_period_expires_date":"2020-01-01T01:01:01Z","original_purchase_date":"2020-01-01T01:01:01Z","purchase_date":"2122-06-18T15:08:14Z","store":"app_store"}},"entitlements":{"premium":{"grace_period_expires_date":"2122-06-18T15:08:14Z","purchase_date":"2020-01-01T01:01:01Z","product_identifier":"blocker.ios.subscription.yearly","expires_date":"2122-06-18T15:08:14Z"}},"original_purchase_date":"2020-01-01T01:01:01Z","original_app_user_id":"0099LK05-2799-489J-09CD-D9IJSEB09876","last_seen":"2122-06-18T15:08:14Z"},
obj.result.is_pro = true,
obj.result.pro_expiry_date = "4811209694000"

$done({body: JSON.stringify(obj)});
