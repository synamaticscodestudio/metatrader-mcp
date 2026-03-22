# ManagerReportCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Managers ](imtreportapi_config_manager.md "Managers")/ ManagerReportCreate | [](imtreportapi_manageraccesscreate.md "ManagerAccessCreate") [](imtreportapi_managercurrent.md "ManagerCurrent") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ManagerReportCreate
Create an object for the manager's permission to access the report.
IMTConManagerReport* IMTReportAPI::ManagerReportCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConManagerReport](imtconmanagerreport.md "IMTConManagerReport") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConManagerReport::Release](imtconmanagerreport_release.md "Release") method of this object.