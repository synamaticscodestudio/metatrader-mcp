# ReportModuleGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Reports ](imtadminapi_config_report.md "Functions")/ ReportModuleGet | [](imtadminapi_reportmodulenext.md "ReportModuleNext") [](imtadminapi_config_email.md "Mail Servers") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ReportModuleGet
Get a report module configuration by the name.
C++
MTAPIRES IMTAdminAPI::ReportModuleGet( const UINT64 server_id, // Server ID LPCWSTR name, // The name of the report module IMTConReportModule* module // An object of the report module configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.ReportModuleGet( ulong server_id, // Server ID string name, // The name of the report module CIMTConReportModule module // An object of the report module configuration )  
---  
Python
AdminAPI.ReportModuleGet( server_id, # Server ID name # The name of the report module )  
---  
Parameters
server_id
[in] The identifier of the server for which we get the report module configuration. The [IMTConServer::Id](imtconserver_id.md "Id") value is used as the identifier.
name
[in] The name of a report module.
module
[out] The report module configuration object. The module object must be first created using the [IMTAdminAPI::ReportModuleCreate](imtadminapi_reportmodulecreate.md "ReportModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConReportModule::Module()](imtconreportmodule_module.md "Module") value is used as the name.