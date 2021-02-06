/*
https://www.canva.cn/_ajax/subscription/subscriptions?
*/

const path1 = "_ajax/subscription/subscriptions";

var body = $response.body;
var url = $request.url;

if (url.indexOf(path1) != -1) {
	body = body.replace(/subscriptions\"\:\[.*/,'subscriptions":[{"id":"410791","plan":"16","owningBrand":"BAEVXW5AQk4","creatingBrand":"BAEVXW5AQk4","creatingUser":"UAEVXe76wLs","status":"TRIALING","pastDue":false,"quantity":1,"paymentConfig":{"A?":"C","C":"YEAR","D":1},"createdDate":1612613603000,"featureAccessDate":1612613602000,"currentPeriodStartDate":1612613602000,"currentPeriodEndDate":4811209694000,"trialPeriodEndDate":4811209694000,"cancelAtPeriodEnd":false,"periodEndAction":"C","provider":"APPLE","planDetails":{"id":"16","name":"Canva for Business","descriptor":"CANVA_FOR_BUSINESS","description":"Low June 2020 Prices","featureBundle":"CBUS","trialPeriodDays":14,"trialsPerBrand":2,"subscriberType":"BRAND","legacy":false,"userLocked":false,"free":false,"graceEnabled":true},"externalId":"470000793037582"}]}');
}

$done({
	body
});

