/*
Quantumult X 脚本
Unlock Photoshop for iPad & Ps Express

By LTribe
Photoshop download link : http://t.cn/AiBIDoTv
Ps Express download link : http://t.cn/AiEwcMje

注意 Adobe PhotoShop 需注册登录非大陆的Adobe账号，否则会没有云存储空间

[rewrite_local]
# Photoshop for iPad & Ps Express 解锁内购订阅【By LTribe】
^https:\/\/.*\.adobe\..*\/mobile_profile\/nul\/v\d$ url script-response-body photoshop.js

[mitm]
hostname = *.adobe.*

const bodyJson = JSON.parse($response.body)

bodyJson.mobileProfile.profileStatus = 'PROFILE_AVAILABLE'

bodyJson.mobileProfile.legacyProfile = '{}'
bodyJson.mobileProfile.relationshipProfile = '{}'

JSON.stringify(bodyJson)
*/

let obj = JSON.parse($response.body);

obj.mobileProfile.profileStatus = 'PROFILE_AVAILABLE';
obj.mobileProfile.legacyProfile = '{}'
obj.mobileProfile.relationshipProfile = '{}'
$done({body: JSON.stringify(obj)});
