# SubscriptionHistoryCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionHistoryCreateArray | [](imtadminapi_subscriptionhistorycreate.md "SubscriptionHistoryCreate") [](imtadminapi_subscriptionhistoryupdate.md "SubscriptionHistoryUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionHistoryCreateArray
Create an object of an array of subscription actions.
C++
IMTSubscriptionHistoryArray* IMTAdminAPI::SubscriptionHistoryCreateArray()  
---  
.NET
CIMTSubscriptionHistoryArray CIMTAdminAPI.SubscriptionHistoryCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscriptionHistoryArray](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscriptionHistoryArray::Release](imtsubscriptionhistoryarray_release.md "Release") method of this object.