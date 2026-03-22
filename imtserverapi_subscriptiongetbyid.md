# SubscriptionGetByID (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionGetByID | [](imtserverapi_subscriptiongetbysubscription.md "SubscriptionGetBySubscription") [](imtserverapi_subscriptiongetbylogins.md "SubscriptionGetByLogins") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionGetByID
Get a subscription by ID.
MTAPIRES IMTServerAPI::SubscriptionGetByID( const UINT64 id, // ID IMTSubscription* record // Subscription object )  
---  
Parameters
id
[in] Subscription ID. The [IMTSubscription::ID](imtsubscription_id.md "ID") value is used as the identifier.
record
[out] [Subscription](imtsubscription.md "IMTSubscription") object. The 'record' object must be previously created via the [IMTServerAPI::SubscriptionCreate](imtserverapi_subscriptioncreate.md "SubscriptionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.