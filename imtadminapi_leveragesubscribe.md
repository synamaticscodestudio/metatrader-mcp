# LeverageSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Floating Margin ](imtadminapi_config_leverage.md "Floating Margin")/ LeverageSubscribe | [](imtadminapi_leveragetiercreate.md "LeverageTierCreate") [](imtadminapi_leverageunsubscribe.md "LeverageUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LeverageSubscribe
Subscribe to events and hooks related to a floating margin configuration.
C++
MTAPIRES IMTAdminAPI::LeverageSubscribe( IMTConLeverageSink* sink // Pointer to the IMTConLeverageSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.LeverageSubscribe( CIMTConLeverageSink sink // The CIMTConLeverageSink object )  
---  
Python
AdminAPI.LeverageSubscribe( sink # The IMTConLeverageSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements the [IMTConLeverageSink](imtconleveragesink.md "IMTConLeverageSink") interface.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is implemented in a thread-safe manner. The same [IMTConLeverageSink](imtconleveragesink.md "IMTConLeverageSink") interface cannot be subscribed to an event twice; in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object pointed by 'sink' must remain in memory (must not be removed) until [IMTAdminAPI::LeverageUnsubscribe](imtadminapi_leverageunsubscribe.md "LeverageUnsubscribe") is called or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.