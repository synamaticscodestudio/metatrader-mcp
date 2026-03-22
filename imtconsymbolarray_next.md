# Next (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolArray ](imtconsymbolarray.md "IMTConSymbolArray")/ Next | [](imtconsymbolarray_total.md "Total") [](imtconsymbolarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolArray::Next
Get a symbol object by position.
C++
IMTConSymbol* IMTConSymbolArray::Next( const UINT index // Symbol position ) const  
---  
.NET (Gateway/Manager API)
CIMTConSymbol CIMTConSymbolArray.Next( uint index // Symbol position )  
---  
Parameters
index
[in] Symbol position in the array, starting with 0.
Return Value
If successful, the method returns a pointer to the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") symbol object at the corresponding array position. Otherwise, NULL is returned.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when an array object is deleted, the returned pointer becomes invalid.
Deletion of the returned object (by the [IMTConSymbolArray::Release](imtconsymbolarray_release.md "Release") call) will cause the pointer stored inside the array object to become invalid, while an attempt to access it (also, when deleting an array object) will cause the plugin and the server to crash.