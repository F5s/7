let obj = JSON.parse($response.body);
obj["subscriber"] =
{
    "subscriptions": {
        "com.neocortext.doublicatapp.subscription.promos.annual.50off": {
            "is_sandbox": false,
            "period_type": "active",
            "billing_issues_detected_at": "2020-12-22T07:04:02Z",
            "unsubscribe_detected_at": null,
            "expires_date": "2121-01-07T05:20:23Z",
            "grace_period_expires_date": "2121-01-07T05:20:23Z",
            "original_purchase_date": "2020-12-19T05:20:24Z",
            "purchase_date": "2020-12-19T05:20:23Z",
            "store": "app_store"
        }
    },
    "entitlements":{
        "pro": {
            "grace_period_expires_date": "2121-01-07T05:20:23Z",
            "purchase_date": "2020-12-19T05:20:23Z",
            "product_identifier": "reface_yearly_sale",
            "expires_date": "2121-01-07T05:20:23Z"
        }
    }
};


$done({body: JSON.stringify(obj)});
