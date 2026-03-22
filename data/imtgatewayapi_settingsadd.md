# SettingsAdd (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ User Settings ](imtgatewayapi_settings.md "Custom Settings")/ SettingsAdd | [](imtgatewayapi_settings.md "Custom Settings") [](imtgatewayapi_settingsupdate.md "SettingsUpdate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SettingsAdd
Add a setting.
C++
MTAPIRES IMTGatewayAPI::SettingsAdd( const IMTConParam* param // Setting object )  
---  
.NET
MTRetCode CIMTGatewayAPI.SettingsAdd( CIMTConParam param // Setting object )  
---  
Parameters
param
[in] [Setting object](imtconparam.md "IMTConParam").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A setting object must be created using the method [IMTGatewayAPI::FeederParamCreate](imtgatewayapi_feederparamcreate.md "FeederParamCreate") or [IMTGatewayAPI::GatewayParamCreate](imtgatewayapi_gatewayparamcreate.md "GatewayParamCreate"). Further, assign a name and a value to the param object using methods [IMTConParam::Name](imtconparam_name.md "Name") and [IMTConParamValue](imtconparam_value.md "Value") respectively.
The names of the settings are not unique. You can add an unlimited number of parameters with the same name in the file settings.dat.
A setting is added at the end of the settings.dat file.