# SubscriptionHistoryCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionHistoryCreate | [](imtadminapi_subscriptionrequestbylogins.md "SubscriptionRequestByLogins") [](imtadminapi_subscriptionhistorycreatearray.md "SubscriptionHistoryCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionHistoryCreate
Create a subscription action object.
C++
IMTSubscriptionHistory* IMTAdminAPI::SubscriptionHistoryCreate()  
---  
.NET
CIMTSubscriptionHistory CIMTAdminAPI.SubscriptionHistoryCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscriptionHistory](imtsubscriptionhistory.md "IMTSubscriptionHistory") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscriptionHistory::Release](imtsubscriptionhistory_release.md "Release") method of this object.