# TradingServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayModule ](imtcongatewaymodule.md "IMTConGatewayModule")/ TradingServer | [](imtcongatewaymodule_gateway.md "Gateway") [](imtcongatewaymodule_tradinglogin.md "TradingLogin") |
| --- | --- | --- |
| --- | --- |

IMTConGatewayModule::TradingServer
Get the default address of the server to which the gateway module will connect.
C++
LPCWSTR IMTConGatewayModule::TradingServer() const  
---  
.NET (Gateway/Manager API)
string CIMTConGatewayModule.TradingServer()  
---  
Python (Manager API)
MTConGatewayModule.TradingServer  
---  
Return Value
If successful, it returns a pointer to a string with the default address of the server to which the gateway module will connect. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGatewayModule](imtcongatewaymodule.md "IMTConGatewayModule") object.
To use the string after the object removal (call of the [IMTConGatewayModule::Release](imtcongatewaymodule_release.md "Release") method of this object), a copy of it should be created.
The maximum length of the address is 128 characters (including the sign of the string end).