# LeverageSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Floating Margin ](serverapi_config_leverage.md "Floating Margin")/ LeverageSubscribe | [](imtserverapi_leveragetiercreate.md "LeverageTierCreate") [](imtserverapi_leverageunsubscribe.md "LeverageUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::LeverageSubscribe
Subscribe to events and hooks related to a floating margin configuration.
MTAPIRES IMTServerAPI::LeverageSubscribe( IMTConLeverageSink* sink // Pointer to the IMTConLeverageSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements the [IMTConLeverageSink](imtconleveragesink.md "IMTConLeverageSink") interface.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is implemented in a thread-safe manner. The same [IMTConLeverageSink](imtconleveragesink.md "IMTConLeverageSink") interface cannot be subscribed to an event twice; in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object pointed by 'sink' must remain in memory (must not be deleted) until [IMTServerAPI::LeverageUnsubscribe](imtserverapi_leverageunsubscribe.md "LeverageUnsubscribe") is called or until the plugin is deleted.