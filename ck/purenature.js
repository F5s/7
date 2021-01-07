/*
djxs vip


*/



var obj = JSON.parse($response.body);
obj.Credentials.Expiration = 4811209694

$done({body: JSON.stringify(obj)});
