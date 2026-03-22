# SubscriptionGetByLogins (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionGetByLogins | [](imtserverapi_subscriptiongetbyid.md "SubscriptionGetByID") [](imtserverapi_subscriptionhistorycreate.md "SubscriptionHistoryCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionGetByLogins
Get subscriptions by a list of logins.
MTAPIRES IMTServerAPI::SubscriptionGetByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins IMTSubscriptionArray* records // Object of array of subscriptions )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
records
[out] An object of the [array of subscriptions](imtsubscriptionarray.md "IMTSubscriptionArray"). The 'records' object must be previously created via the [IMTServerAPI::SubscriptionCreateArray](imtserverapi_subscriptioncreatearray.md "SubscriptionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.