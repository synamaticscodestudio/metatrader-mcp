# GatewayRestart (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewayRestart | [](imtadminapi_gatewayunsubscribe.md "GatewayUnsubscribe") [](imtadminapi_gatewayupdate.md "GatewayUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewayRestart
Restart gateways.
C++
MTAPIRES IMTAdminAPI::GatewayRestart()  
---  
.NET
MTRetCode CIMTAdminAPI.GatewayRestart()  
---  
Python
AdminAPI.GatewayRestart()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This command restarts all gateways.