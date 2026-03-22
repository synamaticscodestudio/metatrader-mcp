# PluginParamCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Plugins ](imtreportapi_config_plugin.md "Functions")/ PluginParamCreate | [](imtreportapi_pluginmodulecreate.md "PluginModuleCreate") [](imtreportapi_plugintotal.md "PluginTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::PluginParamCreate
Create an object of the plugin parameter.
IMTConParam* IMTReportAPI::PluginParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.