# PluginModuleNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Plugins ](imtreportapi_config_plugin.md "Functions")/ PluginModuleNext | [](imtreportapi_pluginmoduletotal.md "PluginModuleTotal") [](imtreportapi_pluginmoduleget.md "PluginModuleGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::PluginModuleNext
Get a plugin module by the index.
MTAPIRES IMTReportAPI::PluginModuleNext( const UINT pos, // Position of the configuration IMTConPluginModule* module // An object of the plugin module configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
module
[out] The plugin module configuration object. The module object must be first created using the [IMTReportAPI::PluginModuleCreate](imtreportapi_pluginmodulecreate.md "PluginModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies a plugin configuration with a specified index to the module object.