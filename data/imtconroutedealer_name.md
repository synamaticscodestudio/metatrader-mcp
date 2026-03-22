# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRouteDealer ](imtconroutedealer.md "IMTConRouteDealer")/ Name | [](imtconroutedealer_login.md "Login") [](imtconroutesink.md "IMTConRouteSink") |
| --- | --- | --- |
| --- | --- |

IMTConRouteDealer::Name
Get the name of a dealer to whom requests under this rule will be sent.
C++
LPCWSTR IMTConRouteDealer::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConRouteDealer.Name()  
---  
Python (Manager API)
MTConRouteDealer.Name  
---  
Return Value
If successful, it returns a pointer to a string with the name of a dealer. Otherwise, it returns NULL.
Note
The name of the dealer is defined by the user account ([IMTUser::Name](imtuser_name.md "Name")), based on which the manager record is create.
The pointer to the resulting string is valid for the lifetime of the [IMTConRouteDealer](imtconroutedealer.md "IMTConRouteDealer") object.
To use the line after the object removal (call of the [IMTConRouteDealer::Release](imtconroutedealer_release.md "Release") method of this object), a copy of it should be created.
The maximum name length is 32 characters (including the end-of-line character).