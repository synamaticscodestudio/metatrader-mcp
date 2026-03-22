# PluginModuleNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Plugins ](serverapi_config_plugins.md "Plugins")/ PluginModuleNext | [](imtserverapi_pluginmoduletotal.md "PluginModuleTotal") [](imtserverapi_pluginmoduleget.md "PluginModuleGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PluginModuleNext
Get a plugin module by the index.
MTAPIRES IMTServerAPI::PluginModuleNext( const UINT pos, // Position of the configuration IMTConPluginModule* module // An object of the plugin module configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
module
[out] The plugin module configuration object. The module object must be first created using the [IMTServerAPI::PluginModuleCreate](imtserverapi_pluginmodulecreate.md "PluginModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies a plugin configuration with a specified index to the module object.