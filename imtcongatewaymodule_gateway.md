# Gateway (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayModule ](imtcongatewaymodule.md "IMTConGatewayModule")/ Gateway | [](imtcongatewaymodule_module.md "Module") [](imtcongatewaymodule_tradingserver.md "TradingServer") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::Gateway
Gets the gateway license module name.
C++
LPCWSTR IMTConGateway::Gateway() const  
---  
.NET (Gateway/Manager API)
string CIMTConGateway.Gateway()  
---  
Python (Manager API)
MTConGatewayModule.Gateway  
---  
Return Value
If successful, returns a pointer to the string with the license module name. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGatewayModule](imtcongatewaymodule.md "IMTConGatewayModule") object.
To use the string after the object removal (call of the [IMTConGatewayModule::Release](imtcongatewaymodule_release.md "Release") method of this object), a copy of it should be created.