# CountryDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ CountryDelete | [](imtconsubscription_countryupdate.md "CountryUpdate") [](imtconsubscription_countryclear.md "CountryClear") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::CountryDelete
Delete a country for which the subscription is available.
C++
MTAPIRES IMTConSubscription::CountryDelete( const UINT pos // Country position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.CountryDelete( uint pos // Country position )  
---  
Parameters
pos
[in] The position of a country in the list, starting at 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.