# PeriodMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ PeriodMode | [](imtconsubscription_controlmode.md "ControlMode") [](imtconsubscription_periodcustom.md "PeriodCustom") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::PeriodMode
Get a subscription period.
C++
UINT IMTConSubscription::PeriodMode() const  
---  
.NET (Gateway/Manager API)
EnPeriod CIMTConSubscription.PeriodMode()  
---  
Return Value
Subscription period. The period is passed as a value of the [IMTConSubscription::EnPeriod](imtconsubscription_enum.htm#enperiod) enumeration.
IMTConSubscription::PeriodMode
Set a subscription period.
C++
MTAPIRES IMTConSubscription::PeriodMode( const UINT mode  // Subscription period )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.PeriodMode( EnPeriod  mode // Subscription period )  
---  
Parameters
mode
[in] Subscription period. The period is passed as a value of the [IMTConSubscription::EnPeriod](imtconsubscription_enum.htm#enperiod) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.