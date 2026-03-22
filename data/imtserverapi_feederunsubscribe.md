# FeederUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Data Feeds ](serverapi_config_datafeeds.md "Data Feeds")/ FeederUnsubscribe | [](imtserverapi_feedersubscribe.md "FeederSubscribe") [](imtserverapi_feederadd.md "FeederAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FeederUnsubscribe
Unsubscribe from events and hooks associated with the configuration of data feeds.
MTAPIRES IMTServerAPI::FeederUnsubscribe( IMTConFeederSink* sink // A pointer to the IMTConFeederSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConFeederSink](imtconfeedersink.md "IMTConFeederSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::FeederSubscribe](imtserverapi_feedersubscribe.md "FeederSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.