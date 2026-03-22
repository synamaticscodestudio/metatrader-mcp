# PluginModuleNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Plugins ](imtadminapi_config_plugin.md "Functions")/ PluginModuleNext | [](imtadminapi_pluginmoduletotal.md "PluginModuleTotal") [](imtadminapi_pluginmoduleget.md "PluginModuleGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PluginModuleNext
Get a plugin module by the index.
C++
MTAPIRES IMTAdminAPI::PluginModuleNext( const UINT pos, // Position of the configuration IMTConPluginModule* module // An object of the plugin module configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.PluginModuleNext( uint pos, // Position of the configuration CIMTConPluginModule module // An object of the plugin module configuration )  
---  
Python
AdminAPI.PluginModuleNext( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
module
[out] The plugin module configuration object. The module object must be first created using the [IMTAdminAPI::PluginModuleCreate](imtadminapi_pluginmodulecreate.md "PluginModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies a plugin configuration with a specified index to the module object.