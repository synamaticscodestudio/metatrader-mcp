# ParameterGet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederModule ](imtconfeedermodule.md "IMTConFeederModule")/ ParameterGet | [](imtconfeedermodule_parameternext.md "ParameterNext") [](imtconfeedertranslate.md "IMTConFeederTranslate") |
| --- | --- | --- |
| --- | --- |

IMTConFeederModule::ParameterGet
Get the parameter of the data feed module by name.
C++
MTAPIRES IMTConFeederModule::ParameterGet( LPCWSTR name, // Parameter name IMTConParam* param // An object of a data feed parameter ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeederModule.ParameterGet( string name, // Parameter name CIMTConParam param // An object of a data feed parameter )  
---  
Python (Manager API)
MTConFeederModule.ParameterGet( name # Parameter name )  
---  
Parameters
name
[in] Parameter Name.
param
[out] The object of a data feed parameter. The 'param' object must first be created using the [IMTAdminAPI::FeederParamCreate](imtadminapi_feederparamcreate.md "FeederParamCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConParam::Name()](imtconparam_name.md "Name") value is used as the parameter name.