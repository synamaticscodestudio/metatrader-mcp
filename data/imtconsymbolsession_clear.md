# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolSession ](imtconsymbolsession.md "IMTConSymbolSession")/ Clear | [](imtconsymbolsession_assign.md "Assign") [](imtconsymbolsession_open.md "Open") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolSession::Clear
Clear an object.
C++
MTAPIRES IMTConSymbolSession::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbolSession.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.