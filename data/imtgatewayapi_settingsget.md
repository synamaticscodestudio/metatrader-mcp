# SettingsGet (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ User Settings ](imtgatewayapi_settings.md "Custom Settings")/ SettingsGet | [](imtgatewayapi_settingsnext.md "SettingsNext") [](imtgatewaysink.md "Event Interface") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SettingsGet
Get a setting by its name.
C++
MTAPIRES IMTGatewayAPI::SettingsGet( LPCWSTR name, // Setting name IMTConParam* param // Setting object )  
---  
.NET
MTRetCode CIMTGatewayAPI.SettingsGet( string name, // Setting name CIMTConParam param // Setting object )  
---  
Parameters
name
[in] The name of the setting.
param
[out] [An object of the parameter setting](imtconparam.md "IMTConParam"). The param object must first be created using the method [IMTGatewayAPI::FeederParamCreate](imtgatewayapi_feederparamcreate.md "FeederParamCreate") or [IMTGatewayAPI::GatewayParamCreate](imtgatewayapi_gatewayparamcreate.md "GatewayParamCreate").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method returns the first found setting with the specified name.