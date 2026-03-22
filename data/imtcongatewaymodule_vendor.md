# Vendor (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayModule ](imtcongatewaymodule.md "IMTConGatewayModule")/ Vendor | [](imtcongatewaymodule_name.md "Name") [](imtcongatewaymodule_description.md "Description") |
| --- | --- | --- |
| --- | --- |

IMTConGatewayModule::Vendor
Get the name of the gateway module provider.
C++
LPCWSTR IMTConGatewayModule::Vendor() const  
---  
.NET (Gateway/Manager API)
string CIMTConGatewayModule.Vendor()  
---  
Python (Manager API)
MTConGatewayModule.Vendor  
---  
Return Value
If successful, it returns a pointer to a string with the file provider of the gateway module. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGatewayModule](imtcongatewaymodule.md "IMTConGatewayModule") object.
To use the string after the object removal (call of the [IMTConGatewayModule::Release](imtcongatewaymodule_release.md "Release") method of this object), a copy of it should be created.
The length of the name is limited to 128 characters (including the end-of-line character).