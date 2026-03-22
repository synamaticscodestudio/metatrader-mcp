# ReportModuleCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Reports ](serverapi_config_report.md "Report Configuration")/ ReportModuleCreate | [](imtserverapi_reportcreate.md "ReportCreate") [](imtserverapi_reportparamcreate.md "ReportParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ReportModuleCreate
Create an object of configuration of a report module.
IMTConReportModule* IMTServerAPI::ReportModuleCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConReportModule](imtconreportmodule.md "IMTConReportModule") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConReportModule::Release](imtconreportmodule_release.md "Release") method of this object.