# PluginModuleCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Plugins ](imtadminapi_config_plugin.md "Functions")/ PluginModuleCreate | [](imtadminapi_plugincreate.md "PluginCreate") [](imtadminapi_pluginparamcreate.md "PluginParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PluginModuleCreate
Create an object of the plugin module configuration.
C++
IMTConPluginModule* IMTAdminAPI::PluginModuleCreate()  
---  
.NET
CIMTConPluginModule CIMTAdminAPI.PluginModuleCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConPluginModule](imtconpluginmodule.md "IMTConPluginModule") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConPluginModule::Release](imtconpluginmodule_release.md "Release") of this object.