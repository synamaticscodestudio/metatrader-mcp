# Request (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ Request | [](imtconroute_mode.md "Mode") [](imtconroute_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::Request
Get requests for which the rule is applicable.
C++
UINT IMTConRoute::Request() const  
---  
.NET (Gateway/Manager API)
EnRouteFlags CIMTConRoute.Request()  
---  
Python (Manager API)
MTConRoute.Request  
---  
Return Value
A value of the [IMTConRoute::EnRouteFlags](imtconroute_enum.htm#enrouteflags) enumeration.
IMTConRoute::Request
Set requests for which the rule is applicable.
C++
MTAPIRES IMTConRoute::Request( const UINT request // Types of requests )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.Request( EnRouteFlags request // Types of requests )  
---  
Python (Manager API)
MTConRoute.Request  
---  
Parameters
request
[in] The requests for which the rule is applicable. To pass the types, the [IMTConRoute::EnRouteFlags](imtconroute_enum.htm#enrouteflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.