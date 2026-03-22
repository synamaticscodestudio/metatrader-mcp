# SymbolCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Symbols ](imtmanagerapi_config_symbol.md "Symbols")/ SymbolCreateArray | [](imtmanagerapi_symbolcreate.md "SymbolCreate") [](imtmanagerapi_symbolsessioncreate.md "SymbolSessionCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SymbolCreateArray
Create a symbols array object.
C++
IMTConSymbolArray* IMTManagerAPI::SymbolCreateArray()  
---  
.NET
CIMTConSymbolArray CIMTManagerAPI.SymbolCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConSymbolArray](imtconsymbolarray.md "IMTConSymbolArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConSymbolArray::Release](imtconsymbolarray_release.md "Release") method of this object.