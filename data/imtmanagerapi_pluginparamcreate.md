# PluginParamCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Plugins ](imtmanagerapi_config_plugin.md "Plugins")/ PluginParamCreate | [](imtmanagerapi_pluginmodulecreate.md "PluginModuleCreate") [](imtmanagerapi_pluginupdate.md "PluginUpdate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PluginParamCreate
Create an object of the plugin parameter.
C++
IMTConParam* IMTManagerAPI::PluginParamCreate()  
---  
.NET
CIMTConParam CIMTManagerAPI.PluginParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.