# SettingsClear (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ User Settings ](imtgatewayapi_settings.md "Custom Settings")/ SettingsClear | [](imtgatewayapi_settingsdelete.md "SettingsDelete") [](imtgatewayapi_settingstotal.md "SettingsTotal") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SettingsClear
Delete all settings.
C++
MTAPIRES IMTGatewayAPI::SettingsClear()  
---  
.NET
MTRetCode CIMTGatewayAPI.SettingsClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method deletes all settings and the settings.dat file.