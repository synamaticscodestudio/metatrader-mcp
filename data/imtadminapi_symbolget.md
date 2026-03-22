# SymbolGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolGet | [](imtadminapi_symbolnext.md "SymbolNext") [](imtadminapi_symbolexist.md "SymbolExist") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolGet
Gets the symbol configuration by the name.
C++
MTAPIRES IMTAdminAPI::SymbolGet( LPCWSTR name, // Name of the configuration IMTConSymbol* symbol // An object of the symbol configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.SymbolGet( string name, // Name of the configuration CIMTConSymbol symbol // An object of the symbol configuration )  
---  
Python
AdminAPI.SymbolGet( str name # Name of the configuration )  
---  
ManagerAPI.SymbolGetArray()  
---  
Parameters
name
[in] The name of the configuration.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTAdminAPI::SymbolCreate](imtadminapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConSymbol::Symbol()](imtconsymbol_symbol.md "Symbol") value is used as the name. This method returns a symbol configuration with default trade settings.