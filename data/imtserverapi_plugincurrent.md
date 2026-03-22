# PluginCurrent (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Plugins ](serverapi_config_plugins.md "Plugins")/ PluginCurrent | [](imtserverapi_pluginunsubscribe.md "PluginUnsubscribe") [](imtserverapi_pluginadd.md "PluginAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PluginCurrent
Get the configuration of the current plugin.
MTAPIRES IMTServerAPI::PluginCurrent( IMTConPlugin* plugin // An object of a plugin configuration )  
---  
Parameters
plugin
[out] An object of plugin configuration. The plugin object must be first created using the [IMTServerAPI::PluginCreate](imtserverapi_plugincreate.md "PluginCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of the current plugin to the plugin object.