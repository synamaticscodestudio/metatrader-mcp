# SettingsUpdate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ User Settings ](imtgatewayapi_settings.md "Custom Settings")/ SettingsUpdate | [](imtgatewayapi_settingsadd.md "SettingsAdd") [](imtgatewayapi_settingsdelete.md "SettingsDelete") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SettingsUpdate
Change a setting at the specified position.
C++
MTAPIRES IMTGatewayAPI::SettingsUpdate( const UINT pos // Setting position const IMTConParam* param // Setting object )  
---  
.NET
MTRetCode CIMTGatewayAPI.SettingsUpdate( uint pos // Setting position CIMTConParam param // Setting object )  
---  
Parameters
pos
[in] The position of a setting in the settings.dat file, starting with 0.
param
[in] [An object of a new setting](imtconparam.md "IMTConParam").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A setting object must be created using the method [IMTGatewayAPI::FeederParamCreate](imtgatewayapi_feederparamcreate.md "FeederParamCreate") or [IMTGatewayAPI::GatewayParamCreate](imtgatewayapi_gatewayparamcreate.md "GatewayParamCreate"). Further, assign a name and a value to the param object using methods [IMTConParam::Name](imtconparam_name.md "Name") and [IMTConParamValue](imtconparam_value.md "Value") respectively.
IMTGatewayAPI::SettingsUpdate
Change a setting by its name.
C++
MTAPIRES IMTGatewayAPI::SettingsUpdate( const IMTConParam* param // Setting object )  
---  
.NET
MTRetCode CIMTGatewayAPI.SettingsUpdate( CIMTConParam param // Setting object )  
---  
Parameters
param
[in] [An object of a new setting](imtconparam.md "IMTConParam"). The name of the setting to modify and the new value to assign to the setting are specified in the object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A setting object must be created using the method [IMTGatewayAPI::FeederParamCreate](imtgatewayapi_feederparamcreate.md "FeederParamCreate") or [IMTGatewayAPI::GatewayParamCreate](imtgatewayapi_gatewayparamcreate.md "GatewayParamCreate"). Further, assign a name and a value to the param object using methods [IMTConParam::Name](imtconparam_name.md "Name") and [IMTConParamValue](imtconparam_value.md "Value") respectively.
The names of the settings are not unique. The method modifies the first found setting with the specified name.
If the setting with the specified name is not found, it will be added at the end of the file.