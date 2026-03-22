# ReportCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Reports ](serverapi_config_report.md "Report Configuration")/ ReportCreate | [](serverapi_config_report.md "Report Configuration") [](imtserverapi_reportmodulecreate.md "ReportModuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ReportCreate
Create an object of the configuration of reports.
IMTConReport* IMTServerAPI::ReportCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConReport](imtconreport.md "IMTConReport") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConReport::Release](imtconreport_release.md "Release") method of this object.