# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayModule ](imtcongatewaymodule.md "IMTConGatewayModule")/ Name | [](imtcongatewaymodule_clear.md "Clear") [](imtcongatewaymodule_vendor.md "Vendor") |
| --- | --- | --- |
| --- | --- |

IMTConGatewayModule::Name
Get the gateway name, which is inserted by default to a configuration when selecting this module.
C++
LPCWSTR IMTConGatewayModule::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConGatewayModule.Name()  
---  
Python (Manager API)
MTConGatewayModule.Name  
---  
Return Value
If successful, it returns a pointer to a string with the default name of the gateway. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGatewayModule](imtcongatewaymodule.md "IMTConGatewayModule") object.
To use the string after the object removal (call of the [IMTConGatewayModule::Release](imtcongatewaymodule_release.md "Release") method of this object), a copy of it should be created.
The maximum name length is 64 characters (including the end-of-line character).