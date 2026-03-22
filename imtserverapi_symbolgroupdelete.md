# SymbolGroupDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Symbols ](serverapi_config_symbol.md "Symbols")/ SymbolGroupDelete | [](imtserverapi_symbolgroupadd.md "SymbolGroupAdd") [](imtserverapi_symbolgroupshift.md "SymbolGroupShift") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SymbolGroupDelete
Delete a subgroup of symbols by name.
MTAPIRES IMTServerAPI::SymbolGroupDelete( LPCWSTR name // the name of the symbol subgroup )  
---  
Parameters
name
[in] The name of the subgroup of symbols, with the path.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A subgroup is deleted along with all the symbols it contains.
A subgroup can only be deleted from applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.