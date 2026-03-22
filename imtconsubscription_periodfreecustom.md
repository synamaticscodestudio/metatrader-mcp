# PeriodFreeCustom (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ PeriodFreeCustom | [](imtconsubscription_periodfreemode.md "PeriodFreeMode") [](imtconsubscription_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::PeriodFreeCustom
Get a custom value for a trial (free) subscription period.
C++
UINT IMTConSubscription::PeriodFreeCustom() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSubscription.PeriodFreeCustom()  
---  
Return Value
Custom trial subscription period in days.
Note
The method is used if the [IMTConSubscription::FREE_PERIOD_CUSTOM](imtconsubscription_enum.htm#enfreeperiod) mode is selected for a subscription.
IMTConSubscription::PeriodFreeCustom
Set a custom value for a trial (free) subscription period.
C++
MTAPIRES IMTConSubscription::PeriodFreeCustom( const UINT days // Subscription period )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.PeriodFreeCustom( uint days // Subscription period )  
---  
Parameters
days
[in] Custom trial subscription period in days.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
The method is used if the [IMTConSubscription::FREE_PERIOD_CUSTOM](imtconsubscription_enum.htm#enfreeperiod) mode is selected for a subscription.