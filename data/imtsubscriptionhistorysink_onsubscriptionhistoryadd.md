# OnSubscriptionHistoryAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistorySink ](imtsubscriptionhistorysink.md "IMTSubscriptionHistorySink")/ OnSubscriptionHistoryAdd | [](imtsubscriptionhistorysink.md "IMTSubscriptionHistorySink") [](imtsubscriptionhistorysink_onsubscriptionhistoryupdate.md "OnSubscriptionHistoryUpdate") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistorySink::OnSubscriptionHistoryAdd
Event handler for adding a subscription action to the database.
C++
virtual void IMTSubscriptionHistorySink::OnSubscriptionHistoryAdd( const IMTSubscriptionHistory* subscription // A pointer to the action object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTSubscriptionHistorySink.OnSubscriptionHistoryAdd( CIMTSubscriptionHistory subscription // Action object )  
---  
Parameters
subscription
[in] A pointer to the [subscription action object](imtsubscriptionhistory.md "IMTSubscriptionHistory").
Note
The API calls this method to notify that a new subscription action has been added to the database.