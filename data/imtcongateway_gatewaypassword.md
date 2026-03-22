# GatewayPassword (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ GatewayPassword | [](imtcongateway_gatewaylogin.md "GatewayLogin") [](imtcongateway_mode.md "Mode") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::GatewayPassword
Gets a password for the authorization of the trade and history server on the gateway.
C++
LPCWSTR IMTConGateway::GatewayPassword() const  
---  
.NET (Gateway/Manager API)
string CIMTConGateway.GatewayPassword()  
---  
Python (Manager API)
MTConGateway.GatewayPassword  
---  
Return Value
If successful, it returns a pointer to a string with a password for authorization on the server. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGateway](imtcongateway.md "IMTConGateway") object.
To use the string after the object removal (call of the [IMTConGateway::Release](imtcongateway_release.md "Release") method of this object), a copy of it should be created.
Parameters of connection of the history/trade server to the gateway provide operation security, as well as easy debugging of gateways by third-party developers. If you do not need debugging, you can specify any login and password, as well as any available network address, through which the interaction of the gateway with the platform servers will be implemented.
IMTConGateway::GatewayPassword
Sets a password for the authorization of the trade and history server on the gateway.
C++
MTAPIRES IMTConGateway::GatewayPassword( LPCWSTR password // Password )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.GatewayPassword( string password // Password )  
---  
Python (Manager API)
MTConGateway.GatewayPassword  
---  
Parameters
password
[in] A password for authorization.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The password must meet minimum security requirements (be no less than six symbols long and contain at least two of three symbols types: lower-case letters, upper-case letters or digits).
The maximum password length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.