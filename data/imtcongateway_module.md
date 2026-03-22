# Module (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ Module | [](imtcongateway_id.md "ID") [](imtcongateway_tradingserver.md "TradingServer") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::Module
Get the name of a gateway module.
C++
LPCWSTR IMTConGateway::Module() const  
---  
.NET (Gateway/Manager API)
string CIMTConGateway.Module()  
---  
Python (Manager API)
MTConGateway.Module  
---  
Return Value
If successful, it returns a pointer to a string with the name of the gateway module. Otherwise, it returns NULL.
Note
It returns the name of the module (exe-file) that corresponds to the gateway.
The pointer to the resulting string is valid for the lifetime of the [IMTConGateway](imtcongateway.md "IMTConGateway") object.
To use the string after the object removal (call of the [IMTConGateway::Release](imtcongateway_release.md "Release") method of this object), a copy of it should be created.
IMTConGateway::Module
Set the name of the gateway module.
C++
MTAPIRES IMTConGateway::Module( LPCWSTR name // The name of the gateway module )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.Module( string name // The name of the gateway module )  
---  
Python (Manager API)
MTConGateway.Module  
---  
Parameters
name
[in] The name of the gateway module.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum name length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.