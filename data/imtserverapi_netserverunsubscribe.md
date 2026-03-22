# NetServerUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Network ](serverapi_config_network.md "Network")/ NetServerUnsubscribe | [](imtserverapi_netserversubscribe.md "NetServerSubscribe") [](imtserverapi_netserveradd.md "NetServerAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NetServerUnsubscribe
Unsubscribe from events and hooks associated with the configuration of the platform components.
MTAPIRES IMTServerAPI::NetServerUnsubscribe( IMTConServerSink* sink // A pointer to the IMTConServerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConServerSink](imtconserversink.md "IMTConServerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::NetServerSubscribe](imtserverapi_netserversubscribe.md "NetServerSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.