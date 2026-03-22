# NetServerSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Network ](serverapi_config_network.md "Network")/ NetServerSubscribe | [](imtserverapi_netserverbackupfoldercreate.md "NetServerBackupFolderCreate") [](imtserverapi_netserverunsubscribe.md "NetServerUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NetServerSubscribe
Subscribe to events and hooks associated with the configuration of the platform components.
MTAPIRES IMTServerAPI::NetServerSubscribe( IMTConServerSink* sink // A pointer to the IMTConServerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConServerSink](imtconserversink.md "IMTConServerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConServerSink](imtconserversink.md "IMTConServerSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::NetServerUnsubscribe](imtserverapi_netserverunsubscribe.md "NetServerUnsubscribe") or until the plugin is deleted.