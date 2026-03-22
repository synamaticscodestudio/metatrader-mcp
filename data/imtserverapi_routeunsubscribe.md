# RouteUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Routing ](serverapi_config_route.md "Routing")/ RouteUnsubscribe | [](imtserverapi_routesubscribe.md "RouteSubscribe") [](imtserverapi_routeadd.md "RouteAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::RouteUnsubscribe
Unsubscribe from events and hooks associated with the configuration of request routing.
MTAPIRES IMTServerAPI::RouteUnsubscribe( IMTConRouteSink* sink // A pointer to the IMTConRouteSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConRouteSink](imtconroutesink.md "IMTConRouteSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This is a pair method to [IMTServerAPI::RouteSubscribe](imtserverapi_routesubscribe.md "RouteSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.