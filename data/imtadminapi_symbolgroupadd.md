# SymbolGroupAdd (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolGroupAdd | [](imtadminapi_symbolexist.md "SymbolExist") [](imtadminapi_symbolgroupdelete.md "SymbolGroupDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolGroupAdd
Add a subgroup of symbols.
C++
MTAPIRES IMTAdminAPI::SymbolGroupAdd( LPCWSTR name // the name of the symbol subgroup )  
---  
.NET
MTRetCode CIMTAdminAPI.SymbolGroupAdd( string name // the name of the symbol subgroup )  
---  
Python
AdminAPI.SymbolGroupAdd( str name # the name of the symbol subgroup )  
---  
Parameters
name
[in] The name of the subgroup of symbols, with the path.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A subgroup can only be added from applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.