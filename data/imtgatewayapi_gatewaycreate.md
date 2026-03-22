# GatewayCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Gateways ](imtgatewayapi_config_gateway.md "Functions")/ GatewayCreate | [](imtgatewayapi_config_gateway.md "Functions") [](imtgatewayapi_gatewayparamcreate.md "GatewayParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GatewayCreate
Create an object of the gateway configuration.
C++
IMTConGateway* IMTGatewayAPI::GatewayCreate()  
---  
.NET
CIMTConGateway CIMTGatewayAPI.GatewayCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGateway](imtcongateway.md "IMTConGateway") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGateway::Release](imtcongateway_release.md "Release") method of this object.