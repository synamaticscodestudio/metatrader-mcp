# RouteGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Routing ](imtadminapi_config_route.md "Functions")/ RouteGet | [](imtadminapi_routenext.md "RouteNext") [](imtadminapi_config_report.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::RouteGet
Get a routing rule by the name.
C++
MTAPIRES IMTAdminAPI::RouteGet( LPCWSTR name, // Rule name IMTConRoute* route // An object of a routing rule )  
---  
.NET
MTRetCode CIMTAdminAPI.RouteGet( string name, // Rule name CIMTConRoute route // An object of a routing rule )  
---  
Python
AdminAPI.RouteGet( name # Rule name )  
---  
Parameters
name
[in] The name of a routing rule.
route
[out] An object of a routing rule. The route object must be first created using the [IMTAdminAPI::RouteCreate](imtadminapi_routecreate.md "RouteCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConRoute::Name()](imtconroute_name.md "Name") value is used as the name.