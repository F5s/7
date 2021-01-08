/*
lya vip

*/



let obj = JSON.parse($response.body);
obj.settings.rewards.rb_amount = 10
$done({body: JSON.stringify(obj)});
