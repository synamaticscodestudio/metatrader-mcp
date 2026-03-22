# ParameterGet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPluginModule ](imtconpluginmodule.md "IMTConPluginModule")/ ParameterGet | [](imtconpluginmodule_parameternext.md "ParameterNext") [](imtconpluginsink.md "IMTConPluginSink") |
| --- | --- | --- |
| --- | --- |

IMTConPluginModule::ParameterGet
Get the plugin module parameter by the name.
C++
MTAPIRES IMTConPluginModule::ParameterGet( LPCWSTR name, // Parameter name IMTConParam* param // An object of the plugin parameter ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConPluginModule.ParameterGet( string name, // Parameter name CIMTConParam param // An object of the plugin parameter )  
---  
Python (Manager API)
MTConParam MTConPluginModule.ParameterGet( str name # Parameter name )  
---  
list[MTConParam] MTConPluginModule.ParameterGet()  
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