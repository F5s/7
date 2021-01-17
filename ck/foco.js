/*foco

/v1/user_grade_expire
/v2/users/0/info
/v2/users/info
*/



let obj = JSON.parse($response.body);
const path1 = "/user_grade_expire";
const path2 = "/info";


if ($request.url.indexOf(path1) != -1){
obj.data.grade = 5,
obj.data.expired_at = 4811209694,
obj.data.is_expire = 0
}

if ($request.url.indexOf(path2) != -1){
obj.grade = 5,
obj.expired_at = 4811209694,
obj.is_expire = 0
}
$done({body: JSON.stringify(obj)});
