# SymbolCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolCreate | [](imtadminapi_config_symbol.md "Functions") [](imtadminapi_symbolsessioncreate.md "SymbolSessionCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolCreate
Create an object of the symbol configuration.
C++
IMTConSymbol* IMTAdminAPI::SymbolCreate()  
---  
.NET
CIMTConSymbol CIMTAdminAPI.SymbolCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object.