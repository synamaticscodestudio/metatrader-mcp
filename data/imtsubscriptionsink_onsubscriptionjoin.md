# OnSubscriptionJoin (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionSink ](imtsubscriptionsink.md "IMTSubscriptionHistorySink")/ OnSubscriptionJoin | [](imtsubscriptionsink_onsubscriptiondelete.md "OnSubscriptionDelete") [](imtsubscriptionsink_onsubscriptioncancel.md "OnSubscriptionCancel") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionSink::OnSubscriptionJoin
Subscribing event handler.
C++
virtual void IMTSubscriptionSink::OnSubscriptionDelete( const UINT64 manager, // Manager const IMTUser* user, // User const IMTConSubscription* config, // Subscription configuration const IMTSubscription*  record, // Subscription description const IMTSubscriptionHistory* history // Subscription action description )  
---  
.NET (Gateway/Manager API)
virtual void CIMTSubscriptionSink.OnSubscriptionDelete( ulong manager, // Manager CIMTUser user, // User CIMTConSubscription config, // Subscription configuration CIMTSubscription  record, // Subscription description CIMTSubscriptionHistory history // Subscription action description )  
---  
Parameters
manager
[in] If a trader's subscription was added by a manager, the appropriate manager login will be specified in this field ([IMTConManager::Login](imtconmanager_login.md "Login")). Otherwise 0 is passed.
user
[in] [The object of the user](imtuser.md "IMTUser"), for whom the subscription is added.
config
[in] [The object of the subscription configuration](imtconsubscription.md "IMTConSubscription") added for the user.
record
[in] [Subscription description](imtsubscription.md "IMTSubscription").
history
[in] [Description of the action](imtsubscriptionhistory.md "IMTSubscriptionHistory") performed in relation to the subscription.
Note
Unlike [IMTSubscriptionSink::OnSubscriptionAdd](imtsubscriptionsink_onsubscriptionadd.md "OnSubscriptionAdd"), this event is not called when a subscription is added to the database directly via the API by the [IMTServerAPI::SubscriptionAdd](imtserverapi_subscriptionadd.md "SubscriptionAdd") method.
The event is called when a manager or a trader subscribes, or when a subscription is added by methods [IMTServerAPI::SubscriptionJoin](imtserverapi_subscriptionjoin.md "SubscriptionJoin"), [IMTAdminAPI::SubscriptionJoin](imtadminapi_subscriptionjoin.md "SubscriptionJoin"), [IMTManagerAPI::SubscriptionJoin](imtmanagerapi_subscriptionjoin.md "SubscriptionJoin").