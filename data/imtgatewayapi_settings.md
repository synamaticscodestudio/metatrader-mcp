# Custom Settings (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface")/ User Settings | [](imtgatewayapi_mailsend.md "MailSend") [](imtgatewayapi_settingsadd.md "SettingsAdd") |
| --- | --- | --- |
| --- | --- |

Custom Settings
The functions described in this section allow managing additional custom settings of gateways and data feeds. These settings are saved in the file settings.dat, which is created in the [working directory](mtgatewaycreatelocal.md "MTGatewayCreateLocal") of the application. The working directory is in the same directory where the executable file of the gateway or data feed is located.
Custom settings are not associated with [configurations of gateways](config_gateway.md "Gateways") and [data feeds](config_datafeeds.md "Data Feeds"). They allow storing data in a local file.  
---  
The following functions are available for working with custom settings:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [SettingsAdd](imtgatewayapi_settingsadd.md "SettingsAdd") | Add a setting. |
| [SettingsUpdate](imtgatewayapi_settingsupdate.md "SettingsUpdate") | Change a setting by its position and name. |
| [SettingsDelete](imtgatewayapi_settingsdelete.md "SettingsDelete") | Delete a setting by its position and name. |
| [SettingsClear](imtgatewayapi_settingsclear.md "SettingsClear") | Delete all settings. |
| [SettingsTotal](imtgatewayapi_settingstotal.md "SettingsTotal") | Get the number of settings. |
| [SettingsNext](imtgatewayapi_settingsnext.md "SettingsNext") | Get a setting by its position. |
| [SettingsGet](imtgatewayapi_settingsget.md "SettingsGet") | Get a setting by its name. |