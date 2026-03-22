# GatewaySubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewaySubscribe | [](imtadminapi_gatewaytranslatecreate.md "GatewayTranslateCreate") [](imtadminapi_gatewayunsubscribe.md "GatewayUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewaySubscribe
Subscribe to events associated with the gateway configuration.
C++
MTAPIRES IMTAdminAPI::GatewaySubscribe( IMTConGatewaySink* sink // A pointer to the IMTConGatewaySink object )  
---  
.NET
MTRetCode CIMTAdminAPI.GatewaySubscribe( CIMTConGatewaySink sink // CIMTConGatewaySink object )  
---  
Python
AdminAPI.GatewaySubscribe( sink # IMTConGatewaySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConGatewaySink](imtcongatewaysink.md "IMTConGatewaySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConGatewaySink](imtcongatewaysink.md "IMTConGatewaySink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConGatewaySink::OnGatewaySync](imtcongatewaysink_ongatewaysync.md "OnGatewaySync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::GatewayUnsubscribe](imtadminapi_gatewayunsubscribe.md "GatewayUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.