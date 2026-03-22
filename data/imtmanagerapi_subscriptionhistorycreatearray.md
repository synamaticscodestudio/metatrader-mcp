# SubscriptionHistoryCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionHistoryCreateArray | [](imtmanagerapi_subscriptionhistorycreate.md "SubscriptionHistoryCreate") [](imtmanagerapi_subscriptionhistoryupdate.md "SubscriptionHistoryUpdate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionHistoryCreateArray
Create an object of an array of subscription actions.
C++
IMTSubscriptionHistoryArray* IMTManagerAPI::SubscriptionHistoryCreateArray()  
---  
.NET
CIMTSubscriptionHistoryArray CIMTManagerAPI.SubscriptionHistoryCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscriptionHistoryArray](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscriptionHistoryArray::Release](imtsubscriptionhistoryarray_release.md "Release") method of this object.