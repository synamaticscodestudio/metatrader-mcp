# Mode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ Mode | [](imtconroute_name.md "Name") [](imtconroute_request.md "Request") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::Mode
Get the state of the routing rule.
C++
UINT IMTConRoute::Mode() const  
---  
.NET (Gateway/Manager API)
EnRouteMode CIMTConRoute.Mode()  
---  
Python (Manager API)
MTConRoute.Mode  
---  
Return Value
A value of the [IMTConRoute::EnRouteMode](imtconroute_enum.htm#enroutemode) enumeration.
IMTConRoute::Mode
Set the state of the routing rule.
C++
MTAPIRES IMTConRoute::Mode( const UINT mode // State of a rule )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.Mode( EnRouteMode mode // State of a rule )  
---  
Python (Manager API)
MTConRoute.Mode  
---  
Parameters
mode
[in] The state of a routing rule. To pass the state, the [IMTConRoute::EnRouteMode](imtconroute_enum.htm#enroutemode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.