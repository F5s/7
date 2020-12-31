/*
句读和句子控
https://(api.juzikong|judouapp).com/(api/v9/users/profile|mobi/me/)
*/

const path1 = "/api/v9/users/profile";
const path2 = "/mobi/me/";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.is_member = true,
obj.member_expired_at = 4828057694000
}
if ($request.url.indexOf(path2) != -1){
obj.data.memberExpiredAt = 4828057694000,
obj.data.memberType = "1",
obj.data.removeSplashAd = true
}
$done({body: JSON.stringify(obj)});
