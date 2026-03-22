# RouteShift (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Routing ](serverapi_config_route.md "Routing")/ RouteShift | [](imtserverapi_routedelete.md "RouteDelete") [](imtserverapi_routetotal.md "RouteTotal") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::RouteShift
Move a routing rule in the list.
MTAPIRES IMTServerAPI::RouteShift( const UINT pos, // Position of a rule const int shift // Shift )  
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
The position of a routing rule can be changed only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.