# OnSubscriptionHistoryDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistorySink ](imtsubscriptionhistorysink.md "IMTSubscriptionHistorySink")/ OnSubscriptionHistoryDelete | [](imtsubscriptionhistorysink_onsubscriptionhistoryupdate.md "OnSubscriptionHistoryUpdate") [](reference_geo.md "Geo Services") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistorySink::OnSubscriptionHistoryDelete
Event handler for deleting a subscription action from the database.
C++
virtual void IMTSubscriptionHistorySink::OnSubscriptionHistoryDelete( const IMTSubscriptionHistory* subscription // A pointer to the action object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTSubscriptionHistorySink.OnSubscriptionHistoryDelete( CIMTSubscriptionHistory subscription // Action object )  
---  
Parameters
subscription
[in] A pointer to the [subscription action object](imtsubscriptionhistory.md "IMTSubscriptionHistory").
Note
The API calls this method to notify that a subscription action has been deleted from the database.