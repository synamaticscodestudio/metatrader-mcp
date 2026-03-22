# ClientAllowIP (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Client Connection ](imtgatewayapi_client.md "Client Connection")/ ClientAllowIP | [](imtgatewayapi_clientadd.md "ClientAdd") [](imtgatewayapi_send.md "Quote and News Streams") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::ClientAllowIP
Adding permission for the connection from a specified IP address.
C++
MTAPIRES IMTGatewayAPI::ClientAllowIP( LPCWSTR address // IP address )  
---  
.NET
MTRetCode CIMTGatewayAPI.ClientAllowIP( string address // IP address )  
---  
Parameters
address
[in] IP address, from which connection must be allowed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
By default, connection from any IP addresses is allowed. In case at least one address is added, connections from all addresses, except from the added ones, are forbidden.