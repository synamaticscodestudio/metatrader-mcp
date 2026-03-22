# RouteDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Routing ](imtadminapi_config_route.md "Functions")/ RouteDelete | [](imtadminapi_routeupdatebatch.md "RouteUpdateBatch") [](imtadminapi_routedeletebatch.md "RouteDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::RouteDelete
Delete a routing rule by the name.
C++
MTAPIRES IMTAdminAPI::RouteDelete( LPCWSTR name // Rule name )  
---  
.NET
MTRetCode CIMTAdminAPI.RouteDelete( string name // Rule name )  
---  
Python
AdminAPI.RouteDelete( name # Rule name )  
---  
Parameters
name
[in] The name of a routing rule ([IMTConRoute::Name](imtconroute_name.md "Name")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Routing rules can be deleted only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
IMTAdminAPI::RouteDelete
Delete a routing rule by the index.
C++
MTAPIRES IMTAdminAPI::RouteDelete( const UINT pos // Position of a rule )  
---  
.NET
MTRetCode CIMTAdminAPI.RouteDelete( uint pos // Position of a rule )  
---  
Python
AdminAPI.RouteDelete( pos # Position of a rule )  
---  
Parameters
pos
[in] Position of a routing rule, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Routing rules can be deleted only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.