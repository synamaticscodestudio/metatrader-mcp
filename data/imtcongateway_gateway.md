# Gateway (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ Gateway | [](imtcongateway_tradingpassword.md "TradingPassword") [](imtcongateway_gatewayserver.md "GatewayServer") |
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
MTConGateway.Gateway  
---  
Return Value
If successful, returns a pointer to the string with the license module name. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGateway](imtcongateway.md "IMTConGateway") object.
To use the string after the object removal (call of the [IMTConGateway::Release](imtcongateway_release.md "Release") method of this object), a copy of it should be created.