# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPluginModule ](imtconpluginmodule.md "IMTConPluginModule")/ Name | [](imtconpluginmodule_clear.md "Clear") [](imtconpluginmodule_vendor.md "Vendor") |
| --- | --- | --- |
| --- | --- |

IMTConPluginModule::Name
Get the plugin name, which is inserted by default to a configuration when selecting this module.
C++
LPCWSTR IMTConPluginModule::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConPluginModule.Name()  
---  
Python (Manager API)
MTConPluginModule.Name()  
---  
Return Value
If successful, it returns a pointer to a string with the default name of the plugin. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConPluginModule](imtconpluginmodule.md "IMTConPluginModule") object.
To use the line after the object removal (call of the [IMTConPluginModule::Release](imtconpluginmodule_release.md "Release") method of this object), a copy of it should be created.
The maximum name length is 64 characters (including the end-of-line character).