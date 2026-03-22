# PluginModuleCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Plugins ](imtmanagerapi_config_plugin.md "Plugins")/ PluginModuleCreate | [](imtmanagerapi_plugincreate.md "PluginCreate") [](imtmanagerapi_pluginparamcreate.md "PluginParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PluginModuleCreate
Create an object of the plugin module configuration.
C++
IMTConPluginModule* IMTManagerAPI::PluginModuleCreate()  
---  
.NET
CIMTConPluginModule CIMTManagerAPI.PluginModuleCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConPluginModule](imtconpluginmodule.md "IMTConPluginModule") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConPluginModule::Release](imtconpluginmodule_release.md "Release") of this object.