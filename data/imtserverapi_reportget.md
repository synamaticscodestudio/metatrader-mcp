# ReportGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Reports ](serverapi_config_report.md "Report Configuration")/ ReportGet | [](imtserverapi_reportnext.md "ReportNext") [](imtserverapi_reportmoduletotal.md "ReportModuleTotal") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ReportGet
Get a report configuration by the name.
MTAPIRES IMTServerAPI::ReportGet( LPCWSTR name, // Name of the configuration IMTConReport* report // An object of report configuration )  
---  
Parameters
name
[in] The name of the configuration.
report
[out] An object of report configuration. The report object must be first created using the [IMTServerAPI::ReportCreate](imtserverapi_reportcreate.md "ReportCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConReport::Name](imtconreport_name.md "Name") value is used as the name.
This method allows getting report configurations created for the server where the plugin is running.
IMTServerAPI::ReportGet
Get a report configuration by the name considering the server.
MTAPIRES IMTServerAPI::ReportGet( UINT64 server, // Server ID LPCWSTR name, // Name of the configuration IMTConReport* report // An object of report configuration )  
---  
Parameters
server
[in] Identifier of the server the report configuration is created for.
name
[in] The name of the configuration.
report
[out] An object of report configuration. The report object must be first created using the [IMTServerAPI::ReportCreate](imtserverapi_reportcreate.md "ReportCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConReport::Name](imtconreport_name.md "Name") value is used as the name.