# Time (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistory ](imtsubscriptionhistory.md "IMTSubscriptionHistory")/ Time | [](imtsubscriptionhistory_action.md "Action") [](imtsubscriptionhistory_amount.md "Amount") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistory::Time
Get the subscription action time.
C++
INT64 IMTSubscriptionHistory::Time() const  
---  
.NET (Gateway/Manager API)
long CIMTSubscriptionHistory.Time()  
---  
Return Value
Action time in seconds since 01.01.1970.
IMTSubscriptionHistory::Time
Set the subscription action time.
C++
MTAPIRES IMTSubscriptionHistory::Time( const INT64 time // Time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistory.Time( long time // Time )  
---  
Parameters
time
[in] Action time in seconds since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.