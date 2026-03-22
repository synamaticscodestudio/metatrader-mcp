# RouteSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Routing ](serverapi_config_route.md "Routing")/ RouteSubscribe | [](imtserverapi_routedealercreate.md "RouteDealerCreate") [](imtserverapi_routeunsubscribe.md "RouteUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::RouteSubscribe
Subscribe to events and hooks associated with the configuration of request routing.
MTAPIRES IMTServerAPI::RouteSubscribe( IMTConRouteSink* sink // A pointer to the IMTConRouteSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConRouteSink](imtconroutesink.md "IMTConRouteSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConRouteSink](imtconroutesink.md "IMTConRouteSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::RouteUnsubscribe](imtserverapi_routeunsubscribe.md "RouteUnsubscribe") or until the plugin is deleted.