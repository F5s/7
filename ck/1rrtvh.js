var modifiedHeaders = $request.headers;
modifiedHeaders['clientVersion'] = '5.0.1';
modifiedHeaders['User-Agent'] = 'PUClient/5.0.1 (iPhone; iOS 14.2; Scale/3.00)';

$done({headers : modifiedHeaders});
