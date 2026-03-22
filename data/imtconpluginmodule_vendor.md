# Vendor (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPluginModule ](imtconpluginmodule.md "IMTConPluginModule")/ Vendor | [](imtconpluginmodule_name.md "Name") [](imtconpluginmodule_description.md "Description") |
| --- | --- | --- |
| --- | --- |

IMTConPluginModule::Vendor
Get the name of the plugin module provider.
C++
LPCWSTR IMTConPluginModule::Vendor() const  
---  
.NET (Gateway/Manager API)
string CIMTConPluginModule.Vendor()  
---  
Python (Manager API)
MTConPluginModule.Vendor()  
---  
Return Value
If successful, it returns a pointer to a string with the file name of the plugin module provider. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConPluginModule](imtconpluginmodule.md "IMTConPluginModule") object.
To use the line after the object removal (call of the [IMTConPluginModule::Release](imtconpluginmodule_release.md "Release") method of this object), a copy of it should be created.
The length of the provider's name is limited to 128 characters (including the end-of-line character).