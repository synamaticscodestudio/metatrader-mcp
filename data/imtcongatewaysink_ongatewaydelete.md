# OnGatewayDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewaySink ](imtcongatewaysink.md "IMTConGatewaySink")/ OnGatewayDelete | [](imtcongatewaysink_ongatewayupdate.md "OnGatewayUpdate") [](imtcongatewaysink_ongatewaysync.md "OnGatewaySync") |
| --- | --- | --- |
| --- | --- |

IMTConGatewaySink::OnGatewayDelete
A handler of the event of removing a gateway configuration.
C++
virtual void IMTConGatewaySink::OnGatewayDelete( const IMTConGateway* gateway // Pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConGatewaySink.OnGatewayDelete( CIMTConGateway gateway // Configuration object )  
---  
Parameters
gateway
[in] A pointer to the object of the deleted configuration.
Note
This method is called by the API to notify that a gateway configuration has been deleted.