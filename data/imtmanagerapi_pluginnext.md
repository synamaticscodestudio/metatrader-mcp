# PluginNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Plugins ](imtmanagerapi_config_plugin.md "Plugins")/ PluginNext | [](imtmanagerapi_plugintotal.md "PluginTotal") [](imtmanagerapi_pluginget.md "PluginGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PluginNext
Get the plugin configuration by the index.
C++
MTAPIRES IMTManagerAPI::PluginNext( const UINT pos, // Position of the configuration IMTConPlugin* plugin // An object of a plugin configuration )  
---  
.NET
MTRetCode CIMTManagerAPI.PluginNext( uint  pos, // Position of the configuration CIMTConPlugin plugin // An object of a plugin configuration )  
---  
Python
ManagerAPI.PluginNext( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
plugin
[out] An object of plugin configuration. The created object must be deleted by calling the [IMTManagerAPI::PluginCreate](imtmanagerapi_plugincreate.md "PluginCreate") method of this object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a plugin with a specified index to the plugin object.