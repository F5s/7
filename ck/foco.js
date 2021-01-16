/*foco

/v3/users/1865223637/grade
/v3/user/info
api-1220.focodesign.com	/v3/cms/materials?ids=33968833			
https://api-1220.focodesign.com/v3/users/1865223637/works/0/risk_materials?material_id=33968118
*/



let obj = JSON.parse($response.body);
const path1 = "/cms/materials?ids=";
const path2 = "/risk_materials?material_id=";

obj.grade = 1,
obj.expired_at = 4811209694,
obj.is_expire = 0
if ($request.url.indexOf(path1) != -1){
obj[0].vip = 0,
obj[0].user_over_role = 0
}

if ($request.url.indexOf(path2) != -1){
obj.has_purchased = true
}
$done({body: JSON.stringify(obj)});
