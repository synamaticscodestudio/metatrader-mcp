# Flags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscription ](imtsubscription.md "IMTSubscription")/ Flags | [](imtsubscription_status.md "Status") [](imtsubscription_timesubscribe.md "TimeSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTSubscription::Flags
Get additional subscription properties.
C++
UINT IMTSubscription::Flags() const  
---  
.NET (Gateway/Manager API)
uint CIMTSubscription.Flags()  
---  
Return Value
Additional properties as flags from the [IMTSubscription::EnFlags](imtsubscription_enum.htm#enflags) enumeration.
IMTSubscription::Flags
Set additional subscription properties.
C++
MTAPIRES IMTSubscription::Flags( const UINT flags // Flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscription.Flags( uint flags // Flags )  
---  
Parameters
flags
[in] Additional subscription properties as flags from the [IMTSubscription::EnStatus](imtsubscription_enum.htm#enflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.