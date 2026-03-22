# CountryNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ CountryNext | [](imtconmessenger_countrytotal.md "CountryTotal") [](imtconmessenger_groupadd.md "GroupAdd") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::CountryNext
Get the country for which the messenger is used, by its index in the list.
C++
MTAPIRES IMTConMessenger::CountryNext( const UINT pos, // Country position IMTConMessengerCountry* country // Country object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.CountryNext( uint pos, // Country position CIMTConMessengerCountry country // Country object )  
---  
Python
MTConMessenger.CountryNext( pos  # Country position )  
---  
MTConMessenger.CountryGet()  
---  
Parameters
pos
[in] The position of the country in the list, starting at 0.
country
[out] Country object. The 'country' object must be previously created via the [IMTServerAPI::MessengerCountryCreate](imtserverapi_messengercountrycreate.md "MessengerCountryCreate") or [IMTAdminAPI::MessengerCountryCreate](imtadminapi_messengercountrycreate.md "MessengerCountryCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.