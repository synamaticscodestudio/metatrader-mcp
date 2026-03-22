# TradingLogin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayModule ](imtcongatewaymodule.md "IMTConGatewayModule")/ TradingLogin | [](imtcongatewaymodule_tradingserver.md "TradingServer") [](imtcongatewaymodule_tradingpassword.md "TradingPassword") |
| --- | --- | --- |
| --- | --- |

IMTConGatewayModule::TradingLogin
Get a default login that will be used by a gateway to connect to the server.
C++
LPCWSTR IMTConGatewayModule::TradingLogin() const  
---  
.NET (Gateway/Manager API)
string CIMTConGatewayModule.TradingLogin()  
---  
Python (Manager API)
MTConGatewayModule.TradingLogin  
---  
Return Value
If successful, it returns a pointer to a string with the default login, which will be used by the gateway to connect to the server. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGatewayModule](imtcongatewaymodule.md "IMTConGatewayModule") object.
To use the string after the object removal (call of the [IMTConGatewayModule::Release](imtcongatewaymodule_release.md "Release") method of this object), a copy of it should be created.
The maximum login length is 64 characters (including the end-of-line character).