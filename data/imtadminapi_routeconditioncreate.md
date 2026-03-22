# RouteConditionCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Routing ](imtadminapi_config_route.md "Functions")/ RouteConditionCreate | [](imtadminapi_routecreate.md "RouteCreate") [](imtadminapi_routedealercreate.md "RouteDealerCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::RouteConditionCreate
Create an object of an additional condition to apply a rule.
IMTConCondition* IMTAdminAPI::RouteConditionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCondition](imtconcondition.md "IMTConCondition") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConCondition::Release](imtconcondition_release.md "Release") method of this object.