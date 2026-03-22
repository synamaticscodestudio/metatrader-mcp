# PluginModuleGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Plugins ](serverapi_config_plugins.md "Plugins")/ PluginModuleGet | [](imtserverapi_pluginmodulenext.md "PluginModuleNext") [](serverapi_config_datafeeds.md "Data Feeds") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PluginModuleGet
Get the plugin module configuration by the name.
MTAPIRES IMTServerAPI::PluginModuleGet( LPCWSTR name, // The name of the module IMTConPluginModule* module // An object of the plugin module configuration )  
---  
Parameters
name
[in] The name of a plugin module.
module
[out] The plugin module configuration object. The module object must be first created using the [IMTServerAPI::PluginModuleCreate](imtserverapi_pluginmodulecreate.md "PluginModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConPluginModule::Name](imtconpluginmodule_name.md "Name") value is used as the name.
This method allows getting configurations of plugin module created for the server where the plugin is running.
IMTServerAPI::PluginModuleGet
Get the plugin module configuration by the name considering the server.
MTAPIRES IMTServerAPI::PluginModuleGet( UINT64 server, // Server ID LPCWSTR name, // The name of the module IMTConPluginModule* module // An object of the plugin module configuration )  
---  
Parameters
server
[in] Identifier of the server the configuration of plugin module is created for.
name
[in] The name of a plugin module.
module
[out] The plugin module configuration object. The module object must be first created using the [IMTServerAPI::PluginModuleCreate](imtserverapi_pluginmodulecreate.md "PluginModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConPluginModule::Name](imtconpluginmodule_name.md "Name") value is used as the name.