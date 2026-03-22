# RouteNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Routing ](imtadminapi_config_route.md "Functions")/ RouteNext | [](imtadminapi_routetotal.md "RouteTotal") [](imtadminapi_routeget.md "RouteGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::RouteNext
Get a routing rule by the index.
C++
MTAPIRES IMTAdminAPI::RouteNext( const UINT pos, // Position of a rule IMTConRoute* route // An object of a routing rule )  
---  
.NET
MTRetCode CIMTAdminAPI.RouteNext( uint pos, // Position of a rule CIMTConRoute route // An object of a routing rule )  
---  
Python
AdminAPI.RouteNext( pos # Position of a rule )  
---  
Parameters
pos
[in] Position of a routing rule, starting with 0.
route
[out] An object of a routing rule. The route object must be first created using the [IMTAdminAPI::RouteCreate](imtadminapi_routecreate.md "RouteCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the parameters of a routing rule with a specified index to the route object.