# ReportCurrent (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Reports ](imtreportapi_config_report.md "Report Configuration")/ ReportCurrent | [](imtreportapi_reportcreate.md "ReportCreate") [](imtreportapi_config_common.md "Common") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ReportCurrent
Get the configuration of the report that is currently being generated.
MTAPIRES IMTReportAPI::ReportCurrent( IMTConReport* report // An object of report configuration )  
---  
Parameters
report
[out] An object of report configuration. The report object must be first created using the [IMTReportAPI::ReportCreate](imtreportapi_reportcreate.md "ReportCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.