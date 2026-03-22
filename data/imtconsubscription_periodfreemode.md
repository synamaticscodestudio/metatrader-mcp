# PeriodFreeMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ PeriodFreeMode | [](imtconsubscription_periodcustom.md "PeriodCustom") [](imtconsubscription_periodfreecustom.md "PeriodFreeCustom") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::PeriodFreeMode
Get a trial (free) subscription period.
C++
UINT IMTConSubscription::PeriodFreeMode() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSubscription.PeriodFreeMode()  
---  
Return Value
Trial subscription period. The period is passed as a value of the [IMTConSubscription::EnFreePeriod](imtconsubscription_enum.htm#enfreeperiod) enumeration.
IMTConSubscription::PeriodFreeMode
Set a trial (free) subscription period.
C++
MTAPIRES IMTConSubscription::PeriodFreeMode( const UINT mode // Trial subscription period )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.PeriodFreeMode( uint mode // Trial subscription period )  
---  
Parameters
mode
[in] Trial subscription period. The period is passed as a value of the [IMTConSubscription::EnFreePeriod](imtconsubscription_enum.htm#enfreeperiod) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.