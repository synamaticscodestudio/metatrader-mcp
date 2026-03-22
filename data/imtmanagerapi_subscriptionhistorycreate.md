# SubscriptionHistoryCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionHistoryCreate | [](imtmanagerapi_subscriptionrequestbylogins.md "SubscriptionRequestByLogins") [](imtmanagerapi_subscriptionhistorycreatearray.md "SubscriptionHistoryCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionHistoryCreate
Create a subscription action object.
C++
IMTSubscriptionHistory* IMTManagerAPI::SubscriptionHistoryCreate()  
---  
.NET
CIMTSubscriptionHistory CIMTManagerAPI.SubscriptionHistoryCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscriptionHistory](imtsubscriptionhistory.md "IMTSubscriptionHistory") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscriptionHistory::Release](imtsubscriptionhistory_release.md "Release") method of this object.