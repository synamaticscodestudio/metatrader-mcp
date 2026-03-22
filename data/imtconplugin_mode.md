# Mode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPlugin ](imtconplugin.md "IMTConPlugin")/ Mode | [](imtconplugin_module.md "Module") [](imtconplugin_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConPlugin::Mode
Get the plugin operation mode.
C++
UINT IMTConPlugin::Mode() const  
---  
.NET (Gateway/Manager API)
uint CIMTConPlugin.Mode()  
---  
Python (Manager API)
MTConPlugin.Mode  
---  
Return Value
A value of the [IMTConPlugin::EnPluginMode](imtconplugin_enum.htm#enpluginmode) enumeration.
IMTConPlugin::Mode
Get the plugin operation mode.
C++
MTAPIRES IMTConPlugin::Mode( const UINT mode // Operation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConPlugin.Mode( uint mode // Operation mode )  
---  
Python (Manager API)
MTConPlugin.Mode  
---  
Parameters
mode
[in] The [IMTConPlugin::EnPluginMode](imtconplugin_enum.htm#enpluginmode) enumeration is used to pass the operation mode.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.