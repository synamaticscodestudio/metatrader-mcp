# HistorySyncSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ History Synchronization ](serverapi_config_historysync.md "History Synchronization")/ HistorySyncSubscribe | [](imtserverapi_historysynccreate.md "HistorySyncCreate") [](imtserverapi_historysyncunsubscribe.md "HistorySyncUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistorySyncSubscribe
Subscribe to events and hooks associated with the configuration of price data synchronization.
MTAPIRES IMTServerAPI::HistorySyncSubscribe( IMTConHistorySyncSink* sink // A pointer to the IMTConHistorySyncSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConHistorySyncSink](imtconhistorysyncsink.md "IMTConHistorySyncSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConHistorySyncSink](imtconhistorysyncsink.md "IMTConHistorySyncSink") cannot subscribe to events twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::HistorySyncUnsubscribe](imtserverapi_historysyncunsubscribe.md "HistorySyncUnsubscribe") or until the plugin is deleted.