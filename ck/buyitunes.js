let body= $response.body;
let obj = JSON.parse(body);
/*if (body.indexOf("expires") != -1) {}*/
obj["receipt"]["in_app"][0]["expires_date"] = "2122-06-18 15:08:14 Etc/GMT";
obj["receipt"]["in_app"][0]["expires_date_pst"] = "2122-06-18 15:08:14 America/Los_Angeles";
obj["receipt"]["in_app"][0]["expires_date_ms"] = "4811209694000";
obj["latest_receipt_info"][0]["expires_date"] = "2122-06-18 15:08:14 Etc/GMT";
obj["latest_receipt_info"][0]["expires_date_pst"] = "2122-06-18 15:08:14 America/Los_Angeles";
obj["latest_receipt_info"][0]["expires_date_ms"] = "4811209694000";

$done({body: JSON.stringify(obj)});
