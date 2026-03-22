# PluginNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Plugins ](serverapi_config_plugins.md "Plugins")/ PluginNext | [](imtserverapi_plugintotal.md "PluginTotal") [](imtserverapi_pluginget.md "PluginGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PluginNext
Get the plugin configuration by the index.
MTAPIRES IMTServerAPI::PluginNext( const UINT pos, // Position of the configuration IMTConPlugin* plugin // An object of a plugin configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
plugin
[out] An object of plugin configuration. The plugin object must be first created using the [IMTServerAPI::PluginCreate](imtserverapi_plugincreate.md "PluginCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a plugin with a specified index to the plugin object.