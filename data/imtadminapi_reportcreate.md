# ReportCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Reports ](imtadminapi_config_report.md "Functions")/ ReportCreate | [](imtadminapi_config_report.md "Functions") [](imtadminapi_reportmodulecreate.md "ReportModuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ReportCreate
Create an object of the configuration of reports.
C++
IMTConReport* IMTAdminAPI::ReportCreate()  
---  
.NET
CIMTConReport CIMTAdminAPI.ReportCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConReport](imtconreport.md "IMTConReport") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConReport::Release](imtconreport_release.md "Release") method of this object.