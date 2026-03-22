# ReportGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Reports ](imtadminapi_config_report.md "Functions")/ ReportGet | [](imtadminapi_reportnext.md "ReportNext") [](imtadminapi_reportmoduletotal.md "ReportModuleTotal") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ReportGet
Get a report configuration by the name.
C++
MTAPIRES IMTAdminAPI::ReportGet( const UINT64 server_id, // Server ID LPCWSTR name, // Report configuration name IMTConReport* report // An object of report configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.ReportGet( ulong server_id, // Server ID string name, // Report configuration name CIMTConReport report // An object of report configuration )  
---  
Python
AdminAPI.ReportGet( server_id, # Server ID name # Report configuration name )  
---  
Parameters
server_id
[in] The identifier of the server for which we get the report configuration. The [IMTConServer::Id](imtconserver_id.md "Id") value is used as the identifier.
name
[in] Name of the report configuration. The [IMTConReport::Name](imtconreport_name.md "Name") value is used as the name..
report
[out] An object of report configuration. The object must first be created using the [IMTAdminAPI::ReportCreate](imtadminapi_reportcreate.md "ReportCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies parameters of the specified report configuration to the report object.