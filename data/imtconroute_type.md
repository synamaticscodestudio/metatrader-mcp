# Type (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ Type | [](imtconroute_request.md "Request") [](imtconroute_action.md "Action") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::Type
Get orders for which the rule is applicable.
C++
UINT IMTConRoute::Type() const  
---  
.NET (Gateway/Manager API)
EnTypeFlags CIMTConRoute.Type()  
---  
Python (Manager API)
MTConRoute.Type  
---  
Return Value
A value of the [IMTConRoute::EnTypeFlags](imtconroute_enum.htm#entypeflags) enumeration.
IMTConRoute::Type
Set orders for which the rule is applicable.
C++
MTAPIRES IMTConRoute::Type( const UINT type // Types of orders )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.Type( EnTypeFlags type // Types of orders )  
---  
Python (Manager API)
MTConRoute.Type  
---  
Parameters
type
[in] Types of orders for which the rule is applicable. To pass the types, the [IMTConRoute::EnTypeFlags](imtconroute_enum.htm#entypeflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.