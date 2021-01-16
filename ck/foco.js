/*foco

/v3/users/1865223637/grade
/v3/user/info

*/



let obj = JSON.parse($response.body);

obj.grade = 1,
obj.expired_at = 4811209694,
obj.is_expire = 0

$done({body: JSON.stringify(obj)});
