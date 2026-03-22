# SubscriptionGetBySubscription (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionGetBySubscription | [](imtserverapi_subscriptionget.md "SubscriptionGet") [](imtserverapi_subscriptiongetbyid.md "SubscriptionGetByID") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionGetBySubscription
Get a user subscription by the subscription configuration ID.
MTAPIRES IMTServerAPI::SubscriptionGetBySubscription( const UINT64 login, // Login const UINT64 subscription // Subscription IMTSubscription* record // Subscription object )  
---  
Parameters
login
[in] The login of the user whose subscriptions you want to obtain.
subscription
[in] Subscription configuration ID. The [IMTConSubscription::ID](imtconsubscription_id.md "ID") value is used for the identifier.
record
[out] [Subscription](imtsubscription.md "IMTSubscription") object. The 'record' object must be previously created via the [IMTServerAPI::SubscriptionCreate](imtserverapi_subscriptioncreate.md "SubscriptionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.