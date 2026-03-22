# PluginGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Plugins ](imtmanagerapi_config_plugin.md "Plugins")/ PluginGet | [](imtmanagerapi_pluginnext.md "PluginNext") [](imtmanagerapi_config_manager.md "Managers") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PluginGet
Get the plugin configuration by the name.
C++
MTAPIRES IMTManagerAPI::PluginGet( LPCWSTR name, // Plugin configuration name IMTConPlugin* plugin // An object of a plugin configuration )  
---  
.NET
MTRetCode CIMTManagerAPI.PluginGet( string name, // Plugin configuration name CIMTConPlugin plugin // An object of a plugin configuration )  
---  
Python
ManagerAPI.PluginGet( name # Plugin configuration name )  
---  
Parameters
name
[in] Name of the plugin configuration. The [IMTConPlugin::Name](imtconplugin_name.md "Name") value is used as the name.
plugin
[out] An object of plugin configuration. The object must first be created using the [IMTManagerAPI::PluginCreate](imtmanagerapi_plugincreate.md "PluginCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies parameters of the specified plugin configuration to the plugin object.