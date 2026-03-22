# OnSubscriptionUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionSink ](imtsubscriptionsink.md "IMTSubscriptionHistorySink")/ OnSubscriptionUpdate | [](imtsubscriptionsink_onsubscriptionadd.md "OnSubscriptionAdd") [](imtsubscriptionsink_onsubscriptiondelete.md "OnSubscriptionDelete") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionSink::OnSubscriptionUpdate
Subscription change event handler.
C++
virtual void IMTSubscriptionSink::OnSubscriptionUpdate( const IMTSubscription* subscription // A pointer to the subscription object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTSubscriptionSink.OnSubscriptionUpdate( CIMTSubscription subscription // Subscription object )  
---  
Parameters
subscription
[in] A pointer to the [subscription object](imtsubscription.md "IMTSubscription").
Note
The API calls this method to notify that a subscription has been updated.