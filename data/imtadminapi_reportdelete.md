# ReportDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Reports ](imtadminapi_config_report.md "Functions")/ ReportDelete | [](imtadminapi_reportupdatebatch.md "ReportUpdateBatch") [](imtadminapi_reportdeletebatch.md "ReportDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ReportDelete
Delete a report configuration by the name.
C++
MTAPIRES IMTAdminAPI::ReportDelete( const UINT64 server_id, // Server ID LPCWSTR name // Report configuration name )  
---  
.NET
MTRetCode CIMTAdminAPI.ReportDelete( ulong server_id, // Server ID string name // Report configuration name )  
---  
Python
AdminAPI.ReportDelete( server_id # Server ID name # Report configuration name )  
---  
Parameters
server_id
[in] The identifier of the server for which we delete the report configuration. The [IMTConServer::Id](imtconserver_id.md "Id") value is used as the identifier.
name
[in] Name of the report configuration. The [IMTConReport::Name](imtconreport_name.md "Name") value is used as the name..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only when connecting to the main server. In all other cases the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
IMTAdminAPI::ReportDelete
Delete a report configuration by the index.
C++
MTAPIRES IMTAdminAPI::ReportDelete( const UINT pos // Position of the configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.ReportDelete( uint pos // Position of the configuration )  
---  
Python
AdminAPI.ReportDelete( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.