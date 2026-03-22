# TradingPassword (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ TradingPassword | [](imtcongateway_tradinglogin.md "TradingLogin") [](imtcongateway_gateway.md "Gateway") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::TradingPassword
Get a password for the authorization of a gateway on the source server.
C++
LPCWSTR IMTConGateway::TradingPassword() const  
---  
.NET (Gateway/Manager API)
string CIMTConGateway.TradingPassword()  
---  
Python (Manager API)
MTConGateway.TradingPassword  
---  
Return Value
If successful, it returns a pointer to a string with a password for authorization on the source server. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGateway](imtcongateway.md "IMTConGateway") object.
To use the string after the object removal (call of the [IMTConGateway::Release](imtcongateway_release.md "Release") method of this object), a copy of it should be created.
IMTConGateway::TradingPassword
Set a password for the authorization of a gateway on the source server.
C++
MTAPIRES IMTConGateway::TradingPassword( LPCWSTR password // Password )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.TradingPassword( string password // Password )  
---  
Python (Manager API)
MTConGateway.TradingPassword  
---  
Parameters
password
[in] A password for authorization.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum password length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.