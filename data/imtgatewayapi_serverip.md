# ServerIP (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Server ](imtgatewayapi_server.md "Server")/ ServerIP | [](imtgatewayapi_stop.md "Stop") [](imtgatewayapi_serverport.md "ServerPort") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::ServerIP
Get the IP address on which the Gateway API server port is running.
C++
MTAPIRES IMTGatewayAPI::ServerIP( MTAPISTR& ip // IP address )  
---  
.NET
MTRetCode CIMTGatewayAPI.ServerIP( out string ip // IP address )  
---  
Parameters
ip
[out] IP address on which the server port is running. In case several addresses have been specified via [IMTGatewayAPI::Start](imtgatewayapi_start.md "Start") method, ServerIP method will return them in the same format - separated with a comma. For example, address1:port1,address2:port2.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The IP address on which the Gateway API server port is running is determined by the [IMTGatewayAPI::Start](imtgatewayapi_start.md "Start") method.