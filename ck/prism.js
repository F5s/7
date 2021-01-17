
/*
prisma


*/



let obj = JSON.parse($response.body);
obj.is_valid = true,
obj.expiration_date = "2122-06-18T15:08:14Z",
obj.is_grace_period = true,
obj.subscription_type = "vip"
$done({body: JSON.stringify(obj)});
