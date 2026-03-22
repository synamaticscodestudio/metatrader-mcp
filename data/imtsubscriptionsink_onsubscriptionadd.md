# OnSubscriptionAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionSink ](imtsubscriptionsink.md "IMTSubscriptionHistorySink")/ OnSubscriptionAdd | [](imtsubscriptionsink.md "IMTSubscriptionHistorySink") [](imtsubscriptionsink_onsubscriptionupdate.md "OnSubscriptionUpdate") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionSink::OnSubscriptionAdd
Event handler for adding a subscription to the database.
C++
virtual void IMTSubscriptionSink::OnSubscriptionAdd( const IMTSubscription* subscription // A pointer to the subscription object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTSubscriptionSink.OnSubscriptionAdd( CIMTSubscription subscription // Subscription object )  
---  
Parameters
subscription
[in] A pointer to the [subscription object](imtsubscription.md "IMTSubscription").
Note
The API calls this method to notify that a new subscription has been added to the database: when a subscription has been started by a manager, a trader or via the API ([IMTServerAPI::SubscriptionJoin](imtserverapi_subscriptionjoin.md "SubscriptionJoin"), [IMTAdminAPI::SubscriptionJoin](imtadminapi_subscriptionjoin.md "SubscriptionJoin"), [IMTManagerAPI::SubscriptionJoin](imtmanagerapi_subscriptionjoin.md "SubscriptionJoin")), as well as when a subscription has been added directly to the database via the API method [IMTServerAPI::SubscriptionAdd](imtserverapi_subscriptionadd.md "SubscriptionAdd").