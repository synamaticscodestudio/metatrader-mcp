# HistorySyncUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ History Synchronization ](imtadminapi_config_historysync.md "Functions")/ HistorySyncUpdate | [](imtadminapi_historysyncstart.md "HistorySyncStart") [](imtadminapi_historysyncupdatebatch.md "HistorySyncUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::HistorySyncUpdate
Add or update of a configuration of price data synchronization.
C++
MTAPIRES IMTAdminAPI::HistorySyncUpdate( IMTConHistorySync* config // An object of configuration of price data synchronization )  
---  
.NET
MTRetCode CIMTAdminAPI.HistorySyncUpdate( CIMTConHistorySync config // An object of configuration of price data synchronization )  
---  
Python
AdminAPI.HistorySyncUpdate( config # An object of configuration of price data synchronization )  
---  
Parameters
config
[in] An object of configuration of price data synchronization.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be added or updated only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.