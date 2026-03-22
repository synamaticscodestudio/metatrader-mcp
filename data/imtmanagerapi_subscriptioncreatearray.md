# SubscriptionCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionCreateArray | [](imtmanagerapi_subscriptioncreate.md "SubscriptionCreate") [](imtmanagerapi_subscriptionjoin.md "SubscriptionJoin") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionCreateArray
Create an object of the subscriptions array.
C++
IMTSubscriptionArray* IMTManagerAPI::SubscriptionCreateArray()  
---  
.NET
CIMTSubscriptionArray CIMTManagerAPI.SubscriptionCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscriptionArray](imtsubscriptionarray.md "IMTSubscriptionArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscriptionArray::Release](imtsubscriptionarray_release.md "Release") method of this object.