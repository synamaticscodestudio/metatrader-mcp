# Update (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolArray ](imtconsymbolarray.md "IMTConSymbolArray")/ Update | [](imtconsymbolarray_detach.md "Detach") [](imtconsymbolarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolArray::Update
Update a symbol at the specified position of an array.
C++
MTAPIRES IMTConSymbolArray::Update( const UINT pos, // Position IMTConSymbol* record // Symbol object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbolArray.Update( uint pos, // Position CIMTConSymbol record // Symbol object )  
---  
Parameters
pos
[in] Symbol position in the array, starting with 0.
record
[in] [IMTConSymbol](imtconsymbol.md "IMTConSymbol") symbol object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The IMTConSymbolArray::Update method deletes the previous element (by calling [IMTConSymbol::Release](imtconsymbol_release.md "Release")) and replaces it with a new one. After that, the lifetime of a new element is controlled by the array object. Thus, when deleting an array object (by calling IMTConSymbolArray::Release), an earlier inserted object will be automatically deleted.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to be no longer valid. Therefore, accessing this pointer (including access when deleting the array object) will cause crash of the application.
Please be sure to never add a link to one and the same object within an array, as this will lead to a crash during memory release.