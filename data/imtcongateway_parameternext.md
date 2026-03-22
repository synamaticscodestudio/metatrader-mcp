# ParameterNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ ParameterNext | [](imtcongateway_parametertotal.md "ParameterTotal") [](imtcongateway_parameterget.md "ParameterGet") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::ParameterNext
Get the gateway parameters by the index.
C++
MTAPIRES IMTConGateway::ParameterNext( const UINT pos, // Position of the parameter IMTConParam* param // An object of the gateway parameter ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.ParameterNext( uint  pos, // Position of the parameter CIMTConParam param // An object of the gateway parameter )  
---  
Python (Manager API)
MTConGateway.ParameterNext( pos # Position of the parameter )  
---  
Parameters
pos
[in] Position of the gateway, starting with 0.
param
[out] An object of a gateway parameter. The 'param' object must first be created using the [IMTAdminAPI::GatewayParamCreate](imtadminapi_gatewayparamcreate.md "GatewayParamCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.