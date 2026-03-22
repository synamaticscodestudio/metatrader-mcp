# SubscriptionHistoryCreateArray (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Subscriptions ](imtreportapi_subscription.md "Subscriptions")/ SubscriptionHistoryCreateArray | [](imtreportapi_subscriptionhistorycreate.md "SubscriptionHistoryCreate") [](imtreportapi_subscriptionhistoryget.md "SubscriptionHistoryGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionHistoryCreateArray
Create an object of an array of subscription actions.
IMTSubscriptionHistoryArray* IMTReportAPI::SubscriptionHistoryCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscriptionHistoryArray](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscriptionHistoryArray::Release](imtsubscriptionhistoryarray_release.md "Release") method of this object.