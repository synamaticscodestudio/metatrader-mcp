# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ Name | [](imtconroute_clear.md "Clear") [](imtconroute_mode.md "Mode") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::Name
Get the name of the routing rule.
C++
LPCWSTR IMTConRoute::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConRoute.Name()  
---  
Python (Manager API)
MTConRoute.Name  
---  
Return Value
If successful, it returns a pointer to a string with the name of the rule. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConRoute](imtconroute.md "IMTConRoute") object.
To use the line after the object removal (call of the [IMTConRoute::Release](imtconroute_release.md "Release") method of this object), a copy of it should be created.
IMTConRoute::Name
Set the name of the routing rule.
C++
MTAPIRES IMTConRoute::Name( LPCWSTR name // Rule name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.Name( string name // Rule name )  
---  
Python (Manager API)
MTConRoute.Name  
---  
Parameters
name
[in] The name of the configuration rule.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum name length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.