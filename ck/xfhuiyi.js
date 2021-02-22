/*
xfhuiyi
*/

const path1 = "/user/service/meeting";
var obj = JSON.parse($response.body);
if ($request.url.indexOf(path1) != -1) {
obj.biz = {"accountType":1,"effective":1,"expireTime":4811209694,"meetingMax":25,"meetingRooms":[{"personCount":25,"type":1,"count":1,"effective":1,"expireTime":4811209694,"orderId":768560597426176,"payTime":4811209694}]}
}else{
obj.biz.status = 1,
obj.biz.type = 1,
obj.biz.expiredTimeTxt = "2122-06-18 15:08:14"
}

$done({body: JSON.stringify(obj)});
