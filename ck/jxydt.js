
//
/*
# 驾照一点通vip
QX1.0.0:
^https:\/\/vipapi\.jxedt\.com\/vip\/check url script-response-body https://raw.githubusercontent.com/zgaoliang520/zijianyong/master/jxydt.js
Surge4.0:
http-response ^https://vipapi.jxedt.com/vip/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/zgaoliang520/zijianyong/master/jxydt.js,script-update-interval=0
MITM = vipapi.jxedt.com
var obj = JSON.parse($response.body);
 obj= {
 "code": 0,
 "msg": "OK",
 "result": {
  "vipstatus": 1,
  "isexpert": true,
  "endtime": "2122-11-02",
  "vipType": 0,
  "begintime": "2019-11-03",
  "isRenewals": 1,
  "vipLevel": 0,
  "openCourseIds": [],
  "choreographySkills": 0,
  "has_append_service": 0,
  "vipDaysOverdue": -1,
  "vipResidualDay": 999,
  "imeiVIPOrderBindStatus": 1
 }
};
$done({body: JSON.stringify(obj)});
*/

let obj = JSON.parse($response.body);
obj. result.vipCheckResult = "zlW9SsBvibu+JT9FUFFUy2VSnXcs//FxdzKwYaofC9ij7Z6NpblTKPxI+GeUOs+zxvDy8jq7/Hwv75MAqZ7402iKtz9IATt3yQk6I1gABuJbFKyid8E8+4f0I+0VK96ELJFm3tswVWzx9Z6EM2QLYDg3ixfhUASjTZi6GIwerPxyxQgBjK8vh5YLw7WGn/PXrdHN4tSIpn8p0T5886YR5sB5m2qjG/NRxkNaVpFEmUXR3fc9MeaZiYRMTdho/vMH9JR8VPKaoRV/IT30Tyv8aL6e/+WzDw3Qlvw2vjlHdt0b3LTNRNTec51CT9KakoqYBjidFZ6vl2oyCsjA8/HRDQ==",

$done({body: JSON.stringify(obj)});
