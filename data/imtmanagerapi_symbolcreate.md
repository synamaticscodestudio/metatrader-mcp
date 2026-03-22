# SymbolCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Symbols ](imtmanagerapi_config_symbol.md "Symbols")/ SymbolCreate | [](imtmanagerapi_config_symbol.md "Symbols") [](imtmanagerapi_symbolcreatearray.md "SymbolCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SymbolCreate
Create an object of the symbol configuration.
C++
IMTConSymbol* IMTManagerAPI::SymbolCreate()  
---  
.NET
CIMTConSymbol CIMTManagerAPI.SymbolCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object.