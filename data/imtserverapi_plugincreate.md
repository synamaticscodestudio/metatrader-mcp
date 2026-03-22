# PluginCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Plugins ](serverapi_config_plugins.md "Plugins")/ PluginCreate | [](serverapi_config_plugins.md "Plugins") [](imtserverapi_pluginmodulecreate.md "PluginModuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PluginCreate
Create an object of the plugin configuration.
IMTConPlugin* IMTServerAPI::PluginCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConPlugin](imtconplugin.md "IMTConPlugin") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConPlugin::Release](imtconplugin_release.md "Release") method of this object.