# ManagerReportCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Managers ](imtadminapi_config_manager.md "Functions")/ ManagerReportCreate | [](imtadminapi_manageraccesscreate.md "ManagerAccessCreate") [](imtadminapi_managersubscribe.md "ManagerSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ManagerReportCreate
Create an object for the manager's permission to access the report.
C++
IMTConManagerReport* IMTAdminAPI::ManagerReportCreate()  
---  
.NET
CIMTConManagerReport CIMTAdminAPI.ManagerReportCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConManagerReport](imtconmanagerreport.md "IMTConManagerReport") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConManagerReport::Release](imtconmanagerreport_release.md "Release") method of this object.