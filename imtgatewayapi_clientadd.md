# ClientAdd (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Client Connection ](imtgatewayapi_client.md "Client Connection")/ ClientAdd | [](imtgatewayapi_client.md "Client Connection") [](imtgatewayapi_clientallowip.md "ClientAllowIP") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::ClientAdd
Adding permission for the platform components connection using a specified login and a password.
C++
MTAPIRES IMTGatewayAPI::ClientAdd( const UINT64 login, // Login LPCWSTR password // Password )  
---  
.NET
MTRetCode CIMTGatewayAPI.ClientAdd( ulong login, // Login string password // Password )  
---  
Parameters
login
[in] Login to connect the platform components to a remote gateway/data feed.
password
[in] Paasword to connect the platform components to a remote gateway/data feed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method is used only for the remote gateways and data feeds. By default, connection with any logins and passwords is forbidden.