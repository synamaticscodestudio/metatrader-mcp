# SubscriptionHistoryCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Subscriptions ](imtreportapi_subscription.md "Subscriptions")/ SubscriptionHistoryCreate | [](imtreportapi_subscriptiongetbylogins.md "SubscriptionGetByLogins") [](imtreportapi_subscriptionhistorycreatearray.md "SubscriptionHistoryCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionHistoryCreate
Create a subscription action object.
IMTSubscriptionHistory* IMTReportAPI::SubscriptionHistoryCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscriptionHistory](imtsubscriptionhistory.md "IMTSubscriptionHistory") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscriptionHistory::Release](imtsubscriptionhistory_release.md "Release") method of this object.