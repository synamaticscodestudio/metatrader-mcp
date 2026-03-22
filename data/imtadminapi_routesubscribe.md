# RouteSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Routing ](imtadminapi_config_route.md "Functions")/ RouteSubscribe | [](imtadminapi_routedealercreate.md "RouteDealerCreate") [](imtadminapi_routeunsubscribe.md "RouteUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::RouteSubscribe
Subscribe to events associated with the configuration of request routing.
C++
MTAPIRES IMTAdminAPI::RouteSubscribe( IMTConRouteSink* sink // A pointer to the IMTConRouteSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.RouteSubscribe( CIMTConRouteSink sink // CIMTConRouteSink object )  
---  
Python
AdminAPI.RouteSubscribe( sink # IMTConRouteSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConRouteSink](imtconroutesink.md "IMTConRouteSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConRouteSink](imtconroutesink.md "IMTConRouteSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConRouteSink::OnRouteSync](imtconroutesink_onroutesync.md "OnRouteSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::RouteUnsubscribe](imtadminapi_routeunsubscribe.md "RouteUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.