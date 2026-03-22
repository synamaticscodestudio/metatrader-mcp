# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPlugin ](imtconplugin.md "IMTConPlugin")/ Flags | [](imtconplugin_mode.md "Mode") [](imtconplugin_parameteradd.md "ParameterAdd") |
| --- | --- | --- |
| --- | --- |

IMTConPlugin::Flags
Get the plugin operation flags.
C++
UINT IMTConPlugin::Flags() const  
---  
.NET (Gateway/Manager API)
EnPluginFlags CIMTConPlugin.Flags()  
---  
Python (Manager API)
MTConPlugin.Flags  
---  
Return Value
A value of the [IMTConPlugin::EnPluginFlags](imtconplugin_enum.htm#enpluginflags) enumeration.
IMTConPlugin::Flags
Set the plugin operation flags.
C++
MTAPIRES IMTConPlugin::Flags( const UINT flags // Operation flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConPlugin.Flags( EnPluginFlags flags // Operation flags )  
---  
Python (Manager API)
MTConPlugin.Flags  
---  
Parameters
mode
[in] The [IMTConPlugin::EnPluginFlags](imtconplugin_enum.htm#enpluginflags) enumeration is used to pass operation flags.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.