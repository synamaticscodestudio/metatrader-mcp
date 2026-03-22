# LeverageSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Floating Margin ](imtmanagerapi_config_leverage.md "Floating Margin")/ LeverageSubscribe | [](imtmanagerapi_leveragetiercreate.md "LeverageTierCreate") [](imtmanagerapi_leverageunsubscribe.md "LeverageUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::LeverageSubscribe
Subscribe to events and hooks related to a floating margin configuration.
C++
MTAPIRES IMTManagerAPI::LeverageSubscribe( IMTConLeverageSink* sink // Pointer to the IMTConLeverageSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.LeverageSubscribe( CIMTConLeverageSink sink // The CIMTConLeverageSink object )  
---  
Python
ManagerAPI.LeverageSubscribe( sink # The IMTConLeverageSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements the [IMTConLeverageSink](imtconleveragesink.md "IMTConLeverageSink") interface.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is implemented in a thread-safe manner. The same [IMTConLeverageSink](imtconleveragesink.md "IMTConLeverageSink") interface cannot be subscribed to an event twice; in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object pointed by 'sink' must remain in memory (must not be removed) until [IMTManagerAPI::LeverageUnsubscribe](imtmanagerapi_leverageunsubscribe.md "LeverageUnsubscribe") is called or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.