# TimeSubscribe (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscription ](imtsubscription.md "IMTSubscription")/ TimeSubscribe | [](imtsubscription_flags.md "Flags") [](imtsubscription_timerenewal.md "TimeRenewal") |
| --- | --- | --- |
| --- | --- |

IMTSubscription::TimeSubscribe
Get the subscription start time.
C++
INT64 IMTSubscription::TimeSubscribe() const  
---  
.NET (Gateway/Manager API)
long CIMTSubscription.TimeSubscribe()  
---  
Return Value
Subscription start time in seconds since 01.01.1970.
IMTSubscription::TimeSubscribe
Set the subscription start time.
C++
MTAPIRES IMTSubscription::TimeSubscribe( const INT64 time // Subscription start )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscription.TimeSubscribe( long time // Subscription start )  
---  
Parameters
time
[in] Subscription start time in seconds since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.