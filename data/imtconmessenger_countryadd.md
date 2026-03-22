# CountryAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ CountryAdd | [](imtconmessenger_messagetemplate.md "MessageTemplate") [](imtconmessenger_countryupdate.md "CountryUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::CountryAdd
Add a country for which the messenger will be used.
C++
MTAPIRES IMTConMessenger::CountryAdd( IMTConMessengerCountry* country // Country object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.CountryAdd( CIMTConMessengerCountry country // Country object )  
---  
Python
MTConMessenger.CountryAdd( country # Country object )  
---  
Parameters
country
[in] Country object [IMTConMessengerCountry](imtconmessengercountry.md "IMTConMessengerCountry").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.