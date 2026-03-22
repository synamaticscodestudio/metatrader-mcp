# Action (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ Action | [](imtconroute_type.md "Type") [](imtconroute_paramtype.md "ParamType") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::Action
Get the action that is applied to a request in accordance with a rule.
C++
UINT IMTConRoute::Action() const  
---  
.NET (Gateway/Manager API)
EnRouteAction CIMTConRoute.Action()  
---  
Python (Manager API)
MTConRoute.Action  
---  
Return Value
A value of the [IMTConRoute::EnRouteAction](imtconroute_enum.htm#enrouteaction) enumeration.
IMTConRoute::Action
Set the action that is applied to a request in accordance with a rule.
C++
MTAPIRES IMTConRoute::Action( const UINT action // Type of action )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.Action( EnRouteAction action // Type of action )  
---  
Python (Manager API)
MTConRoute.Action  
---  
Parameters
action
[in] The type of action that is applied to a request in accordance with a rule. To pass the type, the [IMTConRoute::EnRouteAction](imtconroute_enum.htm#enrouteaction) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.