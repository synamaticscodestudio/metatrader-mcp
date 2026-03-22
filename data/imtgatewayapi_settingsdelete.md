# SettingsDelete (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ User Settings ](imtgatewayapi_settings.md "Custom Settings")/ SettingsDelete | [](imtgatewayapi_settingsupdate.md "SettingsUpdate") [](imtgatewayapi_settingsclear.md "SettingsClear") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SettingsDelete
Delete a setting by its position.
C++
MTAPIRES IMTGatewayAPI::SettingsDelete( const UINT pos // Setting position )  
---  
.NET
MTRetCode CIMTGatewayAPI.SettingsDelete( uint  pos // Setting position )  
---  
Parameters
pos
[in] The position of a setting in the settings.dat file, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
IMTGatewayAPI::SettingsDelete
Delete a setting by its name.
C++
MTAPIRES IMTGatewayAPI::SettingsDelete( LPCWSTR name // Setting name )  
---  
.NET
MTRetCode CIMTGatewayAPI.SettingsDelete( string name // Setting name )  
---  
Parameters
name
[in] The name of the setting you want to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method deletes the first found setting with the specified name.
If there is no setting with the specified name, the method returns [MT_RET_OK_NONE](retcodes_successful.md "Successful completion").