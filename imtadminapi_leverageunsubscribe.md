# LeverageUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Floating Margin ](imtadminapi_config_leverage.md "Floating Margin")/ LeverageUnsubscribe | [](imtadminapi_leveragesubscribe.md "LeverageSubscribe") [](imtadminapi_leverageupdate.md "LeverageUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LeverageUnsubscribe
Unsubscribe from events and hooks related to a floating margin configuration.
C++
MTAPIRES IMTAdminAPI::LeverageUnsubscribe( IMTConLeverageSink* sink // Pointer to the IMTConLeverageSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.LeverageUnsubscribe( CIMTConLeverageSink sink // The CIMTConLeverageSink object )  
---  
Python
AdminAPI.LeverageUnsubscribe( sink # The IMTConLeverageSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements the [IMTConLeverageSink](imtconleveragesink.md "IMTConLeverageSink") interface.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
This method is a counterpart to the [IMTAdminAPI::LeverageSubscribe](imtadminapi_leveragesubscribe.md "LeverageSubscribe") method. When attempting to unsubscribe from an interface that was not previously subscribed, the error [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.