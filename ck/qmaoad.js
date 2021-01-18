/*
qim pro

*/


var body = $response.body;
body = body.replace(/list":(\s|\S)*\]/,'list": [" "]');

$done({ body });
