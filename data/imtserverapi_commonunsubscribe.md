# CommonUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Common ](serverapi_config_common.md "Common")/ CommonUnsubscribe | [](imtserverapi_commonsubscribe.md "CommonSubscribe") [](imtserverapi_commonget.md "CommonGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommonUnsubscribe
Unsubscribe from events and hooks associated with the common configuration of the platform.
MTAPIRES IMTServerAPI::CommonUnsubscribe( IMTConCommonSink* sink // A pointer to the IMTConCommonSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConCommonSink](imtconcommonsink.md "IMTConCommonSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::CommonSubscribe](imtserverapi_commonsubscribe.md "CommonSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.