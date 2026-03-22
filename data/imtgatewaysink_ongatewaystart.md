# OnGatewayStart (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ OnGatewayStart | [](imtgatewaysink_ongatewayconfig.md "OnGatewayConfig") [](imtgatewaysink_ongatewaystop.md "OnGatewayStop") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink::OnGatewayStart
A handler of the following event: Gateway API is [synchronized](gatewayapi_interaction.md "Interaction of the Platform and Gateway API") with the platform and is ready for work.
C++
virtual void IMTGatewaySink::OnGatewayStart()  
---  
.NET
virtual void CIMTGatewaySink.OnGatewayStart()  
---  
Note
Gateway API business logic elements methods (adding of [symbols](imtgatewayapi_config_symbol.md "Functions"), connection as a [dealer](imtgatewayapi_dealing.md "Processing Trade Requests"), etc.).
This notification ensures that the data is synchronized only with the main and history servers. If additional trade servers are used in the platform, the gateway should start interacting with them only after the appropriate [IMTGatewaySink::OnServerSynchornized](imtgatewaysink_onserversynchronized.md "OnServerSynchronized") notifications are received.