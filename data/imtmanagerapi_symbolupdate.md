# SymbolUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Symbols ](imtmanagerapi_config_symbol.md "Symbols")/ SymbolUpdate | [](imtmanagerapi_symbolunsubscribe.md "SymbolUnsubscribe") [](imtmanagerapi_symbolupdatebatch.md "SymbolUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SymbolUpdate
Update symbol configuration.
C++
MTAPIRES IMTManagerAPI::SymbolUpdate( IMTConSymbol* symbol // Symbol configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.SymbolUpdate( CIMTConSymbol symbol // Symbol configuration object )  
---  
Python
ManagerAPI.SymbolUpdate( symbol // Symbol configuration object )  
---  
Parameters
symbol
[in] An object of the symbol configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can only be added or updated from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
Before adding, the correctness of the account is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.
To be able to work with this method, the manager needs to have the [IMTConManager::RIGHT_SYMBOL_DETAILS](imtconmanager_enum.htm#enmanagerrights) permission.
Only the following symbol parameters can be changed via the manager interface:
  * [ExecMode](imtconsymbol_execmode.md "ExecMode")
  * [Color](imtconsymbol_color.md "Color")
  * [StopsLevel](imtconsymbol_stopslevel.md "StopsLevel")
  * [SpreadBalance](imtconsymbol_spreadbalance.md "SpreadBalance")
  * [SpreadDiff](imtconsymbol_spreaddiff.md "SpreadDiff")
  * [SpreadDiffBalance](imtconsymbol_spreaddiffbalance.md "SpreadDiffBalance")

All other changes will be ignored.