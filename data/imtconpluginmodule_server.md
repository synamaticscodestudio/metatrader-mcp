# Server (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPluginModule ](imtconpluginmodule.md "IMTConPluginModule")/ Server | [](imtconpluginmodule_module.md "Module") [](imtconpluginmodule_version.md "Version") |
| --- | --- | --- |
| --- | --- |

IMTConPluginModule::Server
Get the ID of the server on which the dll-module of the plugin is stored physically.
C++
UINT64 IMTConPluginModule::Server() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConPluginModule.Server()  
---  
Python (Manager API)
MTConPluginModule.Server()  
---  
Return Value
The ID of the platform server, on which the dll-module of the plugin is stored physically.