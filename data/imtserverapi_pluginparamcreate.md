# PluginParamCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Plugins ](serverapi_config_plugins.md "Plugins")/ PluginParamCreate | [](imtserverapi_pluginmodulecreate.md "PluginModuleCreate") [](imtserverapi_pluginsubscribe.md "PluginSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PluginParamCreate
Create an object of the plugin parameter.
IMTConParam* IMTServerAPI::PluginParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.