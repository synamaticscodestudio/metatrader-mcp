# RouteDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Routing ](serverapi_config_route.md "Routing")/ RouteDelete | [](imtserverapi_routeadd.md "RouteAdd") [](imtserverapi_routeshift.md "RouteShift") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::RouteDelete
Delete a routing rule by the name.
MTAPIRES IMTServerAPI::RouteDelete( LPCWSTR name // Rule name )  
---  
Parameters
name
[in] The name of a routing rule ([IMTConRoute::Name](imtconroute_name.md "Name")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Routing rules can be deleted only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
IMTServerAPI::RouteDelete
Delete a routing rule by the index.
MTAPIRES IMTServerAPI::RouteDelete( const UINT pos // Position of a rule )  
---  
Parameters
pos
[in] Position of a routing rule, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Routing rules can be deleted only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.