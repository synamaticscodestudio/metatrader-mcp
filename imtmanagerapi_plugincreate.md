# PluginCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Plugins ](imtmanagerapi_config_plugin.md "Plugins")/ PluginCreate | [](imtmanagerapi_config_plugin.md "Plugins") [](imtmanagerapi_pluginmodulecreate.md "PluginModuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PluginCreate
Create an object of the plugin configuration.
C++
IMTConPlugin* IMTManagerAPI::PluginCreate()  
---  
.NET
CIMTConPlugin CIMTManagerAPI.PluginCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConPlugin](imtconplugin.md "IMTConPlugin") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConPlugin::Release](imtconplugin_release.md "Release") method of this object.