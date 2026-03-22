# ManagerReportCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Managers ](imtmanagerapi_config_manager.md "Managers")/ ManagerReportCreate | [](imtmanagerapi_manageraccesscreate.md "ManagerAccessCreate") [](imtmanagerapi_managercurrent.md "ManagerCurrent") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ManagerReportCreate
Create an object for the manager's permission to access the report.
C++
IMTConManagerReport* IMTManagerAPI::ManagerReportCreate()  
---  
.NET
CIMTConManagerReport CIMTManagerAPI.ManagerReportCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConManagerReport](imtconmanagerreport.md "IMTConManagerReport") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConManagerReport::Release](imtconmanagerreport_release.md "Release") method of this object.