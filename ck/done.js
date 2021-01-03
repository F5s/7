/*
Unlocks by Cuttlefish 公众号：墨鱼手记
.replace(/nickname":"\\u666e\\u901a\\u7528\\u6237"/g, 'nickname":"\u8d85\u7ea7\u4f1a\u5458"').replace(/uhead":"[^"]+"/g,'uhead":"http:\/\/dbapi.ganbuguo.com\/\/uploads\/file\/20200914\/3f8c5019e2bc056a7b226623205126f3.jpg"')
*/
var body = $response.body.replace(/"uvip":"0"/g, '"uvip":"2"').replace(/totime":"\d{4}/g, 'totime":"2129')
$done({ body });
