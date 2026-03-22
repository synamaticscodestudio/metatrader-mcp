# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolSession ](imtconsymbolsession.md "IMTConSymbolSession")/ Assign | [](imtconsymbolsession_release.md "Release") [](imtconsymbolsession_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolSession::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConSymbolSession::Assign( const IMTConSymbolSession* symbol // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbolSession.Assign( CIMTConSymbolSession symbol // Source object )  
---  
Parameters
symbol
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.