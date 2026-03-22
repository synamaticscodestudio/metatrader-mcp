# CountryClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ CountryClear | [](imtconsubscription_countrydelete.md "CountryDelete") [](imtconsubscription_countryshift.md "CountryShift") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::CountryClear
Clear the list of countries for which the subscription is available.
C++
MTAPIRES IMTConSubscription::CountryClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.CountryClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This method deletes all countries from the list.