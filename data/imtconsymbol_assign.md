# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Assign | [](imtconsymbol_release.md "Release") [](imtconsymbol_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConSymbol::Assign( const IMTConSymbol* symbol // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.Assign( CIMTConSymbol symbol // Source object )  
---  
Parameters
symbol
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.