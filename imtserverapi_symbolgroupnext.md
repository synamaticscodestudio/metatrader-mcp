# SymbolGroupNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Symbols ](serverapi_config_symbol.md "Symbols")/ SymbolGroupNext | [](imtserverapi_symbolgrouptotal.md "SymbolGroupTotal") [](imtserverapi_symbolgroupexist.md "SymbolGroupExist") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SymbolGroupNext
Get the name of a subgroup of symbols by index.
MTAPIRES IMTServerAPI::SymbolGroupNext( const UINT pos, // position of symbol subgroup MTAPISTR& name // name of the symbol subgroup )  
---  
Parameters
pos
[in] The position of the symbol subgroup starting from 0.
name
[out] The name of the symbol subgroup, including the path.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.