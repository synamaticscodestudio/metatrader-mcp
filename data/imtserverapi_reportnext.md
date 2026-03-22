# ReportNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Reports ](serverapi_config_report.md "Report Configuration")/ ReportNext | [](imtserverapi_reporttotal.md "ReportTotal") [](imtserverapi_reportget.md "ReportGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ReportNext
Get a report configuration by the index.
MTAPIRES IMTServerAPI::ReportNext( const UINT pos, // Position of the configuration IMTConReport* report // An object of report configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
report
[out] An object of report configuration. The report object must be first created using the [IMTServerAPI::ReportCreate](imtserverapi_reportcreate.md "ReportCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a report with a specified index to the report object.