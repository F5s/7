/*
odc

*/

var body = $response.body;

body = 'jsonFeed({"country":"US","state":"CA","stateName":"California","zipcode":"94536","timezone":"America/Los_Angeles","latitude":"37.56250","longitude":"-122.00040","city":"Fremont","continent":"NA"});';
$done({ body });
