/*
efekt
*/
let body = $response.body;
body = body.replace(/status":"expired"/g,'status":"active"');
body = body.replace(/autorenew_enabled":false/g,'autorenew_enabled":true');
body = body.replace(/expires_at":".*Z"/g,'expires_at":"2121-02-05T12:26:42.630Z"');
body = body.replace(/active_till":".*Z"/g,'active_till":"2121-02-05T12:26:42.630Z"');

$done({
	body
});
