# PluginModuleCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Plugins ](imtreportapi_config_plugin.md "Functions")/ PluginModuleCreate | [](imtreportapi_plugincreate.md "PluginCreate") [](imtreportapi_pluginparamcreate.md "PluginParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::PluginModuleCreate
Create an object of the plugin module configuration.
IMTConPluginModule* IMTReportAPI::PluginModuleCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConPluginModule](imtconpluginmodule.md "IMTConPluginModule") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConPluginModule::Release](imtconpluginmodule_release.md "Release") of this object.