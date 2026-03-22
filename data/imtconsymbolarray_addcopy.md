# AddCopy (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolArray ](imtconsymbolarray.md "IMTConSymbolArray")/ AddCopy | [](imtconsymbolarray_add.md "Add") [](imtconsymbolarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolArray::AddCopy
Add a copy of a symbol object to the end of an array.
C++
MTAPIRES IMTConSymbolArray::AddCopy( const IMTConSymbol* record // Symbol to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbolArray.AddCopy( CIMTConSymbol record // Symbol to be added )  
---  
Parameters
record
[in] [IMTConSymbol](imtconsymbol.md "IMTConSymbol") symbol object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the 'record' object and places it to the end of the array.
Unlike [IMTConSymbolArray::Add(IMTConSymbol* record)](imtconsymbolarray_add.md "Add"), calling this method does not set any additional conditions for the control of the daily object, but it is more resource-intensive, since an additional object is created.
IMTConSymbolArray::AddCopy
Add copies of symbol objects to an array.
C++
MTAPIRES IMTConSymbolArray::AddCopy( const IMTConSymbolArray* array // Array of symbols to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbolArray.AddCopy( CIMTConSymbolArray array // Array of symbols to be added )  
---  
Parameters
array
[in] Symbols array object [IMTConSymbolArray](imtconsymbolarray.md "IMTConSymbolArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of objects belonging to the 'array' object, and inserts them at the end of the current array.
Unlike [IMTConSymbolArray::Add(IMTConSymbolArray* array)](imtconsymbolarray_add.md "Add"), this method call does no change the original 'array' object but it is more resource intensive as additional objects are created.