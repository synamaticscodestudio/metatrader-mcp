# CountryUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ CountryUpdate | [](imtconsubscription_countryadd.md "CountryAdd") [](imtconsubscription_countrydelete.md "CountryDelete") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::CountryUpdate
Change a country for which the subscription is available.
C++
MTAPIRES IMTConSubscription::CountryUpdate( const UINT pos, // Country position LPCWSTR path // Country )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.CountryUpdate( uint pos, // Country position string path // Country )  
---  
Parameters
pos
[in] Position of a condition in the list, starting at 0.
path
[in] The name of the new country.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.