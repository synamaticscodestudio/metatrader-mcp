# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ Flags | [](imtconsubscription_periodfreecustom.md "PeriodFreeCustom") [](imtconsubscription_price.md "Price") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::Flags
Get additional subscription settings.
C++
UINT IMTConSubscription::Flags() const  
---  
.NET (Gateway/Manager API)
EnProviderType CIMTConSubscription.Flags()  
---  
Return Value
Additional subscription settings. The settings are passed by the [IMTConSubscription::EnFlags](imtconsubscription_enum.htm#enflags) enumeration.
IMTConSubscription::Flags
Set additional subscription settings.
C++
MTAPIRES IMTConSubscription::Flags( const UINT flags // Settings )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.Flags( EnFlags flags // Settings )  
---  
Parameters
flags
[in] Additional subscription settings. The settings are passed by the [IMTConSubscription::EnFlags](imtconsubscription_enum.htm#enflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.