# Subscription (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistory ](imtsubscriptionhistory.md "IMTSubscriptionHistory")/ Record | [](imtsubscriptionhistory_subscription.md "Subscription") [](imtsubscriptionhistory_action.md "Action") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistory::Record
Get the identifier of the subscription with which the action is performed.
C++
UINT64 IMTSubscriptionHistory::Record() const  
---  
.NET (Gateway/Manager API)
ulong CIMTSubscriptionHistory.Record()  
---  
Return Value
Subscription identifier ([IMTSubscription::ID](imtsubscription_id.md "ID")).
IMTSubscriptionHistory::Record
Set the identifier of the subscription with which the action is performed.
C++
MTAPIRES IMTSubscriptionHistory::Record( const UINT64 record_id // ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistory.Record( ulong record_id // ID )  
---  
Parameters
record_id
[in] Subscription identifier ([IMTSubscription::ID](imtsubscription_id.md "ID")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.