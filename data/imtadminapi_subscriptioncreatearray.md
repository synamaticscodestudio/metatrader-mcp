# SubscriptionCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionCreateArray | [](imtadminapi_subscriptioncreate.md "SubscriptionCreate") [](imtadminapi_subscriptionjoin.md "SubscriptionJoin") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCreateArray
Create an object of the subscriptions array.
C++
IMTSubscriptionArray* IMTAdminAPI::SubscriptionCreateArray()  
---  
.NET
CIMTSubscriptionArray CIMTAdminAPI.SubscriptionCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscriptionArray](imtsubscriptionarray.md "IMTSubscriptionArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscriptionArray::Release](imtsubscriptionarray_release.md "Release") method of this object.