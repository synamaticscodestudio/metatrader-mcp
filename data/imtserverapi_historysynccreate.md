# HistorySyncCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ History Synchronization ](serverapi_config_historysync.md "History Synchronization")/ HistorySyncCreate | [](serverapi_config_historysync.md "History Synchronization") [](imtserverapi_historysyncsubscribe.md "HistorySyncSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistorySyncCreate
Create an object of configuration of price data synchronization.
IMTConHistorySync* IMTServerAPI::HistorySyncCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConHistorySync](imtconhistorysync.md "IMTConHistorySync") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConHistorySync::Release](imtconhistorysync_release.md "Release") method of this object.