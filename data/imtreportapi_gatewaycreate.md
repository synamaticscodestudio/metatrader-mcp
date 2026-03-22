# GatewayCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Gateways ](imtreportapi_config_gateway.md "Functions")/ GatewayCreate | [](imtreportapi_config_gateway.md "Functions") [](imtreportapi_gatewaymodulecreate.md "GatewayModuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GatewayCreate
Create an object of the gateway configuration.
IMTConGateway* IMTReportAPI::GatewayCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGateway](imtcongateway.md "IMTConGateway") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGateway::Release](imtcongateway_release.md "Release") method of this object.