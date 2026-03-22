# LeverageUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Floating Margin ](imtmanagerapi_config_leverage.md "Floating Margin")/ LeverageUnsubscribe | [](imtmanagerapi_leveragesubscribe.md "LeverageSubscribe") [](imtmanagerapi_leveragetotal.md "LeverageTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::LeverageUnsubscribe
Unsubscribe from events and hooks related to a floating margin configuration.
C++
MTAPIRES IMTManagerAPI::LeverageUnsubscribe( IMTConLeverageSink* sink // Pointer to the IMTConLeverageSink object )  
---  
C++
MTRetCode CIMTManagerAPI.LeverageUnsubscribe( CIMTConLeverageSink sink // The CIMTConLeverageSink object )  
---  
Python
ManagerAPI.LeverageUnsubscribe( sink # The IMTConLeverageSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements the [IMTConLeverageSink](imtconleveragesink.md "IMTConLeverageSink") interface.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
This method is a counterpart to the [IMTAdminAPI::LeverageSubscribe](imtadminapi_leveragesubscribe.md "LeverageSubscribe") method. When attempting to unsubscribe from an interface that was not previously subscribed, the error [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.