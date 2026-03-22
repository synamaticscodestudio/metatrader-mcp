# SymbolGroupDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolGroupDelete | [](imtadminapi_symbolgroupadd.md "SymbolGroupAdd") [](imtadminapi_symbolgroupshift.md "SymbolGroupShift") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolGroupDelete
Remove a subgroup of symbols by name.
C++
MTAPIRES IMTAdminAPI::SymbolGroupDelete( LPCWSTR name // the name of the subgroup of symbols )  
---  
.NET
MTRetCode CIMTAdminAPI.SymbolGroupDelete( string name // the name of the subgroup of symbols )  
---  
Python
AdminAPI.SymbolGroupDelete( str name # the name of the symbol subgroup )  
---  
Parameters
name
[in] The name of the symbol subgroup.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The subgroup is deleted along with all the symbols it contains.
A subgroup can only be deleted from applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.