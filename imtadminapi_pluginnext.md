# PluginNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Plugins ](imtadminapi_config_plugin.md "Functions")/ PluginNext | [](imtadminapi_plugintotal.md "PluginTotal") [](imtadminapi_pluginget.md "PluginGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PluginNext
Get the plugin configuration by the index.
C++
MTAPIRES IMTAdminAPI::PluginNext( const UINT pos, // Position of the configuration IMTConPlugin* plugin // An object of a plugin configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.PluginNext( uint pos, // Position of the configuration CIMTConPlugin plugin // An object of a plugin configuration )  
---  
Python
AdminAPI.PluginNext( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
plugin
[out] An object of plugin configuration. The plugin object must be first created using the [IMTAdminAPI::PluginCreate](imtadminapi_plugincreate.md "PluginCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a plugin with a specified index to the plugin object.