# SubscriptionCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionCreate | [](imtadminapi_subscription.md "Subscriptions") [](imtadminapi_subscriptioncreatearray.md "SubscriptionCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCreate
Create a subscription object.
C++
IMTSubscription* IMTAdminAPI::SubscriptionCreate()  
---  
.NET
CIMTSubscription CIMTAdminAPI.SubscriptionCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscription](imtsubscription.md "IMTSubscription") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscription::Release](imtsubscription_release.md "Release") method of this object.