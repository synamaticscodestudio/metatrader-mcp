# SymbolDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolDelete | [](imtadminapi_symbolupdatebatch.md "SymbolUpdateBatch") [](imtadminapi_symboldeletebatch.md "SymbolDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolDelete
Delete a symbol configuration by the index.
C++
MTAPIRES IMTAdminAPI::SymbolDelete( const UINT pos // Position of the configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.SymbolDelete( uint pos // Position of the configuration )  
---  
Python
AdminAPI.SymbolDelete( int pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
IMTAdminAPI::SymbolDelete
Delete a symbol configuration by the index or name.
C++
MTAPIRES IMTAdminAPI::SymbolDelete( LPCWSTR name // Symbol name )  
---  
.NET
MTRetCode CIMTAdminAPI.SymbolDelete( string name // Symbol name )  
---  
Python
AdminAPI.SymbolDelete( str name # Symbol name )  
---  
Parameters
name
[in] Symbol name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.