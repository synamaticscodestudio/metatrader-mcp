# Module (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPluginModule ](imtconpluginmodule.md "IMTConPluginModule")/ Module | [](imtconpluginmodule_description.md "Description") [](imtconpluginmodule_server.md "Server") |
| --- | --- | --- |
| --- | --- |

IMTConPluginModule::Module
Get the name of the plugin module file.
C++
LPCWSTR IMTConPluginModule::Module() const  
---  
.NET (Gateway/Manager API)
string CIMTConPluginModule.Module()  
---  
Python (Manager API)
MTConPluginModule.Module()  
---  
Return Value
If successful, it returns a pointer to a string with the file name of the plugin module. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConPluginModule](imtconpluginmodule.md "IMTConPluginModule") object.
To use the line after the object removal (call of the [IMTConPluginModule::Release](imtconpluginmodule_release.md "Release") method of this object), a copy of it should be created.
The maximum file name length is 64 characters (including the end-of-line character).