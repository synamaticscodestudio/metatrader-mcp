# Stop (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Server ](imtgatewayapi_server.md "Server")/ Stop | [](imtgatewayapi_start.md "Start") [](imtgatewayapi_serverip.md "ServerIP") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::Stop
Gateway API server port stop.
C++
MTAPIRES IMTGatewayAPI::Stop()  
---  
.NET
MTRetCode CIMTGatewayAPI.Stop()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After [IMTGatewayAPI::Start](imtgatewayapi_start.md "Start") call, the object which implements the [IMTGatewaySink](imtgatewaysink.md "Event Interface") interface is considered subscribed to notifications from the Gateway API. Such an object can only be deleted after calling IMTGatewayAPI::Stop. 
During normal operation, the gateway/data feed started by the History server (locally) should not stop until the [IMTGatewaySink::OnGatewayShutdown](imtgatewaysink_ongatewayshutdown.md "OnGatewayShutdown") event is received.