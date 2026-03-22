# Delete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolArray ](imtconsymbolarray.md "IMTConSymbolArray")/ Delete | [](imtconsymbolarray_addcopy.md "AddCopy") [](imtconsymbolarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolArray::Delete
Delete a symbol object by position.
C++
MTAPIRES IMTConSymbolArray::Delete( const UINT pos // Symbol position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbolArray.Delete( uint  pos // Symbol position )  
---  
Parameters
pos
[in] Symbol position in the array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The deleted object will be automatically released by [IMTConSymbol::Release](imtconsymbol_release.md "Release") method call.