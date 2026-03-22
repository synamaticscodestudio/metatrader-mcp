# PluginModuleGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Plugins ](imtreportapi_config_plugin.md "Functions")/ PluginModuleGet | [](imtreportapi_pluginmodulenext.md "PluginModuleNext") [](imtreportapi_config_datafeed.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::PluginModuleGet
Get the plugin module configuration by the name.
virtual MTAPIRES IMTReportAPI::PluginModuleGet( const UINT64 server_id, // Plugin ID LPCWSTR name, // The name of the plugin module IMTConPluginModule* module // An object of a plugin configuration )  
---  
Parameters
server_id
[in] The identifier of the server for which we get the plugin module configuration. The [IMTConServer::Id](imtconserver_id.md "Id") value is used as the identifier.
name
[in] Name of the plugin module. The [IMTConPluginModule::Module()](imtconpluginmodule_module.md "Module") value is used as the name..
module
[out] The plugin module configuration object. The module object must be first created using the [IMTReportAPI::PluginModuleCreate](imtreportapi_pluginmodulecreate.md "PluginModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.