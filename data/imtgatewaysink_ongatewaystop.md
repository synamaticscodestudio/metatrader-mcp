# OnGatewayStop (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ OnGatewayStop | [](imtgatewaysink_ongatewaystart.md "OnGatewayStart") [](imtgatewaysink_ongatewayshutdown.md "OnGatewayShutdown") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink::OnGatewayStop
[IMTGatewaySink::OnGatewayStart](imtgatewaysink_ongatewaystart.md "OnGatewayStart") inverse events handler. The notification is on the fact that Gateway API is not synchronized with the platform and not ready for work.
C++
virtual void IMTGatewaySink::OnGatewayStop()  
---  
.NET
virtual void CIMTGatewaySink.OnGatewayStop()  
---  
Note
This notification is sent for gateways, in case of the failure of the connection to a main trading or historical server.
This notification is sent for data feeds, in case of the failure of the connection to a historical server.