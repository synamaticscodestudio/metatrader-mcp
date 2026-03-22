# SubscriptionCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Subscriptions ](imtreportapi_subscription.md "Subscriptions")/ SubscriptionCreate | [](imtreportapi_subscription.md "Subscriptions") [](imtreportapi_subscriptioncreatearray.md "SubscriptionCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionCreate
Create a subscription object.
IMTSubscription* IMTReportAPI::SubscriptionCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscription](imtsubscription.md "IMTSubscription") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscription::Release](imtsubscription_release.md "Release") method of this object.