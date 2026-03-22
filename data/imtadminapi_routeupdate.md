# RouteUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Routing ](imtadminapi_config_route.md "Functions")/ RouteUpdate | [](imtadminapi_routeunsubscribe.md "RouteUnsubscribe") [](imtadminapi_routeupdatebatch.md "RouteUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::RouteUpdate
Add or update a routing rule.
C++
MTAPIRES IMTAdminAPI::RouteUpdate( IMTConRoute* route // An object of a routing rule )  
---  
.NET
MTRetCode CIMTAdminAPI.RouteUpdate( CIMTConRoute route // An object of a routing rule )  
---  
Python
AdminAPI.RouteUpdate( route # An object of a routing rule )  
---  
Parameters
route
[in] An object of a routing rule.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be added or updated only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.