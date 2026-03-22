# RouteCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Routing ](imtadminapi_config_route.md "Functions")/ RouteCreate | [](imtadminapi_config_route.md "Functions") [](imtadminapi_routeconditioncreate.md "RouteConditionCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::RouteCreate
Create an object of a routing rule.
C++
IMTConRoute* IMTAdminAPI::RouteCreate()  
---  
.NET
CIMTConRoute CIMTAdminAPI.RouteCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConRoute](imtconroute.md "IMTConRoute") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConRoute::Release](imtconroute_release.md "Release") method of this object.