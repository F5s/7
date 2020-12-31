var obj = JSON.parse($response.body);

obj["subscription_info"]= {
    "type" : "IOS",
    "valid_until" : 4828057694.367564
    };

$done({body: JSON.stringify(obj)});

// Descriptions