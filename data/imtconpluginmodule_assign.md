# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPluginModule ](imtconpluginmodule.md "IMTConPluginModule")/ Assign | [](imtconpluginmodule_release.md "Release") [](imtconpluginmodule_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConPluginModule::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConPluginModule::Assign( const IMTConPluginModule* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConPluginModule.Assign( CIMTConPluginModule param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.