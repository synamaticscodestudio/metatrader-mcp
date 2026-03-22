# OnSubscriptionDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionSink ](imtsubscriptionsink.md "IMTSubscriptionHistorySink")/ OnSubscriptionDelete | [](imtsubscriptionsink_onsubscriptionupdate.md "OnSubscriptionUpdate") [](imtsubscriptionsink_onsubscriptionjoin.md "OnSubscriptionJoin") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionSink::OnSubscriptionDelete
Event handler for deleting a subscription from the database.
C++
virtual void IMTSubscriptionSink::OnSubscriptionDelete( const IMTSubscription* subscription // A pointer to the subscription object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTSubscriptionSink.OnSubscriptionDelete( CIMTSubscription subscription // Subscription object )  
---  
Parameters
subscription
[in] A pointer to the [subscription object](imtsubscription.md "IMTSubscription").
Note
The API calls this method to notify that a subscription has been deleted from the database: unsubscribed by a manager, a trader or via API ([IMTServerAPI::SubscriptionCancel](imtserverapi_subscriptioncancel.md "SubscriptionCancel"), [IMTAdminAPI::SubscriptionCancel](imtadminapi_subscriptioncancel.md "SubscriptionCancel"), [IMTManagerAPI::SubscriptionCancel](imtmanagerapi_subscriptioncancel.md "SubscriptionCancel")), as well as when a subscription is directly deleted from the database via the API ([IMTServerAPI::SubscriptionDelete](imtserverapi_subscriptiondelete.md "SubscriptionDelete"), [IMTAdminAPI::SubscriptionDelete](imtadminapi_subscriptiondelete.md "SubscriptionDelete"), [IMTManagerAPI::SubscriptionDelete](imtmanagerapi_subscriptiondelete.md "SubscriptionDelete")).