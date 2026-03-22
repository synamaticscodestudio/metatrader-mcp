# SymbolGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Symbols ](serverapi_config_symbol.md "Symbols")/ SymbolGet | [](imtserverapi_symbolnext.md "SymbolNext") [](imtserverapi_symbolexist.md "SymbolExist") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SymbolGet
Gets the symbol configuration by the name.
MTAPIRES IMTServerAPI::SymbolGet( LPCWSTR name, // Name of the configuration IMTConSymbol* symbol // An object of the symbol configuration )  
---  
Parameters
name
[in] The name of the configuration.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTServerAPI::SymbolCreate](imtserverapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConSymbol::Symbol()](imtconsymbol_symbol.md "Symbol") value is used as the name. This method returns a symbol configuration with default trade settings.
IMTServerAPI::SymbolGet
Get an individual configuration of a symbol for a group by the name of the symbol.
MTAPIRES IMTServerAPI::SymbolGet( LPCWSTR name, // Name of the configuration const IMTConGroup* group, /An object of the group configuration IMTConSymbol* symbol // An object of the symbol configuration )  
---  
Parameters
name
[in] The name of the configuration.
group
[in] An object of the group configuration. The group object must be first created using the [IMTServerAPI::GroupCreate](imtserverapi_groupcreate.md "GroupCreate") method.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTServerAPI::SymbolCreate](imtserverapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConSymbol::Symbol()](imtconsymbol_symbol.md "Symbol") value is used as the name.
This method returns a symbol configuration with trade settings for the specified group.