
/*
prookie

*/

var obj = JSON.parse($response.body);

var environment = obj.environment;
var receipt_type = obj.receipt.receipt_type;
var adam_id = obj.receipt.adam_id;
var app_item_id = obj.receipt.app_item_id;
var bundle_id = obj.receipt.bundle_id;
var application_version = obj.receipt.application_version;
var download_id = obj.receipt.download_id;
var version_external_identifier = obj.receipt.version_external_identifier;
var receipt_creation_date = obj.receipt.receipt_creation_date;
var receipt_creation_date_ms = obj.receipt.receipt_creation_date_ms;
var request_date_ms = obj.receipt.request_date_ms;
var request_date_pst = obj.receipt.request_date_pst;
var original_purchase_date = obj.receipt.original_purchase_date;
var original_purchase_date_ms = obj.receipt.original_purchase_date_ms;
var original_purchase_date_pst = obj.receipt.original_purchase_date_pst;
var original_application_version = obj.receipt.original_application_version;
var product_id = "";
var latest_receipt = "";

var istrue = 1;

if(bundle_id == "com.prookie.camera")
{
product_id = "prookie.week.trial";
latest_receipt = "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";

istrue = 2;
}

if(istrue == 2)
{
obj = {
    "environment": ""+environment+"",
    "receipt": {
        "receipt_type": ""+receipt_type+"",
        "adam_id": "+adam_id+",
        "app_item_id": "+app_item_id+",
        "bundle_id": ""+bundle_id+"",
        "application_version": ""+application_version+"",
        "download_id": "+download_id+",
        "version_external_identifier": "+version_external_identifier+",
        "receipt_creation_date": ""+receipt_creation_date+"",
        "receipt_creation_date_ms": ""+receipt_creation_date_ms+"",
        "receipt_creation_date_pst": ""+receipt_creation_date_pst+"",
        "request_date": ""+request_date+"",
        "request_date_ms": ""+request_date_ms+"",
        "request_date_pst": ""+request_date_pst+"",
        "original_purchase_date": ""+original_purchase_date+"",
        "original_purchase_date_ms": ""+original_purchase_date_ms+"",
        "original_purchase_date_pst": ""+original_purchase_date_pst+"",
        "original_application_version": ""+original_application_version+"",
        "in_app": [
            {
                "quantity": "1",
                "product_id": ""+product_id+"",
                "transaction_id": "290000743397363",
                "original_transaction_id": "290000743397363",
                "purchase_date": "2020-12-19 05:55:51 Etc/GMT",
                "purchase_date_ms": "1608357351000",
                "purchase_date_pst": "2020-12-18 21:55:51 America/Los_Angeles",
                "original_purchase_date": "2020-12-19 05:55:52 Etc/GMT",
                "original_purchase_date_ms": "1608357352000",
                "original_purchase_date_pst": "2020-12-18 21:55:52 America/Los_Angeles",
                "expires_date": "2122-06-18 15:08:14 Etc/GMT",
                "expires_date_ms": "4811209694000",
                "expires_date_pst": "2122-06-18 15:08:14 America/Los_Angeles",
                "web_order_line_item_id": "290000305373512",
                "is_trial_period": "true",
                "is_in_intro_offer_period": "false",
                "in_app_ownership_type": "PURCHASED"
            }
        ]
    },
    "latest_receipt_info": [
        {
            "quantity": "1",
            "product_id": ""+product_id+"",
            "transaction_id": "290000743397363",
            "original_transaction_id": "290000743397363",
            "purchase_date": "2020-12-19 05:55:51 Etc/GMT",
            "purchase_date_ms": "1608357351000",
            "purchase_date_pst": "2020-12-18 21:55:51 America/Los_Angeles",
            "original_purchase_date": "2020-12-19 05:55:52 Etc/GMT",
            "original_purchase_date_ms": "1608357352000",
            "original_purchase_date_pst": "2020-12-18 21:55:52 America/Los_Angeles",
            "expires_date": "2122-06-18 15:08:14 Etc/GMT",
            "expires_date_ms": "4811209694000",
            "expires_date_pst": "2122-06-18 15:08:14 America/Los_Angeles",
            "web_order_line_item_id": "290000305373512",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED",
            "subscription_group_identifier": "20589044"
        }
    ],
    "latest_receipt": ""+latest_receipt+"",
    "pending_renewal_info": [
        {
            "grace_period_expires_date": "2122-06-18 15:08:14 Etc/GMT",
            "auto_renew_product_id": ""+product_id+"",
            "original_transaction_id": "290000743397363",
            "grace_period_expires_date_pst": "2122-06-18 15:08:14 America/Los_Angeles",
            "product_id": ""+product_id+"",
            "grace_period_expires_date_ms": "4811209694000",
            "auto_renew_status": "1"
        }
    ],
    "status": 0
}
}
alert(obj);
$done({body: JSON.stringify(obj)});