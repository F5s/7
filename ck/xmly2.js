/*
lya vip

const path3 = "/starwar/task";
const path4 = "/adopt/api";
const path5 = "/hybrid/api";

*/


let obj = JSON.parse($response.body);
obj.context.currentUser.isVip = true
$done({body: JSON.stringify(obj)});