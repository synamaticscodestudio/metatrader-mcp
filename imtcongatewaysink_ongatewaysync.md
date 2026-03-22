# OnGatewaySync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewaySink ](imtcongatewaysink.md "IMTConGatewaySink")/ OnGatewaySync | [](imtcongatewaysink_ongatewaydelete.md "OnGatewayDelete") [](config_route.md "Routing") |
| --- | --- | --- |
| --- | --- |

IMTConGatewaySink::OnGatewaySync
A handler of the event of synchronization of gateway configuration.
C++
virtual void IMTConGatewaySink::OnGatewaySync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConGatewaySink.OnGatewaySync()  
---  
Note
This method is called by the API to notify that a gateway configuration has been synchronized.
Synchronization of the gateway configurations is performed on Access, History, Trade and Backup servers during connection to the main server.