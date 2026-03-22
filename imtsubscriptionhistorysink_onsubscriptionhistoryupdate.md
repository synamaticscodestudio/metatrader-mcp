# OnSubscriptionHistoryUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistorySink ](imtsubscriptionhistorysink.md "IMTSubscriptionHistorySink")/ OnSubscriptionHistoryUpdate | [](imtsubscriptionhistorysink_onsubscriptionhistoryadd.md "OnSubscriptionHistoryAdd") [](imtsubscriptionhistorysink_onsubscriptionhistorydelete.md "OnSubscriptionHistoryDelete") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistorySink::OnSubscriptionHistoryUpdate
Subscription action change event handler.
C++
virtual void IMTSubscriptionHistorySink::OnSubscriptionHistoryUpdate( const IMTSubscriptionHistory* subscription // A pointer to the action object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTSubscriptionHistorySink.OnSubscriptionHistoryUpdate( CIMTSubscriptionHistory subscription // Action object )  
---  
Parameters
subscription
[in] A pointer to the [subscription action object](imtsubscriptionhistory.md "IMTSubscriptionHistory").
Note
The API calls this method to notify that a subscription action in a database has been updated.