/*
lya vip
http://hybrid.ximalaya.com/hybrid/api/queryUserGradeInfo
*/



let obj = JSON.parse($response.body);
obj.data.currScore = 500000,
obj.data.currGrade = 10,
obj.data.awardList[1].status = 0,
obj.data.awardList[2].status = 0,
obj.data.awardList[3].status = 0,
obj.data.awardList[4].status = 0,
obj.data.awardList[5].status = 0,
obj.data.awardList[6].status = 0,
obj.data.awardList[6].status = 0,
obj.data.awardList[8].status = 0
$done({body: JSON.stringify(obj)});
