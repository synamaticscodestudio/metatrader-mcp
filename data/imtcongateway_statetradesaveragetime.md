# StateTradesAverageTime (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ StateTradesAverageTime | [](imtcongateway_statetradestotal.md "StateTradesTotal") [](imtcongatewaymodule.md "IMTConGatewayModule") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::StateTradesAverageTime
Get an average time of handling one trade by the gateway.
C++
UINT IMTConGateway::StateTradesAverageTime() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGateway.StateTradesAverageTime()  
---  
Python (Manager API)
MTConGateway.StateTradesAverageTime  
---  
Return Value
Average time of handling a trade in milliseconds.
Note
Handling includes request canformation ([IMTConfirm](imtconfirm.md "IMTConfirm")) and use of the appropriate trade execution (IMTExecution) after request processing n an external trading system.