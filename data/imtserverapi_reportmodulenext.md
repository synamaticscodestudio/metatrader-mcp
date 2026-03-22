# ReportModuleNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Reports ](serverapi_config_report.md "Report Configuration")/ ReportModuleNext | [](imtserverapi_reportmoduletotal.md "ReportModuleTotal") [](imtserverapi_reportmoduleget.md "ReportModuleGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ReportModuleNext
Get a report module by the index.
MTAPIRES IMTServerAPI::ReportModuleNext( const UINT pos, // Position of the configuration IMTConReportModule* module // An object of the report module configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
module
[out] The report module configuration object. The module object must be first created using the [IMTServerAPI::ReportModuleCreate](imtserverapi_reportmodulecreate.md "ReportModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies a report configuration with a specified index to the module object.