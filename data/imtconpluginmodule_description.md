# Description (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPluginModule ](imtconpluginmodule.md "IMTConPluginModule")/ Description | [](imtconpluginmodule_vendor.md "Vendor") [](imtconpluginmodule_module.md "Module") |
| --- | --- | --- |
| --- | --- |

IMTConPluginModule::Description
Get the description of a plugin module.
C++
LPCWSTR IMTConPluginModule::Description() const  
---  
.NET (Gateway/Manager API)
string CIMTConPluginModule.Description()  
---  
Python (Manager API)
MTConPluginModule.Description()  
---  
Return Value
If successful, it returns a pointer to a string with the description of the plugin module. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConPluginModule](imtconpluginmodule.md "IMTConPluginModule") object.
To use the line after the object removal (call of the [IMTConPluginModule::Release](imtconpluginmodule_release.md "Release") method of this object), a copy of it should be created.
The maximum description length is 256 characters (with the sign of the string end).