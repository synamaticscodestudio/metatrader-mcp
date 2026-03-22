# TimeRenewal (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscription ](imtsubscription.md "IMTSubscription")/ TimeRenewal | [](imtsubscription_timesubscribe.md "TimeSubscribe") [](imtsubscription_timeexpire.md "TimeExpire") |
| --- | --- | --- |
| --- | --- |

IMTSubscription::TimeRenewal
Get the last subscription renewal time.
C++
INT64 IMTSubscription::TimeRenewal() const  
---  
.NET (Gateway/Manager API)
long CIMTSubscription.TimeRenewal()  
---  
Return Value
The last subscription renewal time in seconds since 01.01.1970.
IMTSubscription::TimeRenewal
Set the last subscription renewal time.
C++
MTAPIRES IMTSubscription::TimeRenewal( const INT64 time // Last subscription renewal )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscription.TimeRenewal( long time // Last subscription renewal )  
---  
Parameters
time
[in] The last subscription renewal time in seconds since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.