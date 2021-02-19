
const path1 = "/user/info";
var url = $request.url;
var obj = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
obj = {"grade":1,"expired_at":4811209694000,"is_expire":0,"renew":{"is_autorenew":0,"type":"pro"}}
} else {
obj.grade = 1,
obj.expired_at = 4811209694000,
obj.is_expire = 0
}
$done({body: JSON.stringify(obj)});
