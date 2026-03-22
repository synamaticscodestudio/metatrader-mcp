# PluginGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Plugins ](imtreportapi_config_plugin.md "Functions")/ PluginGet | [](imtreportapi_pluginnext.md "PluginNext") [](imtreportapi_pluginmoduletotal.md "PluginModuleTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::PluginGet
Get the plugin configuration by the name.
virtual MTAPIRES IMTReportAPI::PluginGet( const UINT64 server_id, // Server ID LPCWSTR name, // Plugin configuration name IMTConPlugin* plugin // An object of a plugin configuration )  
---  
Parameters
server_id
[in] The identifier of the server for which we get the plugin configuration. The [IMTConServer::Id](imtconserver_id.md "Id") value is used as the identifier.
name
[in] Name of the plugin configuration. The [IMTConPlugin::Name](imtconplugin_name.md "Name") value is used as the name.
plugin
[out] An object of plugin configuration. The object must first be created using the [IMTReportAPI::PluginCreate](imtreportapi_plugincreate.md "PluginCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies parameters of the specified plugin configuration to the plugin object.