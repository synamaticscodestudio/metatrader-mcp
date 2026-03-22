# ParameterNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPlugin ](imtconplugin.md "IMTConPlugin")/ ParameterNext | [](imtconplugin_parametertotal.md "ParameterTotal") [](imtconplugin_parameterget.md "ParameterGet") |
| --- | --- | --- |
| --- | --- |

IMTConPlugin::ParameterNext
Get the plugin parameters by the index.
C++
MTAPIRES IMTConPlugin::ParameterNext( const UINT pos, // Position of the plugin IMTConParam* param // An object of the plugin parameter ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConPlugin.ParameterNext( uint pos, // Position of the plugin CIMTConParam param // An object of the plugin parameter )  
---  
Python (Manager API)
MTConPlugin.ParameterNext( pos # Position of the plugin )  
---  
Parameters
pos
[in] Position of the plugin, starting with 0.
param
[out] An object of the plugin parameter. The param object must first be created using the [IMTAdminAPI::PluginParamCreate](imtadminapi_pluginparamcreate.md "PluginParamCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the parameters of a plugin with a specified index to the param object.