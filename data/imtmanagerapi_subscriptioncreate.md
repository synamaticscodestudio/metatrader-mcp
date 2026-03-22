# SubscriptionCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionCreate | [](imtmanagerapi_subscription.md "Subscriptions") [](imtmanagerapi_subscriptioncreatearray.md "SubscriptionCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionCreate
Create a subscription object.
C++
IMTSubscription* IMTManagerAPI::SubscriptionCreate()  
---  
.NET
CIMTSubscription CIMTManagerAPI.SubscriptionCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscription](imtsubscription.md "IMTSubscription") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscription::Release](imtsubscription_release.md "Release") method of this object.