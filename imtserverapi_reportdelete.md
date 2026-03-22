# ReportDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Reports ](serverapi_config_report.md "Report Configuration")/ ReportDelete | [](imtserverapi_reportadd.md "ReportAdd") [](imtserverapi_reportshift.md "ReportShift") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ReportDelete
Delete a report configuration by the name.
MTAPIRES IMTServerAPI::ReportDelete( LPCWSTR name // Name of the configuration )  
---  
Parameters
name
[in] The name of the configuration to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
This method allows deleting only report configurations created for the main trade server.
The [IMTConReport::Name](imtconreport_name.md "Name") value is used as the report configuration name.
IMTServerAPI::ReportDelete
Delete a report configuration by the name considering the server.
MTAPIRES IMTServerAPI::ReportDelete( UINT64 server, // Server ID LPCWSTR name // Name of the configuration )  
---  
Parameters
server
[in] Identifier of the server the report configuration is created for.
name
[in] The name of the configuration to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
The [IMTConReport::Name](imtconreport_name.md "Name") value is used as the report configuration name.
IMTServerAPI::ReportDelete
Delete a report configuration by the index.
virtual MTAPIRES ReportDelete( const UINT pos // Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.