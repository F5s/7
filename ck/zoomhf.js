let obj = JSON.parse($response.body);
obj["subscriber"]["subscriptions"] = 
"zoomerang.yearly":{
"is_sandbox": false,
"period_type": "active",
"billing_issues_detected_at": "2020-12-22T07:04:02Z",
"unsubscribe_detected_at": null,
"expires_date": "2121-01-07T05:20:23Z",
"grace_period_expires_date": "2121-01-07T05:20:23Z",
"original_purchase_date": "2020-12-19T05:20:24Z",
"purchase_date": "2020-12-19T05:20:23Z",
"store": "app_store"
},
"blocker.ios.subscription.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2030-01-01T01:01:01Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2020-01-01T01:01:01Z",
        "period_type": "trial",
        "purchase_date": "2020-01-01T01:01:01Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      };
obj["subscriber"]["entitlements"] = {
"pro": {
"grace_period_expires_date": "2121-01-07T05:20:23Z",
"purchase_date": "2020-12-19T05:20:23Z",
"product_identifier": "zoomerang.yearly",
"expires_date": "2121-01-07T05:20:23Z"
  },
  "premium": {
        "expires_date": "2030-01-01T01:01:01Z",
        "grace_period_expires_date": null,
        "product_identifier": "blocker.ios.subscription.yearly",
        "purchase_date": "2020-01-01T01:01:01Z"
      }
};
$done({body: JSON.stringify(obj)});
