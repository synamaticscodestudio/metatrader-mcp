# PluginModuleCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Plugins ](serverapi_config_plugins.md "Plugins")/ PluginModuleCreate | [](imtserverapi_plugincreate.md "PluginCreate") [](imtserverapi_pluginparamcreate.md "PluginParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PluginModuleCreate
Create an object of the plugin module configuration.
IMTConPluginModule* IMTServerAPI::PluginModuleCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConPluginModule](imtconpluginmodule.md "IMTConPluginModule") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMConPluginModule::Release](imtconpluginmodule_release.md "Release") method of this object.