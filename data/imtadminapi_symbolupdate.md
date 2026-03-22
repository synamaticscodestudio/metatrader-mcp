# SymbolUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolUpdate | [](imtadminapi_symbolunsubscribe.md "SymbolUnsubscribe") [](imtadminapi_symbolupdatebatch.md "SymbolUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolUpdate
Add or update a symbol configuration.
C++
MTAPIRES IMTAdminAPI::SymbolUpdate( IMTConSymbol* symbol // An object of the symbol configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.SymbolUpdate( CIMTConSymbol symbol // An object of the symbol configuration )  
---  
Python
AdminAPI.SymbolUpdate( symbol # An object of the symbol configuration )  
---  
Parameters
symbol
[in] An object of the symbol configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be added or updated only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.