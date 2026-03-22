# UpdateCopy (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolArray ](imtconsymbolarray.md "IMTConSymbolArray")/ UpdateCopy | [](imtconsymbolarray_update.md "Update") [](imtconsymbolarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolArray::UpdateCopy
Update a symbol at the specified position of an array by copying the parameters of a passed symbol object.
C++
MTAPIRES IMTConSymbolArray::UpdateCopy( const UINT  pos, // Position const IMTConSymbol* record // Symbol object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbolArray.UpdateCopy( uint  pos, // Position CIMTConSymbol record // Symbol object )  
---  
Parameters
pos
[in] Symbol position in the array, starting with 0.
record
[in] Symbol object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method copies the 'record' object to the parameter object at the specified array position.
Unlike the [IMTConSymbolArray::Update](imtconsymbolarray_update.md "Update") method, calling this method does not set any additional conditions for the control of the 'record' object, but it is more resource-intensive, since an additional object is created.