# SubscriptionGetByLogins (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Subscriptions ](imtreportapi_subscription.md "Subscriptions")/ SubscriptionGetByLogins | [](imtreportapi_subscriptiongetbyid.md "SubscriptionGetByID") [](imtreportapi_subscriptionhistorycreate.md "SubscriptionHistoryCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionGetByLogins
Get subscriptions by a list of logins.
MTAPIRES IMTReportAPI::SubscriptionGetByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins IMTSubscriptionArray* records // Object of array of subscriptions )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
records
[out] An object of the [array of subscriptions](imtsubscriptionarray.md "IMTSubscriptionArray"). The 'records' object must be previously created via the [IMTReportAPI::SubscriptionCreateArray](imtreportapi_subscriptioncreatearray.md "SubscriptionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.