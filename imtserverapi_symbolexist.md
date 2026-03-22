# SymbolExist (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Symbols ](serverapi_config_symbol.md "Symbols")/ SymbolExist | [](imtserverapi_symbolget.md "SymbolGet") [](imtserverapi_symbolgroupadd.md "SymbolGroupAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SymbolExist
Check the availability of a symbol for a specified [group](config_group.md "Groups") of clients.
MTAPIRES IMTServerAPI::SymbolExist( const IMTConSymbol* symbol, // An object of the symbol configuration const IMTConGroup* group // An object of the group configuration )  
---  
Parameters
symbol
[in] An object of the symbol configuration.
group
[in] An object of the group configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method checks whether the parameters of a client group allow working with a specified symbol.