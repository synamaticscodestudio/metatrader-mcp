# Description (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayModule ](imtcongatewaymodule.md "IMTConGatewayModule")/ Description | [](imtcongatewaymodule_vendor.md "Vendor") [](imtcongatewaymodule_module.md "Module") |
| --- | --- | --- |
| --- | --- |

IMTConGatewayModule::Description
Get the description of a gateway module.
C++
LPCWSTR IMTConGatewayModule::Description() const  
---  
.NET (Gateway/Manager API)
string CIMTConGatewayModule.Description()  
---  
Python (Manager API)
MTConGatewayModule.Description  
---  
Return Value
If successful, it returns a pointer to a string with the description of a gateway module. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGatewayModule](imtcongatewaymodule.md "IMTConGatewayModule") object.
To use the string after the object removal (call of the [IMTConGatewayModule::Release](imtcongatewaymodule_release.md "Release") method of this object), a copy of it should be created.
The description length is limited to 512 characters (including the end-of-line character).