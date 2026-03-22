# LeverageUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Floating Margin ](serverapi_config_leverage.md "Floating Margin")/ LeverageUnsubscribe | [](imtserverapi_leveragesubscribe.md "LeverageSubscribe") [](imtserverapi_leverageadd.md "LeverageAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::LeverageUnsubscribe
Unsubscribe from events and hooks related to a floating margin configuration.
MTAPIRES IMTServerAPI::LeverageUnsubscribe( IMTConLeverageSink* sink // Pointer to the IMTConLeverageSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements the [IMTConLeverageSink](imtconleveragesink.md "IMTConLeverageSink") interface.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
This method is a counterpart to the [IMTServerAPI::LeverageSubscribe](imtserverapi_leveragesubscribe.md "LeverageSubscribe") method. When attempting to unsubscribe from an interface that was not previously subscribed, the error [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.