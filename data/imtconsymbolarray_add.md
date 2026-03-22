# Add (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolArray ](imtconsymbolarray.md "IMTConSymbolArray")/ Add | [](imtconsymbolarray_clear.md "Clear") [](imtconsymbolarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolArray::Add
Add a symbol object to the end of an array.
C++
MTAPIRES IMTConSymbolArray::Add( IMTConSymbol* record // Symbol object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbolArray.Add( CIMTConSymbol record // Symbol object )  
---  
Parameters
record
[in] [IMTConSymbol](imtconsymbol.md "IMTConSymbol") symbol object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, control over the lifetime of the 'record' object is transferred to the array object. Thus, when deleting an array object (by calling [IMTConSymbolArray::Release](imtconsymbolarray_release.md "Release")), an earlier inserted object will be automatically deleted.
In turn, the deletion of a newly inserted object will cause the pointer stored within the array object to become invalid, and therefore its call (also when deleting the array object) will cause the application to crash.
Please be sure to never add a link to one and the same object within an array, as this will lead to a crash during memory release.
IMTConSymbolArray::Add
Add an object of the groups array to the end of an array.
C++
MTAPIRES IMTConSymbolArray::Add( IMTConSymbolArray* array // Array of symbols to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbolArray.Add( CIMTConSymbolArray array // Array of symbols to be added )  
---  
Parameters
array
[in] Symbols array object [IMTConSymbolArray](imtconsymbolarray.md "IMTConSymbolArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers from the 'array' object to the end of the current array and clears the 'array' object.
After a successful method call, control of the objects previously owned by the 'array' object is transfered to the current array object. The 'array' object will be cleared (calling [IMTConSymbolArray::Total](imtconsymbolarray_total.md "Total") will return 0). When deleting the current array object (call of [IMTConSymbolArray::Release](imtconsymbolarray_release.md "Release")), earlier inserted objects will be automatically deleted.
In turn, the deletion of a newly inserted object will cause the pointer stored within the current array object to become invalid, and therefore its call (also when deleting the array object) will cause the application to crash. Use the [IMTConSymbolArray::Delete](imtconsymbolarray_delete.md "Delete") method to correctly delete the element.
Please be sure to never add a link to one and the same object within an array, as this will lead to a crash during memory release.