# PluginModuleGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Plugins ](imtadminapi_config_plugin.md "Functions")/ PluginModuleGet | [](imtadminapi_pluginmodulenext.md "PluginModuleNext") [](imtadminapi_config_datafeed.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PluginModuleGet
Get the plugin module configuration by the name.
C++
MTAPIRES IMTAdminAPI::PluginModuleGet( const UINT64 server_id, // Plugin ID LPCWSTR name, // The name of the plugin module IMTConPluginModule* module // An object of a plugin configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.PluginModuleGet( ulong server_id, // Plugin ID string name, // The name of the plugin module CIMTConPluginModule module // An object of a plugin configuration )  
---  
Python
AdminAPI.PluginModuleGet( server_id, # Plugin ID name # The name of the plugin module )  
---  
Parameters
server_id
[in] The identifier of the server for which we get the plugin module configuration. The [IMTConServer::Id](imtconserver_id.md "Id") value is used as the identifier.
name
[in] Name of the plugin module. The [IMTConPluginModule::Module()](imtconpluginmodule_module.md "Module") value is used as the name..
module
[out] The plugin module configuration object. The module object must be first created using the [IMTAdminAPI::PluginModuleCreate](imtadminapi_pluginmodulecreate.md "PluginModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.