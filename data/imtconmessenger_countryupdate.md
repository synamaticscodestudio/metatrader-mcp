# CountryUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ CountryUpdate | [](imtconmessenger_countryadd.md "CountryAdd") [](imtconmessenger_countrydelete.md "CountryDelete") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::CountryUpdate
Change the country for which the messenger is used.
C++
MTAPIRES IMTConMessenger::CountryUpdate( const UINT pos, // Country position const IMTConMessengerCountry* country // Country object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.CountryUpdate( uint pos, // Country position CIMTConMessengerCountry country // Country object )  
---  
Python
MTConMessenger.CountryUpdate( pos, # Country position country  # Country object )  
---  
MTConMessenger.CountrySet( country-list  # List of countries )  
---  
Parameters
pos
[in] Position of the country in the list, starting with 0.
country
[in] Country object [IMTConMessengerCountry](imtconmessengercountry.md "IMTConMessengerCountry").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.