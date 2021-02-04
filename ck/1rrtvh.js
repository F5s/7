var modifiedHeaders = $request.headers;
modifiedHeaders['clientVersion'] = '4.18.1';
modifiedHeaders['User-Agent'] = 'PUClient/4.18.1 (iPhone; iOS 14.2; Scale/3.00)';

$done({headers : modifiedHeaders});
