let body= $response.body;
let obj = JSON.parse(body);
obj["pageData"]["88942"] = {"pluginCode":"user_count_down","status":"200","isvisable":"1","messageDesc":"成功","data":{"drawEquitycardAction":"","isMarginBottom":"0","isPaddingTop":"0","endDate":"2121-02-17 18:37:53","memberProfile":{"experienceState":"0","memberType":"5","isMember":"1","endTime":"2121-02-25 00:00:00","memberAttr":"1","endDays":"99999"},"isMarginTop":"0","GLOBAL_JSON":{"FE_GLOBAL_PARMAR":""},"currentTime":"2021-02-13 21:23:09","numberColor":"","waitingGroundUrl":"//cdn.cmread.com/comment/image/5527c1c8ab93b08405527d21c04eac05f881bd2930de/pic.jpg","resultGroundUrl":"//cdn.cmread.com/comment/image/5527c1c8a1d188c8056a750e9f146905f881be987962/pic.jpg","userEquitycardPage":"","ctag":{},"isShowLine":"0","isAccetp":true}};

$done({body: JSON.stringify(obj)});
