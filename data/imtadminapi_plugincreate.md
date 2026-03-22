# PluginCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Plugins ](imtadminapi_config_plugin.md "Functions")/ PluginCreate | [](imtadminapi_config_plugin.md "Functions") [](imtadminapi_pluginmodulecreate.md "PluginModuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PluginCreate
Create an object of the plugin configuration.
C++
IMTConPlugin* IMTAdminAPI::PluginCreate()  
---  
.NET
CIMTConPlugin CIMTAdminAPI.PluginCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConPlugin](imtconplugin.md "IMTConPlugin") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConPlugin::Release](imtconplugin_release.md "Release") method of this object.