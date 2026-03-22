# ParameterGet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ ParameterGet | [](imtcongateway_parameternext.md "ParameterNext") [](imtcongateway_symboladd.md "SymbolAdd") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::ParameterGet
Get the gateway parameter by the name.
C++
MTAPIRES IMTConGateway::ParameterGet( LPCWSTR name, // Parameter name IMTConParam* param // An object of the gateway parameter ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.ParameterGet( string name, // Parameter name CIMTConParam param // An object of the gateway parameter )  
---  
Python (Manager API)
MTConGateway.ParameterGet()  
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