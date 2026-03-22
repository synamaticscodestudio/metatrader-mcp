# RouteConditionCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Routing ](serverapi_config_route.md "Routing")/ RouteConditionCreate | [](imtserverapi_routecreate.md "RouteCreate") [](imtserverapi_routedealercreate.md "RouteDealerCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::RouteConditionCreate
Create an object of an additional condition to apply a rule.
IMTConCondition* IMTServerAPI::RouteConditionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCondition](imtconcondition.md "IMTConCondition") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConCondition::Release](imtconcondition_release.md "Release") method of this object.