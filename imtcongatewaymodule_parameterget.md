# ParameterGet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayModule ](imtcongatewaymodule.md "IMTConGatewayModule")/ ParameterGet | [](imtcongatewaymodule_parameternext.md "ParameterNext") [](imtcongatewaytranslate.md "IMTConGatewayTranslate") |
| --- | --- | --- |
| --- | --- |

IMTConGatewayModule::ParameterGet
Get the gateway module parameter by the name.
C++
MTAPIRES IMTConGatewayModule::ParameterGet( LPCWSTR name, // Parameter name IMTConParam* param // An object of the gateway parameter ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGatewayModule.ParameterGet( string name, // Parameter name CIMTConParam param // An object of the gateway parameter )  
---  
Python (Manager API)
MTConGatewayModule.ParameterGet( name # Parameter name )  
---  
MTConGatewayModule.ParameterGet()  
---  
Parameters
name
[in] Parameter Name.
param
[out] An object of a gateway parameter. The 'param' object must first be created using the [IMTAdminAPI::GatewayParamCreate](imtadminapi_gatewayparamcreate.md "GatewayParamCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConParam::Name](imtconparam_name.md "Name") value is used as the parameter name.