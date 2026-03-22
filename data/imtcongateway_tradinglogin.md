# TradingLogin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ TradingLogin | [](imtcongateway_tradingserver.md "TradingServer") [](imtcongateway_tradingpassword.md "TradingPassword") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::TradingLogin
Get a login for the authorization of a gateway on the source server.
C++
LPCWSTR IMTConGateway::TradingLogin() const  
---  
.NET (Gateway/Manager API)
string CIMTConGateway.TradingLogin()  
---  
Python (Manager API)
MTConGateway.TradingLogin  
---  
Return Value
If successful, it returns a pointer to a string with login for authorization on the source server. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGateway](imtcongateway.md "IMTConGateway") object.
To use the string after the object removal (call of the [IMTConGateway::Release](imtcongateway_release.md "Release") method of this object), a copy of it should be created.
IMTConGateway::TradingLogin
Set a login for the authorization of a gateway on the source server.
C++
MTAPIRES IMTConGateway::TradingLogin( LPCWSTR login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.TradingLogin( string login // Login )  
---  
Python (Manager API)
MTConGateway.TradingLogin  
---  
Parameters
login
[in] A login for authorization.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum login length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.