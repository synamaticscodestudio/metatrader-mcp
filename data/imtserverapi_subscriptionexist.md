# SubscriptionExist (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionExist | [](imtserverapi_subscriptioncancel.md "SubscriptionCancel") [](imtserverapi_subscriptionadd.md "SubscriptionAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionExist
Check if a user has the subscription.
bool IMTServerAPI::SubscriptionExist( const UINT64 login, // Login const UINT64 subscription // Subscription )  
---  
Parameters
login
[in] The login of the user whose subscriptions you want to obtain.
subscription
[in] Subscription configuration ID. The [IMTConSubscription::ID](imtconsubscription_id.md "ID") value is used for the identifier.
Return Value
Returns TRUE if the subscription exists, otherwise returns FALSE.