# ControlMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ ControlMode | [](imtconsubscription_urlagreement.md "URLAgreement") [](imtconsubscription_periodmode.md "PeriodMode") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::ControlMode
Get a subscription management mode in client terminals (allowed actions).
C++
UINT IMTConSubscription::ControlMode() const  
---  
.NET (Gateway/Manager API)
EnControlMode CIMTConSubscription.ControlMode()  
---  
Return Value
Subscription management mode. Passed as a value of the [IMTConSubscription::EnControlMode](imtconsubscription_enum.htm#encontrolmode) enumeration.
IMTConSubscription::ControlMode
Set a subscription management mode in client terminals (allowed actions).
C++
MTAPIRES IMTConSubscription::ControlMode( const UINT mode  // Management mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.ControlMode( EnControlMode  mode // Management mode )  
---  
Parameters
mode
[in] Subscription management mode. Passed as a value of the [IMTConSubscription::EnControlMode](imtconsubscription_enum.htm#encontrolmode) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.