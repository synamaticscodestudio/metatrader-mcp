# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolArray ](imtconsymbolarray.md "IMTConSymbolArray")/ Clear | [](imtconsymbolarray_assign.md "Assign") [](imtconsymbolarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolArray::Clear
Clear an object.
C++
MTAPIRES IMTConSymbolArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbolArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all field values ​and removes embedded objects.