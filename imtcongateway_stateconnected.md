# StateConnected (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ StateConnected | [](imtcongateway_translategetsource.md "TranslateGetSource") [](imtcongateway_statereceivedticks.md "StateReceivedTicks") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::StateConnected
Get the state of the gateway connection to an external trading system.
C++
bool IMTConGateway::StateConnected() const  
---  
.NET (Gateway/Manager API)
bool CIMTConGateway.StateConnected()  
---  
Python (Manager API)
MTConGateway.StateConnected  
---  
Return Value
If the gateway has successfully connected to an external trading system and is ready to interact with it, the method returns TRUE, otherwise — FALSE.