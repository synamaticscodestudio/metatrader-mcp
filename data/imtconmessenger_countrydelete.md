# CountryDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ CountryDelete | [](imtconmessenger_countryupdate.md "CountryUpdate") [](imtconmessenger_countryclear.md "CountryClear") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::CountryDelete
Delete the country for which the messenger is used.
C++
MTAPIRES IMTConMessenger::CountryDelete( const UINT pos // Position of the country )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.CountryDelete( uint pos // Position of the country )  
---  
Python
MTConMessenger.CountryDelete( pos # Position of the country )  
---  
Parameters
pos
[in] The position of the country in the list, starting at 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.