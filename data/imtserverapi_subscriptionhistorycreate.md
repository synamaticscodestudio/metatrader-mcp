# SubscriptionHistoryCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionHistoryCreate | [](imtserverapi_subscriptiongetbylogins.md "SubscriptionGetByLogins") [](imtserverapi_subscriptionhistorycreatearray.md "SubscriptionHistoryCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionHistoryCreate
Create a subscription action object.
IMTSubscriptionHistory* IMTServerAPI::SubscriptionHistoryCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscriptionHistory](imtsubscriptionhistory.md "IMTSubscriptionHistory") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscriptionHistory::Release](imtsubscriptionhistory_release.md "Release") method of this object.