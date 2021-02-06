/*
https://www.canva.cn/_ajax/subscription/subscriptions?
https://www.canva.cn/_ajax/env/analytics
https://www.canva.cn/_ajax/subscription/receipts
*/

const path1 = "/subscription/subscriptions";
const path2 = "/env/analytics";
const path3 = "/subscription/receipts";

var body = $response.body;
var url = $request.url;

if (url.indexOf(path1) != -1) {
	body = body.replace(/while\(1\).*/,'while(1);</x>//{"subscriptions":[{"id":"410791","plan":"16","owningBrand":"BAEVXW5AQk4","creatingBrand":"BAEVXW5AQk4","creatingUser":"UAEVXe76wLs","status":"TRIALING","pastDue":false,"quantity":1,"paymentConfig":{"A?":"C","C":"YEAR","D":1},"createdDate":1612613603000,"featureAccessDate":1612613602000,"currentPeriodStartDate":1612613602000,"currentPeriodEndDate":4811209694000,"trialPeriodEndDate":4811209694000,"cancelAtPeriodEnd":false,"periodEndAction":"C","provider":"APPLE","planDetails":{"id":"16","name":"Canva for Business","descriptor":"CANVA_FOR_BUSINESS","description":"Low June 2020 Prices","featureBundle":"CBUS","trialPeriodDays":14,"trialsPerBrand":2,"subscriberType":"BRAND","legacy":false,"userLocked":false,"free":false,"graceEnabled":true},"externalId":"470000793037582"}]}');
}

if (url.indexOf(path2) != -1) {
	body = body.replace(/while\(1\).*/,'while(1);</x>//{"impl":"sensorsdata-segment-mux","segmentJsUrl":"https://static.canva.cn/static/lib/cl/cl-0.4.1.min.js","segmentApiHost":"cl.canva.cn/v1","segmentWriteKey":"F8632GDKhF7tEjs7cPFb88aCXvf9g2gj","sensorsDataUrl":"https://datasink.canva.sensorsdatavip.com/sa?project=production","user":"UAEVXe76wLs","brand":"BAEVXW5AQk4","personal":true,"cohort":254,"tier":"paid","experience":"IPHONE","experiments":{"DCTEM":"B","LGSX":"A","WAVWX":"B","SETEX":"B","IOSEX":"E4","DAVIA":"B","APPRE":"A","SBV2":"A","WEMD":"B","WOFFT":"A","OPRIE":"A2","PRBT2":"A","ERTSR":"C3","ANDPE":"B","PPBKB":"B","H2RCS":"B","SETEN":"A","XEDIT":"E","TMLO":"B","C4BRT":"A","PRMM3":"B","PNPDE":"A","ANDWX":"W3","RQCN2":"A","PRPMM":"A","FLSUB":"B","VLQI":"B","DELC":"C","AATST":"A1","CCTAS":"B","OPDSE":"A","VRELQ":"A","CAN":"A","CONFE":"B","H2SDS":"B","RFWLH":"A","CL2DI":"B","PGNTT":"A"},"countryCode":"CN","userLocale":"zh-CN"}');
}

if (url.indexOf(path3) != -1) {
	body = body.replace(/while\(1\).*/,'while(1);</x>//{"A":"470000793037582"}');
}

$done({
	body
});

