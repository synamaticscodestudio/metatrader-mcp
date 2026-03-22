# ParameterGet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPlugin ](imtconplugin.md "IMTConPlugin")/ ParameterGet | [](imtconplugin_parameternext.md "ParameterNext") [](imtconpluginmodule.md "IMTConPluginModule") |
| --- | --- | --- |
| --- | --- |

IMTConPlugin::ParameterGet
Get the plugin parameter by the name.
C++
MTAPIRES IMTConPlugin::ParameterGet( LPCWSTR name, // Parameter name IMTConParam* param // An object of the plugin parameter ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConPlugin.ParameterGet( string name, // Parameter name CIMTConParam param // An object of the plugin parameter )  
---  
Python (Manager API)
MTConParam MTConPlugin.ParameterGet( str name # Parameter name )  
---  
list[MTConParam] MTConPlugin.ParameterGet()  
---  
Parameters
name
[in] Parameter Name.
param
[out] An object of the plugin parameter. The param object must first be created using the [IMTAdminAPI::PluginParamCreate](imtadminapi_pluginparamcreate.md "PluginParamCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConParam::Name()](imtconparam_name.md "Name") value is used as the parameter name.