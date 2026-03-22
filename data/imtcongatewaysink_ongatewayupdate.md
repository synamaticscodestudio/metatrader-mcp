# OnGatewayUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewaySink ](imtcongatewaysink.md "IMTConGatewaySink")/ OnGatewayUpdate | [](imtcongatewaysink_ongatewayadd.md "OnGatewayAdd") [](imtcongatewaysink_ongatewaydelete.md "OnGatewayDelete") |
| --- | --- | --- |
| --- | --- |

IMTConGatewaySink::OnGatewayUpdate
A handler of the event of updating a gateway configuration.
C++
virtual void IMTConGatewaySink::OnGatewayUpdate( const IMTConGateway* gateway // Pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConGatewaySink.OnGatewayUpdate( CIMTConGateway gateway // Configuration object )  
---  
Parameters
gateway
[in] A pointer to the updated configuration object.
Note
This method is called by the API to notify that a gateway configuration has changed.