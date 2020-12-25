/*
放松并睡个好觉musicalm解锁VIP
https://subscription.aresframework.com/api/purchase

var obj = JSON.parse($response.body);

obj["data"]["is_premium"]=1;
obj["meta"]["current_subscription_expiration_date"]= "2 November 2099";
obj["meta"]["current_subscription_expiry_date"]= "2099-11-09 04:48:25";
$done({body: JSON.stringify(obj)});
*/

let obj = JSON.parse($response.body);

obj.data["subscriptions"] = [
      {
        "cancellationDateTime": null,
        "isRefunded": 0,
        "isActive": 1,
        "id": 202411,
        "productCode": "musicalm.subscription.annual",
        "storeOrderId": "160000709586849",
        "inTrialPeriod": 1,
        "inGracePeriod": 0,
        "inPremiumPeriod": 1,
        "expiresDateTime": "2099-04-07 02:36:42"
      }
    ]
$done({body: JSON.stringify(obj)});
