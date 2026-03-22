# Module (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayModule ](imtcongatewaymodule.md "IMTConGatewayModule")/ Module | [](imtcongatewaymodule_description.md "Description") [](imtcongatewaymodule_gateway.md "Gateway") |
| --- | --- | --- |
| --- | --- |

IMTConGatewayModule::Module
Get the name of the gateway module file.
C++
LPCWSTR IMTConGatewayModule::Module() const  
---  
.NET (Gateway/Manager API)
string CIMTConGatewayModule.Module()  
---  
Python (Manager API)
MTConGatewayModule.Module  
---  
Return Value
If successful, it returns a pointer to a string with the file name of the gateway module. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGatewayModule](imtcongatewaymodule.md "IMTConGatewayModule") object.
To use the string after the object removal (call of the [IMTConGatewayModule::Release](imtcongatewaymodule_release.md "Release") method of this object), a copy of it should be created.
The maximum name length is 64 characters (including the end-of-line character).