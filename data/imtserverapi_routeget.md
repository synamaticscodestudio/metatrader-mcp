# RouteGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Routing ](serverapi_config_route.md "Routing")/ RouteGet | [](imtserverapi_routenext.md "RouteNext") [](serverapi_config_report.md "Report Configuration") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::RouteGet
Get a routing rule by the name.
MTAPIRES IMTServerAPI::RouteGet( LPCWSTR name, // Rule name IMTConRoute* route // An object of a routing rule )  
---  
Parameters
name
[in] The name of a routing rule.
route
[out] An object of a routing rule. The route object must be first created using the [IMTServerAPI::RouteCreate](imtserverapi_routecreate.md "RouteCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConRoute::Name()](imtconroute_name.md "Name") value is used as the name.