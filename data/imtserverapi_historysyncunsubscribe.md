# HistorySyncUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ History Synchronization ](serverapi_config_historysync.md "History Synchronization")/ HistorySyncUnsubscribe | [](imtserverapi_historysyncsubscribe.md "HistorySyncSubscribe") [](imtserverapi_historysyncadd.md "HistorySyncAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistorySyncUnsubscribe
Unsubscribe from events and hooks associated with the configuration of price data synchronization.
MTAPIRES IMTServerAPI::HistorySyncUnsubscribe( IMTConHistorySyncSink* sink // A pointer to the IMTConHistorySyncSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConHistorySyncSink](imtconhistorysyncsink.md "IMTConHistorySyncSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::HistorySyncSubscribe](imtserverapi_historysyncsubscribe.md "HistorySyncSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.