var obj = JSON.parse($response.body);
if (body.indexOf("zoomerang") != -1) {
obj["subscriber"]["subscriptions"]["zoomerang.yearly"]= 
{
"is_sandbox": false,
"period_type": "active",
"billing_issues_detected_at": "2020-12-22T07:04:02Z",
"unsubscribe_detected_at": null,
"expires_date": "2121-01-07T05:20:23Z",
"grace_period_expires_date": "2121-01-07T05:20:23Z",
"original_purchase_date": "2020-12-19T05:20:24Z",
"purchase_date": "2020-12-19T05:20:23Z",
"store": "app_store"
};
obj["subscriber"]["entitlements"] = {
"pro": {
"grace_period_expires_date": "2121-01-07T05:20:23Z",
"purchase_date": "2020-12-19T05:20:23Z",
"product_identifier": "zoomerang.yearly",
"expires_date": "2121-01-07T05:20:23Z"
  }
};
}
$done({body: JSON.stringify(obj)});
