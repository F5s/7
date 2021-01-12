/*
yting vip

*/

var body = $response.body;
body = body.replace(/play_daily_remainders\":\\d+/g,'play_daily_remainders\":111');
body = body.replace(/"down_daily_remainders\":\\d+/g,'down_daily_remainders\":111');
body = body.replace(/"next_upgrade_need\":\\d+/g,'next_upgrade_need\":0"');
body = body.replace(/"isvip\":\\d/g,'"isvip\":1');
body = body.replace(/"gicon\":\\w+/g,'gicon\":\"V6\"');
body = body.replace(/"\"gid\":\\d/g,'\"gid\":6');
body = body.replace(/"app_launch_times_adshow:\"\\d/g,'app_launch_times_adshow:\"0');
body = body.replace(/"\"adgroups\"/g,'\"adgroups__\"');
body = body.replace(/"\"iOS_adgroups\"/g,'\"iOS_adgroups__\"');
body = body.replace(/"retcode\":\\d/g,'retcode\":0');


$done({ body });
