# HistorySyncNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ History Synchronization ](imtadminapi_config_historysync.md "Functions")/ HistorySyncNext | [](imtadminapi_historysynctotal.md "HistorySyncTotal") [](imtadminapi_config_gateway.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::HistorySyncNext
Get a configuration of price data synchronization based on its index.
C++
MTAPIRES IMTAdminAPI::HistorySyncNext( const UINT pos, // Position of the configuration IMTConHistorySync* config // An object of configuration of price data synchronization )  
---  
.NET
MTRetCode CIMTAdminAPI.HistorySyncNext( uint pos, // Position of the configuration CIMTConHistorySync config // An object of configuration of price data synchronization )  
---  
Python
AdminAPI.HistorySyncNext( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] An object of configuration of price data synchronization. The config object must first be created using the [IMTAdminAPI::HistorySyncCreate](imtadminapi_historysynccreate.md "HistorySyncCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the synchronization configuration entry with a specified index to the config object.