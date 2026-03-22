# StateReceivedBooks (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ StateReceivedBooks | [](imtcongateway_statereceivedticks.md "StateReceivedTicks") [](imtcongateway_statetrafficin.md "StateTrafficIn") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::StateReceivedBooks
Request number of the Depth of Market changes ([MTBookDiff](mtbook.md "MTBook/MTBookDiff")) received by the gateway from an external trading system during the current session.
C++
UINT IMTConGateway::StateReceivedBooks() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGateway.StateReceivedBooks()  
---  
Python (Manager API)
MTConGateway.StateReceivedBooks  
---  
Return Value
Number of Depth of Market changes.