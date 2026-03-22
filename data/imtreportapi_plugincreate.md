# PluginCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Plugins ](imtreportapi_config_plugin.md "Functions")/ PluginCreate | [](imtreportapi_config_plugin.md "Functions") [](imtreportapi_pluginmodulecreate.md "PluginModuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::PluginCreate
Create an object of the plugin configuration.
IMTConPlugin* IMTReportAPI::PluginCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConPlugin](imtconplugin.md "IMTConPlugin") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConPlugin::Release](imtconplugin_release.md "Release") method of this object.