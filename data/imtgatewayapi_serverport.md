# ServerPort (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Server ](imtgatewayapi_server.md "Server")/ ServerPort | [](imtgatewayapi_serverip.md "ServerIP") [](imtgatewayapi_serverconnections.md "ServerConnections") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::ServerPort
Get the number of the port launched for the connection to Gateway API.
C++
UINT IMTGatewayAPI::ServerPort()  
---  
.NET
uint CIMTGatewayAPI.ServerPort()  
---  
Return Value
Server port number. In case several addresses (for example: address1:port1,address2:port2) have been specified via [IMTGatewayAPI::Start](imtgatewayapi_start.md "Start") method, this method will return the port of the first address (port1).