# RouteUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Routing ](imtadminapi_config_route.md "Functions")/ RouteUnsubscribe | [](imtadminapi_routesubscribe.md "RouteSubscribe") [](imtadminapi_routeupdate.md "RouteUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::RouteUnsubscribe
Unsubscribe from events associated with the configuration of request routing.
C++
MTAPIRES IMTAdminAPI::RouteUnsubscribe( IMTConRouteSink* sink // A pointer to the IMTConRouteSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.RouteUnsubscribe( CIMTConRouteSink sink // CIMTConRouteSink object )  
---  
Python
AdminAPI.RouteUnsubscribe( sink # IMTConRouteSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConRouteSink](imtconroutesink.md "IMTConRouteSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This is a pair method to [IMTAdminAPI::RouteSubscribe](imtadminapi_routesubscribe.md "RouteSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.