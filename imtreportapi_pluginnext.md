# PluginNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Plugins ](imtreportapi_config_plugin.md "Functions")/ PluginNext | [](imtreportapi_plugintotal.md "PluginTotal") [](imtreportapi_pluginget.md "PluginGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::PluginNext
Get the plugin configuration by the index.
MTAPIRES IMTReportAPI::PluginNext( const UINT pos, // Position of the configuration IMTConPlugin* plugin // An object of a plugin configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
plugin
[out] An object of plugin configuration. The plugin object must be first created using the [IMTReportAPI::PluginCreate](imtreportapi_plugincreate.md "PluginCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a plugin with a specified index to the plugin object.