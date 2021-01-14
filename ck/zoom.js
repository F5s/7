/*
zoome vip

/apiv2/v2/user/update
/apiv2/v2/user/profile
*/



var obj = JSON.parse($response.body);

obj.result.is_pro = true,
obj.result.pro_expiry_date = "4811209694000"

$done({body: JSON.stringify(obj)});
