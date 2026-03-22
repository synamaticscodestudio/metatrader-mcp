# PluginUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Plugins ](imtmanagerapi_config_plugin.md "Plugins")/ PluginUpdate | [](imtmanagerapi_pluginparamcreate.md "PluginParamCreate") [](imtmanagerapi_plugintotal.md "PluginTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PluginUpdate
Update a plugin configuration.
C++
MTAPIRES IMTManagerAPI::PluginUpdate( IMTConPlugin* plugin // An object of a plugin configuration )  
---  
.NET
MTRetCode CIMTManagerAPI.PluginUpdate( CIMTConPlugin plugin // An object of a plugin configuration )  
---  
Python
ManagerAPI.PluginUpdate( plugin # An object of a plugin configuration )  
---  
Parameters
plugin
[in] An object of plugin configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.
To be able to modify plugin configurations, the pumping mode IMTManagerAPI::PUMP_MODE_PLUGINS must be enabled. Additionally the plugin must have the [IMTConPlugin::PLUGIN_FLAG_MAN_CONFIG](imtconplugin_enum.htm#enpluginflags) flag enabled, and the manager account must have the [IMTConManager::RIGHT_CFG_PLUGINS](imtconmanager_enum.htm#enmanagerrights) permission granted.