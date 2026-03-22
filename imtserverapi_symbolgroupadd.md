# SymbolGroupAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Symbols ](serverapi_config_symbol.md "Symbols")/ SymbolGroupAdd | [](imtserverapi_symbolexist.md "SymbolExist") [](imtserverapi_symbolgroupdelete.md "SymbolGroupDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SymbolGroupAdd
Add a subgroup of symbols.
MTAPIRES IMTServerAPI::SymbolGroupAdd( LPCWSTR name // the name of the symbol subgroup )  
---  
Parameters
name
[in] The name of the subgroup of symbols, with the path.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A subgroup can only be added from applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.