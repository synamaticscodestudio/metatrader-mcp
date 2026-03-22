# GatewayLogin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ GatewayLogin | [](imtcongateway_gatewayserver.md "GatewayServer") [](imtcongateway_gatewaypassword.md "GatewayPassword") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::GatewayLogin
Gets a login for the authorization of the history and trade servers on the gateway server.
C++
UINT64 IMTConGateway::GatewayLogin() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGateway.GatewayLogin()  
---  
Python (Manager API)
MTConGateway.GatewayLogin  
---  
Return Value
Login for authorization.
Note
Parameters of connection of the history/trade server to the gateway provide operation security, as well as easy debugging of gateways by third-party developers. If you do not need debugging, you can specify any login and password, as well as any available network address, through which the interaction of the gateway with the platform servers will be implemented.
IMTConGateway::GatewayLogin
Sets a login for the authorization of the history and trade servers on the gateway server.
C++
MTAPIRES IMTConGateway::GatewayLogin( UINT64 login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.GatewayLogin( ulong login // Login )  
---  
Python (Manager API)
MTConGateway.GatewayLogin  
---  
Parameters
login
[in] A login for authorization.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Only positive numbers can be used for the login.