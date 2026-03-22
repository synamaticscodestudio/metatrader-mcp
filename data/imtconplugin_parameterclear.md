# ParameterClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPlugin ](imtconplugin.md "IMTConPlugin")/ ParameterClear | [](imtconplugin_parameterdelete.md "ParameterDelete") [](imtconplugin_parametershift.md "ParameterShift") |
| --- | --- | --- |
| --- | --- |

IMTConPlugin::ParameterClear
Clear the list of plugin parameters.
C++
MTAPIRES IMTConPlugin::ParameterClear() const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConPlugin.ParameterClear()  
---  
Python (Manager API)
MTConPlugin.ParameterClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method clears the entire list of plugin parameters.