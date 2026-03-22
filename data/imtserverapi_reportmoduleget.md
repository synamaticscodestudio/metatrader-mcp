# ReportModuleGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Reports ](serverapi_config_report.md "Report Configuration")/ ReportModuleGet | [](imtserverapi_reportmodulenext.md "ReportModuleNext") [](serverapi_config_email.md "Mail Servers") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ReportModuleGet
Get a report module configuration by the name.
MTAPIRES IMTServerAPI::ReportModuleGet( LPCWSTR name, // The name of the report module IMTConReportModule* module // An object of the report module configuration )  
---  
Parameters
name
[in] The name of a report module.
module
[out] The report module configuration object. The module object must be first created using the [IMTServerAPI::ReportModuleCreate](imtserverapi_reportmodulecreate.md "ReportModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The module object must be first created using the [IMTConReportModule::Module](imtconreportmodule_module.md "Module") method.
This method allows getting configurations of report modules created for the server where the plugin is running.
IMTServerAPI::ReportModuleGet
Get a report module configuration by the name considering the server.
MTAPIRES IMTServerAPI::ReportModuleGet( UINT64 server, // Server ID LPCWSTR name, // The name of the report module IMTConReportModule* module // An object of the report module configuration )  
---  
Parameters
server
[in] Identifier of the server the report module configuration is created for.
name
[in] The name of a report module.
module
[out] The report module configuration object. The module object must be first created using the [IMTServerAPI::ReportModuleCreate](imtserverapi_reportmodulecreate.md "ReportModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The module object must be first created using the [IMTConReportModule::Module](imtconreportmodule_module.md "Module") method.