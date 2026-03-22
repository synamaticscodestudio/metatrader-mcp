# OnSubscriptionCancel (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionSink ](imtsubscriptionsink.md "IMTSubscriptionHistorySink")/ OnSubscriptionCancel | [](imtsubscriptionsink_onsubscriptionjoin.md "OnSubscriptionJoin") [](imtsubscriptionhistorysink.md "IMTSubscriptionHistorySink") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionSink::OnSubscriptionCancel
Unsubscribing event handler.
C++
virtual void IMTSubscriptionSink::OnSubscriptionCancel( const UINT64 manager, // Manager const IMTUser* user, // User const IMTConSubscription* config, // Subscription configuration const IMTSubscription*  record, // Subscription description const IMTSubscriptionHistory* history // Subscription action description )  
---  
.NET (Gateway/Manager API)
virtual void CIMTSubscriptionSink.OnSubscriptionCancel( ulong manager, // Manager CIMTUser user, // User CIMTConSubscription config, // Subscription configuration CIMTSubscription  record, // Subscription description CIMTSubscriptionHistory history // Subscription action description )  
---  
Parameters
manager
[in] If a trader's subscription was canceled by a manager, the appropriate manager login will be specified in this field ([IMTConManager::Login](imtconmanager_login.md "Login")). Otherwise 0 is passed.
user
[in] [The object of the user](imtuser.md "IMTUser"), for whom the subscription is canceled.
config
[in] [The object of the subscription configuration](imtconsubscription.md "IMTConSubscription") canceled for the user.
record
[in] [Subscription description](imtsubscription.md "IMTSubscription").
history
[in] [Description of the action](imtsubscriptionhistory.md "IMTSubscriptionHistory") performed in relation to the subscription.
Note
Unlike [IMTSubscriptionSink::OnSubscriptionDelete](imtsubscriptionsink_onsubscriptionadd.md "OnSubscriptionAdd"), this event is not called when a subscription is deleted directly from the database by the following API methods: [IMTServerAPI::SubscriptionDelete](imtserverapi_subscriptiondelete.md "SubscriptionDelete"), [IMTAdminAPI::SubscriptionDelete](imtadminapi_subscriptiondelete.md "SubscriptionDelete"), [IMTManagerAPI::SubscriptionDelete](imtmanagerapi_subscriptiondelete.md "SubscriptionDelete").
The event is called when a subscription is canceled by a manager, a trader or by using methods [IMTServerAPI::SubscriptionCancel](imtserverapi_subscriptioncancel.md "SubscriptionCancel"), [IMTAdminAPI::SubscriptionCancel](imtadminapi_subscriptioncancel.md "SubscriptionCancel"), [IMTManagerAPI::SubscriptionCancel](imtmanagerapi_subscriptioncancel.md "SubscriptionCancel").