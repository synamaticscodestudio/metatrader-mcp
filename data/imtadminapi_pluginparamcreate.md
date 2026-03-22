# PluginParamCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Plugins ](imtadminapi_config_plugin.md "Functions")/ PluginParamCreate | [](imtadminapi_pluginmodulecreate.md "PluginModuleCreate") [](imtadminapi_pluginsubscribe.md "PluginSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PluginParamCreate
Create an object of the plugin parameter.
C++
IMTConParam* IMTAdminAPI::PluginParamCreate()  
---  
.NET
CIMTConParam CIMTAdminAPI.PluginParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.