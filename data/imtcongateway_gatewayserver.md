# GatewayServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ GatewayServer | [](imtcongateway_gateway.md "Gateway") [](imtcongateway_gatewaylogin.md "GatewayLogin") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::GatewayServer
Gets the address, at which the gateway will accept connections from the history and trade servers.
C++
LPCWSTR IMTConGateway::GatewayServer() const  
---  
.NET (Gateway/Manager API)
string CIMTConGateway.GatewayServer()  
---  
Python (Manager API)
MTConGateway.GatewayServer  
---  
Return Value
If successful, returns a pointer to the string with the address, at which the gateway will accept connections from the history and trade servers. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGateway](imtcongateway.md "IMTConGateway") object.
To use the string after the object removal (call of the [IMTConGateway::Release](imtcongateway_release.md "Release") method of this object), a copy of it should be created.
IMTConGateway::GatewayServer
Sets the address, at which the gateway will accept connections from the history and trade servers.
C++
MTAPIRES IMTConFeeder::GatewayServer( LPCWSTR server // Server address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.GatewayServer( string server // Server address )  
---  
Python (Manager API)
MTConGateway.GatewayServer  
---  
Parameters
server
[in] The address, at which the gateway will accept connections from the history and trade servers.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the address is 128 characters (including the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.