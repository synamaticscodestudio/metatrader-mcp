# ParameterAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPlugin ](imtconplugin.md "IMTConPlugin")/ ParameterAdd | [](imtconplugin_flags.md "Flags") [](imtconplugin_parameterupdate.md "ParameterUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConPlugin::ParameterAdd
Add a plugin parameter.
C++
MTAPIRES IMTConPlugin::ParameterAdd( IMTConParam* param // An object of the plugin parameter )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConPlugin.ParameterAdd( CIMTConParam param // An object of the plugin parameter )  
---  
Python (Manager API)
MTConPlugin.ParameterAdd( param # An object of the plugin parameter )  
---  
Parameters
param
[in] An object of a plugin parameter [IMTConParam](imtconparam.md "IMTConParam").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
You can add a maximum of 128 parameters for a plugin.