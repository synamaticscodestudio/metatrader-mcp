# SymbolNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolNext | [](imtadminapi_symboltotal.md "SymbolTotal") [](imtadminapi_symbolget.md "SymbolGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolNext
Get the symbol configuration by the index.
C++
MTAPIRES IMTAdminAPI::SymbolNext( const UINT pos, // Position of the configuration IMTConSymbol* symbol // An object of the symbol configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.SymbolNext( uint pos, // Position of the configuration CIMTConSymbol symbol // An object of the symbol configuration )  
---  
Python
AdminAPI.SymbolNext( pos, # Position of the configuration symbol # An object of the symbol configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTAdminAPI::SymbolCreate](imtadminapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a symbol with a specified index to the symbol object.