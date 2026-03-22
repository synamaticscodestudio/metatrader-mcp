# RouteDealerCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Routing ](serverapi_config_route.md "Routing")/ RouteDealerCreate | [](imtserverapi_routeconditioncreate.md "RouteConditionCreate") [](imtserverapi_routesubscribe.md "RouteSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::RouteDealerCreate
Create an object of a dealer configuration to whom requests under this rule will be sent.
IMTConRouteDealer* IMTServerAPI::RouteDealerCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConRouteDealer](imtconroutedealer.md "IMTConRouteDealer") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConRouteDealer::Release](imtconroutedealer_release.md "Release") method of this object.