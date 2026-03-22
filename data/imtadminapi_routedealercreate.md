# RouteDealerCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Routing ](imtadminapi_config_route.md "Functions")/ RouteDealerCreate | [](imtadminapi_routeconditioncreate.md "RouteConditionCreate") [](imtadminapi_routesubscribe.md "RouteSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::RouteDealerCreate
Create an object of a dealer configuration to whom requests under this rule will be sent.
C++
IMTConRouteDealer* IMTAdminAPI::RouteDealerCreate()  
---  
.NET
CIMTConRouteDealer CIMTAdminAPI.RouteDealerCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConRouteDealer](imtconroutedealer.md "IMTConRouteDealer") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConRouteDealer::Release](imtconroutedealer_release.md "Release") method of this object.