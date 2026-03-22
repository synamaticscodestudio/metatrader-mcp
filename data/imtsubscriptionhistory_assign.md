# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistory ](imtsubscriptionhistory.md "IMTSubscriptionHistory")/ Assign | [](imtsubscriptionhistory_release.md "Release") [](imtsubscriptionhistory_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistory::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTSubscriptionHistory::Assign( const IMTSubscription* obj // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistory.Assign( CIMTSubscriptionHistory obj // Source object )  
---  
Parameters
obj
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.