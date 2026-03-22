# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Clear | [](imtconsymbol_assign.md "Assign") [](imtconsymbol_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Clear
Clear an object.
C++
MTAPIRES IMTConSymbol::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.