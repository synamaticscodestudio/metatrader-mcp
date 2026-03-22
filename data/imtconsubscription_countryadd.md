# CountryAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ CountryAdd | [](imtconsubscription_pricecurrency.md "PriceCurrency") [](imtconsubscription_countryupdate.md "CountryUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::CountryAdd
Add a country for which the subscription will be available.
C++
MTAPIRES IMTConSubscription::CountryAdd( LPCWSTR path // Country )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.CountryAdd( string path // Country )  
---  
Parameters
path
[in] Country name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.