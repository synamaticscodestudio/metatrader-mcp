# PeriodCustom (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ PeriodCustom | [](imtconsubscription_periodmode.md "PeriodMode") [](imtconsubscription_periodfreemode.md "PeriodFreeMode") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::PeriodCustom
Get a custom subscription period.
C++
UINT IMTConSubscription::PeriodCustom() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSubscription.PeriodCustom()  
---  
Return Value
Custom subscription period in days.
Note
The method is used if the [IMTConSubscription::PERIOD_CUSTOM](imtconsubscription_enum.htm#enperiod) mode is selected for a subscription.
IMTConSubscription::PeriodCustom
Set a custom subscription period.
C++
MTAPIRES IMTConSubscription::PeriodCustom( const UINT days // Subscription period )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.PeriodCustom( uint days // Subscription period )  
---  
Parameters
days
[in] Custom subscription period in days.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
The method is used if the [IMTConSubscription::PERIOD_CUSTOM](imtconsubscription_enum.htm#enperiod) mode is selected for a subscription.