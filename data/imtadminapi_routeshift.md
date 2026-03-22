# RouteShift (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Routing ](imtadminapi_config_route.md "Functions")/ RouteShift | [](imtadminapi_routedeletebatch.md "RouteDeleteBatch") [](imtadminapi_routetotal.md "RouteTotal") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::RouteShift
Move a routing rule in the list.
C++
MTAPIRES IMTAdminAPI::RouteShift( const UINT pos, // Position of a rule const int shift // Shift )  
---  
.NET
MTRetCode CIMTAdminAPI.RouteShift( uint pos, // Position of a rule int shift // Shift )  
---  
Python
AdminAPI.RouteShift( pos, # Position of a rule shift # Shift )  
---  
Parameters
pos
[in] Position of a routing rule, starting with 0.
shift
[in] Shift of a rule relative to its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Rules are executed from top downwards. If a received request corresponds to the conditions of the top rule, it is handled under this rule, otherwise conditions of the second rule are checked, and so on. A request is handled in accordance with the rules until it is executed or passed to a dealer.
The position of a routing rule can be changed only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.