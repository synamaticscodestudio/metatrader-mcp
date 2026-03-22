# GatewayCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewayCreate | [](imtadminapi_config_gateway.md "Functions") [](imtadminapi_gatewaymodulecreate.md "GatewayModuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewayCreate
Create an object of the gateway configuration.
C++
IMTConGateway* IMTAdminAPI::GatewayCreate()  
---  
.NET
CIMTConGateway CIMTAdminAPI.GatewayCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGateway](imtcongateway.md "IMTConGateway") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGateway::Release](imtcongateway_release.md "Release") method of this object.