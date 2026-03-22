# SymbolUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Symbols ](imtmanagerapi_config_symbol.md "Symbols")/ SymbolUpdateBatch | [](imtmanagerapi_symbolupdate.md "SymbolUpdate") [](imtmanagerapi_symboltotal.md "SymbolTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SymbolUpdateBatch
Update multiple symbol configurations.
C++
MTAPIRES IMTManagerAPI::SymbolUpdateBatch( IMTConSymbol**  configs, // Array of configurations const UINT config_total, // Number of configurations in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTManagerAPI.SymbolUpdateBatch( CIMTConSymbol[]  configs, // Array of configurations MTRetCode[] results // Array of results )  
---  
Python
ManagerAPI.SymbolUpdateBatch( configs # Array of configurations )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to add/update.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of each configuration applying on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful change sending to a server; change applying results are passed in the 'results' parameter.
Note
A configuration can only be added or updated from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
Before adding, the correctness of the account is checked. If an entry is incorrect, the [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") error code is added to the 'results' array of this entry.
To be able to work with this method, the manager needs to have the [IMTConManager::RIGHT_SYMBOL_DETAILS](imtconmanager_enum.htm#enmanagerrights) permission.
Only the following symbol parameters can be changed via the manager interface:
  * [ExecMode](imtconsymbol_execmode.md "ExecMode")
  * [Color](imtconsymbol_color.md "Color")
  * [StopsLevel](imtconsymbol_stopslevel.md "StopsLevel")
  * [SpreadBalance](imtconsymbol_spreadbalance.md "SpreadBalance")
  * [SpreadDiff](imtconsymbol_spreaddiff.md "SpreadDiff")
  * [SpreadDiffBalance](imtconsymbol_spreaddiffbalance.md "SpreadDiffBalance")

All other changes will be ignored.