# HistorySyncShift (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ History Synchronization ](imtadminapi_config_historysync.md "Functions")/ HistorySyncShift | [](imtadminapi_historysyncdeletebatch.md "HistorySyncDeleteBatch") [](imtadminapi_historysynctotal.md "HistorySyncTotal") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::HistorySyncShift
Change the position of the configuration of price data synchronization in the list.
C++
MTAPIRES IMTAdminAPI::HistorySyncShift( const UINT pos, // Position of the configuration const int shift // Shift )  
---  
.NET
MTRetCode CIMTAdminAPI.HistorySyncShift( uint pos, // Position of the configuration int shift // Shift )  
---  
Python
AdminAPI.HistorySyncShift( pos, # Position of the configuration shift # Shift )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
shift
[in] Shift of the configuration relative to its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The position of a configuration can be changed only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.