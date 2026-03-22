# Action (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistory ](imtsubscriptionhistory.md "IMTSubscriptionHistory")/ Action | [](imtsubscriptionhistory_record.md "Subscription") [](imtsubscriptionhistory_time.md "Time") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistory::Action
Get the type of performed subscription action.
C++
UINT IMTSubscriptionHistory::Action() const  
---  
.NET (Gateway/Manager API)
uint CIMTSubscriptionHistory.Action()  
---  
Return Value
Action type as a value of the [IMTSubscriptioHistory::EnAction](imtsubscriptionhistory_enum.htm#enaction) enumeration.
IMTSubscriptionHistory::Action
Set the type of action performed with the subscription.
C++
MTAPIRES IMTSubscriptionHistory::Action( const UINT status // Action type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistory.Action( uint status // Action type )  
---  
Parameters
status
[in] Action type as a value of the [IMTSubscriptioHistory::EnAction](imtsubscriptionhistory_enum.htm#enaction) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.