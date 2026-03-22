# FeederSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Data Feeds ](serverapi_config_datafeeds.md "Data Feeds")/ FeederSubscribe | [](imtserverapi_feedertranslatecreate.md "FeederTranslateCreate") [](imtserverapi_feederunsubscribe.md "FeederUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FeederSubscribe
Subscribe to events and hooks associated with the configuration of data feeds.
MTAPIRES IMTServerAPI::FeederSubscribe( IMTConFeederSink* sink // A pointer to the IMTConFeederSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConFeederSink](imtconfeedersink.md "IMTConFeederSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConFeederSink](imtconfeedersink.md "IMTConFeederSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::FeederUnsubscribe](imtserverapi_feederunsubscribe.md "FeederUnsubscribe") or until the plugin is deleted.