# CountryClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ CountryClear | [](imtconmessenger_countrydelete.md "CountryDelete") [](imtconmessenger_countryshift.md "CountryShift") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::CountryClear
Clear the list of countries for which the messenger is used.
C++
MTAPIRES IMTConMessenger::CountryClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.CountryClear()  
---  
Python
MTConMessenger.CountryClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method deletes from the list all countries for which the messenger is used.