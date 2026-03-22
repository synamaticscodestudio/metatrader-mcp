# GatewayUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewayUnsubscribe | [](imtadminapi_gatewaysubscribe.md "GatewaySubscribe") [](imtadminapi_gatewayrestart.md "GatewayRestart") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewayUnsubscribe
Unsubscribe from events associated with the gateway configuration.
C++
MTAPIRES IMTAdminAPI::GatewayUnsubscribe( IMTConGatewaySink* sink // A pointer to the IMTConGatewaySink object )  
---  
.NET
MTRetCode CIMTAdminAPI.GatewayUnsubscribe( CIMTConGatewaySink sink // CIMTConGatewaySink object )  
---  
Python
AdminAPI.GatewayUnsubscribe( sink # IMTConGatewaySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConGatewaySink](imtcongatewaysink.md "IMTConGatewaySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::GatewaySubscribe](imtadminapi_gatewaysubscribe.md "GatewaySubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.