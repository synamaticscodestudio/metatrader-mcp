# Status (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscription ](imtsubscription.md "IMTSubscription")/ Status | [](imtsubscription_subscription.md "Subscription") [](imtsubscription_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTSubscription::Status
Get the subscription status.
C++
UINT IMTSubscription::Status() const  
---  
.NET (Gateway/Manager API)
uint CIMTSubscription.Status()  
---  
Return Value
[IMTSubscription::EnStatus](imtsubscription_enum.htm#enstatus) enumeration values.
IMTSubscription::Status
Set the subscription status.
C++
MTAPIRES IMTSubscription::Status( const UINT state // Subscription status )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscription.Status( uint state // Subscription status )  
---  
Parameters
state
[in] Subscription status. To pass the status, use the [IMTSubscription::EnStatus](imtsubscription_enum.htm#enstatus) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.