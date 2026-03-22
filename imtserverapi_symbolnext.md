# SymbolNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Symbols ](serverapi_config_symbol.md "Symbols")/ SymbolNext | [](imtserverapi_symboltotal.md "SymbolTotal") [](imtserverapi_symbolget.md "SymbolGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SymbolNext
Get the symbol configuration by the index.
MTAPIRES IMTServerAPI::SymbolNext( const UINT pos, // Position of the configuration IMTConSymbol* symbol // An object of the symbol configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTServerAPI::SymbolCreate](imtserverapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a symbol with a specified index to the symbol object.