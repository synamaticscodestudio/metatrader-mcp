# ReportModuleCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Reports ](imtadminapi_config_report.md "Functions")/ ReportModuleCreate | [](imtadminapi_reportcreate.md "ReportCreate") [](imtadminapi_reportparamcreate.md "ReportParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ReportModuleCreate
Create an object of configuration of a report module.
C++
IMTConReportModule* IMTAdminAPI::ReportModuleCreate()  
---  
.NET
CIMTConReportModule CIMTAdminAPI.ReportModuleCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConReportModule](imtconreportmodule.md "IMTConReportModule") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConReportModule::Release](imtconreportmodule_release.md "Release") method of this object.