# CommonSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Common ](serverapi_config_common.md "Common")/ CommonSubscribe | [](imtserverapi_commoncreateagreement.md "CommonCreateAgreement") [](imtserverapi_commonunsubscribe.md "CommonUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommonSubscribe
Subscribe to events and hooks associated with the common configuration of the platform.
MTAPIRES IMTServerAPI::CommonSubscribe( IMTConCommonSink* sink // A pointer to the IMTConCommonSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConCommonSink](imtconcommonsink.md "IMTConCommonSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same [IMTConCommonSink](imtconcommonsink.md "IMTConCommonSink") interface cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::CommonUnsubscribe](imtserverapi_commonunsubscribe.md "CommonUnsubscribe") or until the plugin is deleted.