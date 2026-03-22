# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ Name | [](imtcongateway_clear.md "Clear") [](imtcongateway_id.md "ID") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::Name
Get the gateway name.
C++
LPCWSTR IMTConGateway::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConGateway.Name()  
---  
Python (Manager API)
MTConGateway.Name  
---  
Return Value
If successful, it returns a pointer to a string with the name of the gateway. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGateway](imtcongateway.md "IMTConGateway") object.
To use the string after the object removal (call of the [IMTConGateway::Release](imtcongateway_release.md "Release") method of this object), a copy of it should be created.
IMTConGateway::Name
Set the gateway name.
C++
MTAPIRES IMTConGateway::Name( LPCWSTR name // The gateway name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.Name( string name // The gateway name )  
---  
Python (Manager API)
MTConGateway.Name  
---  
Parameters
name
[in] The gateway name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum name length is 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.