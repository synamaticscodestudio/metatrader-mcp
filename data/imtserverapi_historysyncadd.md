# HistorySyncAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ History Synchronization ](serverapi_config_historysync.md "History Synchronization")/ HistorySyncAdd | [](imtserverapi_historysyncunsubscribe.md "HistorySyncUnsubscribe") [](imtserverapi_historysyncdelete.md "HistorySyncDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistorySyncAdd
Add or update of a configuration of price data synchronization.
MTAPIRES IMTServerAPI::HistorySyncAdd( IMTConHistorySync* config // An object of configuration of price data synchronization )  
---  
Parameters
config
[in] An object of configuration of price data synchronization.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When calling the method, a check is made whether the entry already exists. If the entry already exists, it is updated, otherwise a new entry is added. A key field for comparison is the address of the synchronization server [IMTConHistorySync::Server()](imtconhistorysync_server.md "Server"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConHisotrySyncSink::OnHistorySyncUpdate](imtconhistorysyncsink_onhistorysyncupdate.md "OnHistorySyncUpdate") notification method is not called.
A configuration can be added or updated only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.