/*
1:mix视频下载自动升级VIP
2:沙拉视频点击恢复购买升级VIP
3:小影视频登录就是VIP
正则表达式：
https:\/\/(viva|bmall)\.(v21xy|camera360)\.com\/api\/(rest/u/vip(VerifyReceipt|InfoNew)|iap/check-receipt|mix/getinfo)

hostname=bmall.camera360.com，viva.v21xy.com
*/


const path1 = "/mix/getinfo";
const path2 = "/iap/check-receipt";
const path3 = "/vipInfoNew";
const path4 = "/vipVerifyReceipt";


let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
 obj.data["autoStatus"] = 0,
 obj.data["expires"] = 0,
 obj.data["autoMobileMMExpires"] = 0,
 obj.data["isMiguVip"] = 2,
 obj.data["autoState"] = 10,
 obj.data["autoExpires"] = 4828057694000
}
if ($request.url.indexOf(path2) != -1){
    obj.data={
    "sandbox": 0,
    "purchaseTime": 1609434337000,
    "giftVip": 1,
    "productId": "SaladVip_Int01",
    "appleVip": 1,
    "expireTime": 4828057694000,
    "operationVip": 1,
    "errorCode": 0
  }
}

if ($request.url.indexOf(path3) != -1){
     obj = {
  "autoRenewProductId": "premium_platinum_yearly",
  "autoRenewStatus": 0,
  "iosDeviceProductVo": {
    "nonOrganicVipMonthly": 3,
    "nonOrganicVipWeekly": 3,
    "premiumGoldMonthly": 3,
    "nonOrganicVipYearly": 3,
    "premiumPlatinumMonthly": 3,
    "premiumPlatinumQuarterly": 3,
    "premiumVipWeekly": 3,
    "premiumGoldYearly": 3,
    "premiumPlatinumYearly": 2,
    "premiumPlatinumHalfYearly": 3,
    "premiumVipYearly": 3
  },
  "platform": 1,
  "endTime": 4828057694000,
  "systemDate": 1609434337000,
  "productList": [
    {
      "isRenew": false,
      "vipType": "premium_platinum_yearly"
    }
  ],
  "isTrialPeriod": false,
  "vipType": "premium_platinum_yearly",
  "startTime": 1609434337000,
}
 }


if ($request.url.indexOf(path4) != -1){
     obj = {
  "vipType": "premium_platinum_yearly",
  "autoRenewStatus": 0,
  "allEndTime": 4828057694000,
  "iosDeviceProductVo": {
    "nonOrganicVipMonthly": 3,
    "nonOrganicVipWeekly": 3,
    "premiumGoldMonthly": 3,
    "nonOrganicVipYearly": 3,
    "premiumPlatinumMonthly": 3,
    "premiumPlatinumQuarterly": 3,
    "premiumVipWeekly": 3,
    "premiumGoldYearly": 3,
    "premiumPlatinumYearly": 2,
    "premiumPlatinumHalfYearly": 3,
    "premiumVipYearly": 3
  },
  "allVipType": "vip_normal",
  "allStartTime": 1609434337000,
  "endTime": 4828057694000,
  "platform": 1,
  "isTrialPeriod": false,
  "productList": [
    {
      "isRenew": false,
      "vipType": "premium_platinum_yearly"
    }
  ],
  "systemDate": 1609434337000,
  "startTime": 1609434337000,
}
 }

$done({body: JSON.stringify(obj)});
