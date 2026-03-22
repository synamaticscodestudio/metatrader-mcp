# SubscriptionHistoryCreateArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionHistoryCreateArray | [](imtserverapi_subscriptionhistorycreate.md "SubscriptionHistoryCreate") [](imtserverapi_subscriptionhistorysubscribe.md "SubscriptionHistorySubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionHistoryCreateArray
Create an object of an array of subscription actions.
IMTSubscriptionHistoryArray* IMTServerAPI::SubscriptionHistoryCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscriptionHistoryArray](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscriptionHistoryArray::Release](imtsubscriptionhistoryarray_release.md "Release") method of this object.