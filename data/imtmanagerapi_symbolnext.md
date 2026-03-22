# SymbolNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Symbols ](imtmanagerapi_config_symbol.md "Symbols")/ SymbolNext | [](imtmanagerapi_symboltotal.md "SymbolTotal") [](imtmanagerapi_symbolget.md "SymbolGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SymbolNext
Get the symbol configuration by the index.
C++
MTAPIRES IMTManagerAPI::SymbolNext( const UINT pos, // Position of the configuration IMTConSymbol* symbol // An object of the symbol configuration )  
---  
.NET
MTRetCode CIMTManagerAPI.SymbolNext( uint pos, // Position of the configuration CIMTConSymbol obj // An object of the symbol configuration )  
---  
Python
ManagerAPI.SymbolNext( int pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTManagerAPI::SymbolCreate](imtmanagerapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a symbol with a specified index to the symbol object. The method is valid only if the [IMTManagerAPI::PUMP_MODE_SYMBOLS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.