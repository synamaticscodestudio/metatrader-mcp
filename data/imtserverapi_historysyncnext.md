# HistorySyncNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ History Synchronization ](serverapi_config_historysync.md "History Synchronization")/ HistorySyncNext | [](imtserverapi_historysynctotal.md "HistorySyncTotal") [](serverapi_config_gateway.md "Gateways") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistorySyncNext
Get a configuration of price data synchronization based on its index.
MTAPIRES IMTServerAPI::HistorySyncNext( const UINT pos, // Position of the configuration IMTConHistorySync* config // An object of configuration of price data synchronization )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] An object of configuration of price data synchronization. The config object must first be created using the [IMTServerAPI::HistorySyncCreate](imtserverapi_historysynccreate.md "HistorySyncCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the synchronization configuration entry with a specified index to the config object.