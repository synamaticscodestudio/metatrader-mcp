# ReportCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Reports ](imtreportapi_config_report.md "Report Configuration")/ ReportCreate | [](imtreportapi_config_report.md "Report Configuration") [](imtreportapi_reportcurrent.md "ReportCurrent") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ReportCreate
Create an object of the configuration of reports.
virtual IMTConReport* IMTReportAPI::ReportCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConReport](imtconreport.md "IMTConReport") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConReport::Release](imtconreport_release.md "Release") method of this object.