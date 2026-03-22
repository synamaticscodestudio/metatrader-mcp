# RouteNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Routing ](serverapi_config_route.md "Routing")/ RouteNext | [](imtserverapi_routetotal.md "RouteTotal") [](imtserverapi_routeget.md "RouteGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::RouteNext
Get a routing rule by the index.
MTAPIRES IMTServerAPI::RouteNext( const UINT pos, // Position of a rule IMTConRoute* route // An object of a routing rule )  
---  
Parameters
pos
[in] Position of a routing rule, starting with 0.
route
[out] An object of a routing rule. The route object must be first created using the [IMTServerAPI::RouteCreate](imtserverapi_routecreate.md "RouteCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the parameters of a routing rule with a specified index to the route object.