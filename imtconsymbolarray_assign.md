# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolArray ](imtconsymbolarray.md "IMTConSymbolArray")/ Assign | [](imtconsymbolarray_release.md "Release") [](imtconsymbolarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConSymbolArray::Assign( const IMTConSymbolArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbolArray.Assign( CIMTConSymbolArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.