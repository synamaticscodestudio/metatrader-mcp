# RouteCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Routing ](serverapi_config_route.md "Routing")/ RouteCreate | [](serverapi_config_route.md "Routing") [](imtserverapi_routeconditioncreate.md "RouteConditionCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::RouteCreate
Create an object of a routing rule.
IMTConRoute* IMTServerAPI::RouteCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConRoute](imtconroute.md "IMTConRoute") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConRoute::Release](imtconroute_release.md "Release") method of this object.