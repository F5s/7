/*
Unlocks by Cuttlefish 公众号：墨鱼手记
var obj = JSON.parse($response.body);

obj["user"]["is_ios_licensed"]= true;

$done({body: JSON.stringify(obj)});
*/
var body = $response.body.replace(/"is_ios_licensed":false/g, '"is_ios_licensed":true');
$done({ body });
