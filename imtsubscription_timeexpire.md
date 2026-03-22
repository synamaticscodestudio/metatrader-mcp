# TimeExpire (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscription ](imtsubscription.md "IMTSubscription")/ TimeExpire | [](imtsubscription_timerenewal.md "TimeRenewal") [](imtsubscriptionarray.md "IMTSubscriptionArray") |
| --- | --- | --- |
| --- | --- |

IMTSubscription::TimeExpire
Get the subscription expiration time.
C++
INT64 IMTSubscription::TimeExpire() const  
---  
.NET (Gateway/Manager API)
long CIMTSubscription.TimeExpire()  
---  
Return Value
Subscription expiration time in seconds since 01.01.1970.
IMTSubscription::TimeExpire
Set the subscription expiration time.
C++
MTAPIRES IMTSubscription::TimeExpire( const INT64 time // Subscription expiration )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscription.TimeExpire( long time // Subscription expiration )  
---  
Parameters
time
[in] Subscription expiration time in seconds since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.