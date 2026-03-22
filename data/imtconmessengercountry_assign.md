# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerCountry ](imtconmessengercountry.md "IMTConMessengerCountry")/ Assign | [](imtconmessengercountry_release.md "Release") [](imtconmessengercountry_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerCountry::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConMessengerCountry::Assign( const IMTConMessengerCountry* country // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.Assign( CIMTConMessengerCountry country // Source object )  
---  
Parameters
country
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.