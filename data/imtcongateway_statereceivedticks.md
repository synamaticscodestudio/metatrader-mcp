# StateReceivedTicks (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ StateReceivedTicks | [](imtcongateway_stateconnected.md "StateConnected") [](imtcongateway_statereceivedbooks.md "StateReceivedBooks") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::StateReceivedTicks
Request number of price changes ([MTTick](mttick.md "MTTick")) received by the gateway from an external trading system during the current session.
C++
UINT IMTConGateway::StateReceivedTicks() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGateway.StateReceivedTicks()  
---  
Python (Manager API)
MTConGateway.StateReceivedTicks  
---  
Return Value
Number of price changes.