# SubscriptionCreateArray (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Subscriptions ](imtreportapi_subscription.md "Subscriptions")/ SubscriptionCreateArray | [](imtreportapi_subscriptioncreate.md "SubscriptionCreate") [](imtreportapi_subscriptionexist.md "SubscriptionExist") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionCreateArray
Create an object of the subscriptions array.
IMTSubscriptionArray* IMTReportAPI::SubscriptionCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscriptionArray](imtsubscriptionarray.md "IMTSubscriptionArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscriptionArray::Release](imtsubscriptionarray_release.md "Release") method of this object.