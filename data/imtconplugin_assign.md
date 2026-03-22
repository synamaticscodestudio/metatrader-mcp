# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPlugin ](imtconplugin.md "IMTConPlugin")/ Assign | [](imtconplugin_release.md "Release") [](imtconplugin_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConPlugin::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConPlugin::Assign( const IMTConPlugin* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConPlugin.Assign( CIMTConPlugin param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.