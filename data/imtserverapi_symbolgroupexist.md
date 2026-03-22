# SymbolGroupExist (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Symbols ](serverapi_config_symbol.md "Symbols")/ SymbolGroupExist | [](imtserverapi_symbolgroupnext.md "SymbolGroupNext") [](serverapi_config_spread.md "Spreads") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SymbolGroupExist
Check the presence of a subgroup of symbols on the trading server.
MTAPIRES IMTServerAPI::SymbolGroupExist( LPCWSTR name // the name of the symbol subgroup )  
---  
Parameters
name
[in] The name of the subgroup of symbols, with the path.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.