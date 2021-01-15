let obj = JSON.parse($response.body);
obj["data"]= 
{
"vip_list": [{
"autoRenew": "0",
"level": "2",
"paidSign": 2,
"vipType": "2",
"payType": "1",
"status": "1",
"type": "1",
"surplus": 1,
"yearExpire": 2,
"deadline": {
"t": 4811209694000
},
"longestDeadline": {
"t": 4811209694000
}
}
]};


$done({body: JSON.stringify(obj)});
