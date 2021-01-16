/*
scribl

*/

let obj = JSON.parse($response.body);
const path1 = "/getcontestlangjj";
const path2 = "/getjsonslang";


if ($request.url.indexOf(path1) != -1){
obj.contest.enddate = "4811209694",
obj.contest.creatorimg = true
}

if ($request.url.indexOf(path2) != -1){
obj.contests[0].enddate = "4811209694",
obj.contests[0].creatorimg = true
}
$done({body: JSON.stringify(obj)});
