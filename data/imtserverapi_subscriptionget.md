# SubscriptionGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionGet | [](imtserverapi_subscriptiondelete.md "SubscriptionDelete") [](imtserverapi_subscriptiongetbysubscription.md "SubscriptionGetBySubscription") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionGet
Get all subscriptions of a user.
MTAPIRES IMTServerAPI::SubscriptionGet( const UINT64 login, // Login IMTSubscriptionArray* records // Array of subscriptions )  
---  
Parameters
login
[in] The login of the user whose subscriptions you want to obtain.
records
[out] An object of the [array of subscriptions](imtsubscriptionarray.md "IMTSubscriptionArray"). The 'records' object must be previously created via the [IMTServerAPI::SubscriptionCreateArray](imtserverapi_subscriptioncreatearray.md "SubscriptionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.