var obj = JSON.parse($response.body);
 obj={
 "code": 0,
 "msg": null,
 "data": {
  "level": 2    ,
  "phone": null,
  "encryptPassword": null,
  "name": "F5s",
  "id": 4960640,
  "passSecure": false,
  "vipEndDate": "20290909"
 }
};
$done({body: JSON.stringify(obj)});
//
