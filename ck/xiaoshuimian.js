//*by 
//obj.point_expires_time = 4811209694

var obj = JSON.parse($response.body);
    obj.is_vip = 1,
    obj.vip_expires = 4811209694,
    obj.point_expires_time = 4811209694
$done({body: JSON.stringify(obj)});
