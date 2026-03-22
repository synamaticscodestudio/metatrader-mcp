# SubscriptionCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionCreate | [](serverapi_subscription.md "Subscriptions") [](imtserverapi_subscriptioncreatearray.md "SubscriptionCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionCreate
Create a subscription object.
IMTSubscription* IMTServerAPI::SubscriptionCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscription](imtsubscription.md "IMTSubscription") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscription::Release](imtsubscription_release.md "Release") method of this object.