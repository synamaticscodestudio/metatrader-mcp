# SettingsNext (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ User Settings ](imtgatewayapi_settings.md "Custom Settings")/ SettingsNext | [](imtgatewayapi_settingstotal.md "SettingsTotal") [](imtgatewayapi_settingsget.md "SettingsGet") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SettingsNext
Get a setting by its position.
C++
MTAPIRES IMTGatewayAPI::SettingsNext( const UINT pos, // Setting position IMTConParam* param // Setting object )  
---  
.NET
MTRetCode CIMTGatewayAPI.SettingsNext( uint pos, // Setting position CIMTConParam param // Setting object )  
---  
Parameters
pos
[in] The position of a setting in the settings.dat file, starting with 0.
param
[out] [An object of the setting](imtconparam.md "IMTConParam"). The param object must first be created using the method [IMTGatewayAPI::FeederParamCreate](imtgatewayapi_feederparamcreate.md "FeederParamCreate") or [IMTGatewayAPI::GatewayParamCreate](imtgatewayapi_gatewayparamcreate.md "GatewayParamCreate").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.