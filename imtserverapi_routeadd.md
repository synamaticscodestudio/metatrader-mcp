# RouteAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Routing ](serverapi_config_route.md "Routing")/ RouteAdd | [](imtserverapi_routeunsubscribe.md "RouteUnsubscribe") [](imtserverapi_routedelete.md "RouteDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::RouteAdd
Add or update a routing rule.
MTAPIRES IMTServerAPI::RouteAdd( IMTConRoute* route // An object of a routing rule )  
---  
Parameters
route
[in] An object of a routing rule.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When calling the method, a check is made whether the entry already exists. If the entry already exists, it is updated, otherwise a new entry is added. A key field for comparison is the rule name [IMTConRoute::Name()](imtconroute_name.md "Name"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConRouteSink::OnRouteUpdate](imtconroutesink_onrouteupdate.md "OnRouteUpdate") notification method is not called.
A configuration can be added or updated only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.